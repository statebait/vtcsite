var rootRef = firebase.database().ref().child('placementlisting');

rootRef.on("child_added", snap => {
  var company = snap.child('company').val();
  var number = snap.child('number').val();
  var type = snap.child('type').val();
  var wages = snap.child('wages').val();
  var jobno = snap.key;

  $("#table_body").append("<tr><td>" + company + "</td><td>" + type + "</td><td>" + number + "</td><td>" + wages + "</td><td>" + jobno + "</td></tr>");

});

//Reference form data collection
var messageRef = firebase.database().ref('detailsforms');

//Listen for Submit
document.getElementById('detailsform').addEventListener('submit', clicky);

function clicky(e) {
  e.preventDefault();

  //Get Values
  var name = getInputVal('worker_name');
  var contact = getInputVal('contact_no');
  var certificate = getInputVal('certi_no');
  var company = getInputVal('company_name')
  var jobno = getInputVal('jobno');

  //Save Message
  saveMessage(name, contact, certificate, company, jobno);
}

//function to get value from form

function getInputVal(id) {
  return document.getElementById(id).value;
}

//saving form to firebase
function saveMessage(name, contact, certificate, company, jobno) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    contact: contact,
    certificate: certificate,
    company: company,
    jobno: jobno,
  });
}