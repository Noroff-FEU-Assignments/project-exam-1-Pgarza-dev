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

function validateForm(event) {
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
    checkLength(fullName.value, 0) &&
    checkLength(subject.value, 9) &&
    checkLength(textarea.value, 24) &&
    validatEmail(email.value) === true
  ) {
    success.style.display = 'block';
  } else {
    success.style.display = 'none';
  }
}

if (
  checkLength(fullName.value, 0) === true &&
  checkLength(subject.value, 16) === true &&
  checkLength(textarea.value, 26) === true &&
  validatEmail(email.value) === true
) {
  submitMessage.style.display = 'block';
  document.messageForm.submit();
} else {
  submitMessage.style.display = 'none';
}

form.addEventListener('input', validateForm);
form.addEventListener('textarea', validateForm);
form.addEventListener('submit', validateForm);

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
