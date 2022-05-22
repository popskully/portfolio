// script
function SendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  if (params.name === "" || params.email === "" || params.message === "") {
    alert("Please fill in all fields");
  } else {
    emailjs
      .send("portfolio_service", "contact_form", params)
      .then(function (res) {
        alert("Message sent!" + res.status);
      });
  }
}
