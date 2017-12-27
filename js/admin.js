var rootRef = firebase.database().ref().child('enrollforms');

rootRef.on("child_added", snap => {
  var name = snap.child('name').val();
  var contact = snap.child('contact').val();
  var age = snap.child('age').val();
  var sex = snap.child('sex').val();
  var course = snap.child('course').val();

  $("#table_body").append("<tr><td>" + name + "</td><td>" + contact + "</td><td>" + age + "</td><td>" + sex + "</td><td>" + course + "</td></tr>");
});