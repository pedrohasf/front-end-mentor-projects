const form = document.getElementById("form");
const email = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");
const errorIcon = document.getElementById("errorIcon");

form.addEventListener("submit", e => {
  e.preventDefault();
  const emailVal = email.value;

  if (!validateEmail(emailVal)) {
    errorMessage.classList.remove("hidden");
    errorIcon.classList.remove("hidden");
  } else {
    errorMessage.classList.add("hidden");
    errorIcon.classList.add("hidden");
    alert("Thank you!");
  }
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
