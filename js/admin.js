var rootRef = firebase.database().ref().child('enrollforms');

rootRef.on("child_added", snap => {
  var name = snap.child('name').val();
  var contact = snap.child('contact').val();
  var age = snap.child('age').val();
  var sex = snap.child('sex').val();
  var course = snap.child('course').val();

  $("#table_body").append("<tr><td>" + name + "</td><td>" + contact + "</td><td>" + age + "</td><td>" + sex + "</td><td>" + course + "</td></tr>");
});

var placeRef = firebase.database().ref().child('detailsforms');

placeRef.on("child_added", snap => {
  var name = snap.child('name').val();
  var contact = snap.child('contact').val();
  var certificate = snap.child('certificate').val();
  var company = snap.child('company').val();
  var jobno = snap.child('jobno').val();

  $("#table_body2").append("<tr><td>" + name + "</td><td>" + contact + "</td><td>" + certificate + "</td><td>" + company + "</td><td>" + jobno + "</td></tr>");
});

//Reference form data collection
var messageRef = firebase.database().ref('placementlisting');

//Listen for Submit
document.getElementById('companyform').addEventListener('submit', clicky);

function clicky(e) {
  e.preventDefault();

  //Get Values
  var company = getInputVal('company-name');
  var type = getInputVal('worker-type');
  var number = getInputVal('worker-no');
  var wages = getInputVal('wages');

  //Save Message
  saveMessage(company, type, number, wages);
  /*
    //Show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 3 seconds
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 3000);*/
}

//function to get value from form
function getInputVal(id) {
  return document.getElementById(id).value;
}

//saving form to firebase
function saveMessage(company, type, number, wages) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    company: company,
    type: type,
    number: number,
    wages: wages
  });
}

function show_enroll() {
  var x = document.getElementById("enrollment_table");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function show_enroll2() {
  var x = document.getElementById("placed_table");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function delete_dataset() {

  var table = getInputVal('table_select');
  var uid = getInputVal('data_id');
  console.log(uid);
  console.log(table);
  if (table == "Placement Company") {
    var deleteRef = firebase.database().ref('placementlisting').child(uid);
    deleteRef.remove();
  } else if (table == "Enrollment Forms") {
    var deleteRef = firebase.database().ref('enrollforms').child(uid);
    deleteRef.remove();
  } else if (table == "Placed Workers") {
    var deleteRef = firebase.database().ref('detailsforms').child(uid);
    deleteRef.remove();
  }
}