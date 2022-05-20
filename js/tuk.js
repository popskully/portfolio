// script
function SendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("portfolio_service", "contact_form", params)
    .then(function (res) {
      alert("Message sent!" + res.status);
    });
}
