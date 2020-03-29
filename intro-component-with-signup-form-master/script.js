const form = document.getElementById("form");
const email = document.getElementById("Email");
const firstName = document.getElementById("FirstName");
const lastName = document.getElementById("LastName");
const password = document.getElementById("password");
const errorMessage = document.querySelectorAll(".error-message");
const errorIcon = document.querySelectorAll(".error-icon");

form.addEventListener("submit", e => {
  e.preventDefault();
  const emailVal = email.value;
  const firstNameLength = firstName.value.length;
  const lastNameLength = lastName.value.length;
  const passwordLength = password.value.length;

  if (!validateEmail(emailVal)) {
    errorMessage[2].classList.remove("hidden");
    errorIcon[2].classList.remove("hidden");
    email.classList.remove("border-gray-400");
    email.classList.add("border-red-600");
    email.classList.remove("mb-6");
  } else {
    errorMessage[2].classList.add("hidden");
    errorIcon[2].classList.add("hidden");
    email.classList.add("border-gray-400");
    email.classList.remove("border-red-600");
    email.classList.add("mb-6");
  }
  if (!firstNameLength) {
    errorMessage[0].classList.remove("hidden");
    errorIcon[0].classList.remove("hidden");
    firstName.classList.remove("border-gray-400");
    firstName.classList.add("border-red-600");
    firstName.classList.remove("mb-6");
  } else {
    errorMessage[0].classList.add("hidden");
    errorIcon[0].classList.add("hidden");
    firstName.classList.add("border-gray-400");
    firstName.classList.remove("border-red-600");
    firstName.classList.add("mb-6");
  }
  if (!lastNameLength) {
    errorMessage[1].classList.remove("hidden");
    errorIcon[1].classList.remove("hidden");
    lastName.classList.remove("border-gray-400");
    lastName.classList.add("border-red-600");
    lastName.classList.remove("mb-6");
  } else {
    errorMessage[1].classList.add("hidden");
    errorIcon[1].classList.add("hidden");
    lastName.classList.add("border-gray-400");
    lastName.classList.remove("border-red-600");
    lastName.classList.add("mb-6");
  }
  if (!passwordLength) {
    errorMessage[3].classList.remove("hidden");
    errorIcon[3].classList.remove("hidden");
    password.classList.remove("border-gray-400");
    password.classList.add("border-red-600");
    password.classList.remove("mb-6");
  } else {
    errorMessage[3].classList.add("hidden");
    errorIcon[3].classList.add("hidden");
    password.classList.add("border-gray-400");
    password.classList.remove("border-red-600");
    password.classList.add("mb-6");
  }
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
