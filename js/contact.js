const form = document.querySelector('#form');
const fullName = document.querySelector('#name');
const nameError = document.querySelector('#nameError');
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const subject = document.querySelector('#subject');
const subjectError = document.querySelector('#subjectError');
const textarea = document.querySelector('#textarea');
const textareaError = document.querySelector('#textareaError');
const success = document.querySelector('#success');
const submitButton = document.querySelector('#submit-form');
const submitMessage = document.querySelector('.form-submitted');

// Hamburguer Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

// Form validation
submitButton.addEventListener('click', function vlidatForm(event) {
  event.preventDefault();
  if (checkLength(fullName.value, 6) === true) {
    nameError.style.display = 'none';
  } else {
    nameError.style.display = 'block';
  }
  if (checkLength(subject.value, 16) === true) {
    subjectError.style.display = 'none';
  } else {
    subjectError.style.display = 'block';
  }
  if (checkLength(textarea.value, 26) === true) {
    textareaError.style.display = 'none';
  } else {
    textareaError.style.display = 'block';
  }
  if (validatEmail(email.value) === true) {
    emailError.style.display = 'none';
  } else {
    emailError.style.display = 'block';
  }
  if (
    checkLength(fullName.value, 6) &&
    checkLength(subject.value, 16) &&
    checkLength(textarea.value, 26) &&
    validatEmail(email.value) === true
  ) {
    success.style.display = 'block';
  } else {
    success.style.display = 'none';
  }
});

// check the length of the value
function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

// validate email address
function validatEmail(email) {
  const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  const patternMatches = regEx.test(email);
  console.log(patternMatches);

  return patternMatches;
}
