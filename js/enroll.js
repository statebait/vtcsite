// Initialize Firebase
var config = {
  apiKey: "AIzaSyDnQhh6PxauVjYj-mW_If5-hhHFi6HNWZI",
  authDomain: "vtcsite-70c78.firebaseapp.com",
  databaseURL: "https://vtcsite-70c78.firebaseio.com",
  projectId: "vtcsite-70c78",
  storageBucket: "vtcsite-70c78.appspot.com",
  messagingSenderId: "54800151754"
};
firebase.initializeApp(config);

//Reference form data collection
var messageRef = firebase.database().ref('enrollforms');

var file;
var file1;
var file2;
var filename;
var filename1;
var filename2;
var downloadURL;
var downloadURL1;
var downloadURL2;

//Listen for Submit
document.getElementById('enrollform').addEventListener('submit', clicky);

//Aadhar Card Upload
$("#aadhar").on('change', function(e) {
  file = e.target.files[0];
  //File name
  filename = file.name;
  //Storage Reference
  var storageRef = firebase.storage().ref('aadhar/' + filename);
  //Upload files
  var uploadTask = storageRef.put(file);
  uploadTask.on('state_changed', function(snapshot) {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    document.querySelector('#p1').style.width = progress + '%';
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {
    // Handle unsuccessful uploads
  }, function() {
    // Handle successful uploads on complete
    downloadURL = uploadTask.snapshot.downloadURL;
  });
});

//Pass Certificate Upload
$("#pass_certificate").on('change', function(e) {
  file1 = e.target.files[0];
  filename1 = file1.name;
  var storageRef1 = firebase.storage().ref('pass/' + filename1);
  var uploadTask1 = storageRef1.put(file1);
  uploadTask1.on('state_changed', function(snapshot) {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    document.querySelector('#p2').style.width = progress + '%';
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {
    // Handle unsuccessful uploads
  }, function() {
    // Handle successful uploads on complete
    downloadURL1 = uploadTask1.snapshot.downloadURL;
  });
});

//Caste Certificate Upload
$("#caste_certificate").on('change', function(e) {
  file2 = e.target.files[0];
  filename2 = file2.name;
  var storageRef2 = firebase.storage().ref('caste/' + filename2);
  var uploadTask2 = storageRef2.put(file2);
  uploadTask2.on('state_changed', function(snapshot) {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    document.querySelector('#p3').style.width = progress + '%';
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {
    // Handle unsuccessful uploads
  }, function() {
    // Handle successful uploads on complete
    downloadURL2 = uploadTask2.snapshot.downloadURL;
  });
});

function clicky(e) {
  e.preventDefault();

  //Get Values
  var name = getInputVal('nameText');
  var contact = getInputVal('noText');
  var age = getInputVal('ageText');
  var address = getInputVal('addressText');
  var sex = getInputVal('sexText');
  var course = getInputVal('courseText');
  var aadhar = downloadURL;
  var pass = downloadURL1;
  var caste = downloadURL2;
  var aadhar_name = filename;
  var pass_name = filename1;
  var caste_name = filename2;

  //Save Message
  saveMessage(name, contact, age, sex, course, address, aadhar, pass, caste, aadhar_name, pass_name, caste_name);

  //Show alert
  document.querySelector('.alert').style.display = 'block';

  //Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  //Form Reset
  document.getElementById("enrollform").reset();

  //Progress Bars reset
  document.querySelector('#p1').style.width = 0 + '%';
  document.querySelector('#p2').style.width = 0 + '%';
  document.querySelector('#p3').style.width = 0 + '%';

}

//function to get value from form
function getInputVal(id) {
  return document.getElementById(id).value;
}

//saving form to firebase
function saveMessage(name, contact, age, sex, course, address, aadhar, pass, caste, aadhar_name, pass_name, caste_name) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    contact: contact,
    age: age,
    address: address,
    sex: sex,
    course: course,
    aadhar: aadhar,
    pass: pass,
    caste: caste,
    aadhar_name: aadhar_name,
    pass_name: pass_name,
    caste_name: caste_name
  });
}