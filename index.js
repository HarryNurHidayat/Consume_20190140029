function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  localStorage.setItem("nama", profile.getName());
  localStorage.setItem("image", profile.getImageUrl());
  localStorage.setItem("email", profile.getEmail());
  window.location.href = "/access.html";
}

function onLoad() {
  gapi.load("auth2", function () {
    gapi.auth2.init();
  });
}

$("#user").ready(function () {
  var user = document.getElementById("user");
  user.innerHTML = `Hallo, ${localStorage.getItem("nama")}`;
});
