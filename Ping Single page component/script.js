const form = document.getElementById("form");
const email = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");
const submitBtn = document.getElementById("submit");

form.addEventListener("submit", e => {
  e.preventDefault();
  const emailVal = email.value;

  if (!validateEmail(emailVal)) {
    submitBtn.classList.add("mt-10");
    submitBtn.classList.add("md:mt-0");
    errorMessage.classList.remove("hidden");
    email.classList.remove("border-gray-400");
    email.classList.add("border-red-500");
  } else {
    errorMessage.classList.add("hidden");
    submitBtn.classList.remove("mt-10");
    email.classList.add("border-gray-400");
    email.classList.remove("border-red-500");
    alert("Thank you!");
  }
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
