# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

Desktop design:
![](./design/desktop-design.jpg)

Desktop success active:
![](./design/desktop-success-active.jpg)

Desktop success:
![](./design/desktop-success.jpg)

Mobile design:

![](./design/mobile-design.jpg)

Mobile success:

![](./design/mobile-success.jpg)

Active states:
![](./design/active-states.jpg)

Error states:
![](./design/error-states.jpg)

### Links

- Solution URL: [solution URL here](https://github.com/ernur-burshak/Newsletter-sign-up-form-with-success-message)
- Live Site URL: [live site URL here](https://ernur-burshak.github.io/Newsletter-sign-up-form-with-success-message/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS

### What I learned

In this lesson, I taught you how to create a form, check it, and display a successful submission.

```html
<form id="form">
  <div class="form-item">
    <label for="email">
      <p>Email address</p>
      <p id="invalid-email" class="invalid-email">Valid email required</p>
    </label>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="email@company.com"
    />
  </div>
  <div class="form-item">
    <button id="submit-button" type="submit">
      Subscribe to monthly newsletter
    </button>
  </div>
</form>
```

```css
.form-item button:hover {
  background: linear-gradient(
    127deg,
    rgba(255, 63, 124, 1) 40%,
    rgba(255, 154, 34, 1) 70%
  );
}
```

```js
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
```

### Continued development

In the future, I want to explore all the necessary features of JS.

### Useful resources

- [resource 1](https://www.youtube.com/watch?v=rSkIx9PL0h8&t=586s) - I helped with writing the project.
- [resource 2](https://www.frontendmentor.io/) - It always helps to find a good practice.

## Author

- Website - [Ernur](https://ernur-burshak.github.io/Newsletter-sign-up-form-with-success-message/)
- Frontend Mentor - [@ernur-burshak](https://www.frontendmentor.io/profile/ernur-burshak)
- Linkedin - [Ernur Burshak](https://www.linkedin.com/in/ernur-burshak-7b6b0b31b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

## Acknowledgments

I want to thank the author @edsHTML on the YouTube channel to help me make the project, thank you!
