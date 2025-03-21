const containerE1 = document.getElementById("container");
const rightE1 = document.getElementById("right");
const leftE1 = document.getElementById("left");

const invalidEmailE1 = document.getElementById("invalid-email");
const emailInput = document.getElementById("email");
const submitButtonE1 = document.getElementById("submit-button");

const confirnedMessageE1 = document.getElementById("confirned-message");
const userEmailE1 = document.getElementById("user-email");
const dismissMessageE1 = document.getElementById("dismiss-message");

function formSuccess() {
  containerE1.classList.add("success");
  confirnedMessageE1.classList.add("active");
  rightE1.style.display = "none";
  leftE1.style.display = "none";
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

submitButtonE1.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    formSuccess();
    userEmailE1.innerText = email;
    emailInput.value = "";

    invalidEmailE1.classList.remove("active");
    emailInput.classList.remove("active");
  } else {
    invalidEmailE1.classList.add("active");
    emailInput.classList.add("active");
  }
});

dismissMessageE1.addEventListener("click", () => {
  rightE1.style.display = "block";
  leftE1.style.display = "flex";
  containerE1.classList.remove("success");
  confirnedMessageE1.classList.remove("active");
});
