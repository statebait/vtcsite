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

//Listen for Submit
document.getElementById('enrollform').addEventListener('submit', clicky);

function clicky(e) {
  e.preventDefault();

  //Get Values
  var name = getInputVal('nameText');
  var contact = getInputVal('noText');
  var age = getInputVal('ageText');
  var sex = getInputVal('sexText');
  var course = getInputVal('courseText');

  //Save Message
  saveMessage(name, contact, age, sex, course);

  //Show alert
  document.querySelector('.alert').style.display = 'block';

  //Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);
}

//function to get value from form

function getInputVal(id) {
  return document.getElementById(id).value;
}

//saving form to firebase
function saveMessage(name, contact, age, sex, course) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    contact: contact,
    age: age,
    sex: sex,
    course: course
  });
}