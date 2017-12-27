var nameText = document.getElementById("nameText");
var noText = document.getElementById("noText");
var ageText = document.getElementById("ageText");
var fireheading = document.getElementById("fireheading");
var submitBtn = document.getElementById("submitBtn");

var firebaseHeadingRef = firebase.database().ref().child("fire1");
firebaseHeadingRef.on('value', function(snapshot) {
  fireheading.innerText = snapshot.val();
})

function clicky() {
  var firebaseRef = firebase.database();
  var name = nameText.value;
  firebaseRef.push().set(name);
}