var rootRef = firebase.database().ref().child('enrollforms');

rootRef.on("child_added", snap => {
  var name = snap.child('name').val();
  var contact = snap.child('contact').val();
  var age = snap.child('age').val();
  var sex = snap.child('sex').val();
  var course = snap.child('course').val();

  $("#table_body").append("<tr><td>" + name + "</td><td>" + contact + "</td><td>" + age + "</td><td>" + sex + "</td><td>" + course + "</td></tr>");
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

  //Save Message
  saveMessage(company, type, number);
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
function saveMessage(company, type, number) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    company: company,
    type: type,
    number: number,
  });
}