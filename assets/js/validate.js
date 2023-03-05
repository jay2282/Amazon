function clearError() {
  errors = document.getElementsByClassName("form-error");
  inputs = document.getElementsByClassName("inputs");

  for (const item of errors) {
    item.innerHTML = "";
  }

  for (const input of inputs) {
    input.style.border = "1px solid #cccccc";
  }
}

function setError(id, err) {
  element = document.getElementById(id);
  parentElement = element.closest(".form-item");
  parentElement.getElementsByClassName("form-error")[0].innerHTML = err;
  element.style.border = "1px solid #ee001c";
}

function validateForm() {
  var returnVal = true;
  clearError();

  // Name
  let mname = document.getElementById("name").value;
  let nameRegex = /^[a-zA-Z]+$/;

  if (mname.length == 0) {
    setError("name", "This is a required field.");
    returnVal = false;
  } else if (!nameRegex.test(mname)) {
    setError("name", "Enter a valid name.");
    returnVal = false;
  }

  // Email
  let email = document.getElementById("email").value;
  let emailregex = /^[a-z0-9]+@[a-z]+.[a-z]{2,3}/;

  if (email.length == 0) {
    setError("email", "This is a required field.");
    returnVal = false;
  } else if (!emailregex.test(email)) {
    setError("email", "Enter a valid Email.");
    returnVal = false;
  }

  // Phone
  let phone = document.getElementById("phone").value;
  let phoneregex = /^[7-9][0-9]{9}$/;
  if (phone.length == 0) {
    setError("phone", "This is a required field.");
    returnVal = false;
  } else if (!phoneregex.test(phone)) {
    setError("phone", "Enter a valid Phone Number.");
    returnVal = false;
  }

  // Subject
  var subject = document.getElementById("subject").value;
  if (subject == 0) {
    setError("subject", "This is a required field.");
    returnVal = false;
  }

  // Message
  var message = document.getElementById("message").value;
  if (message.length == 0) {
    setError("message", "This is a required field.");
    returnVal = false;
  }

  return returnVal;
}

var form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateForm()) {
    form.parentElement.innerHTML =
      "<p> Thank you for submitting your request. Our customer service team will respond in within the next working day. We can also be reached by phone at 999 8888888</p>";
  }
});
