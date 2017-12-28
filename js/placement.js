var rootRef = firebase.database().ref().child('placementlisting');

rootRef.on("child_added", snap => {
  var company = snap.child('company').val();
  var number = snap.child('number').val();
  var type = snap.child('type').val();

  $("#table_body").append("<tr><td>" + company + "</td><td>" + type + "</td><td>" + number + "</td><td><button class=btn>Enroll</button></td></tr>");

});