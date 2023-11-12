const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const form = document.querySelector('form');


function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function checkInputs() {
    // get the values from the inputs
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    let inputsCorrect = 0;

    if (firstNameValue === '') {
        firstName.nextElementSibling.classList.add('show');
        firstName.classList.add('input-error');
    } else {
        firstName.nextElementSibling.classList.remove('show');
        firstName.classList.remove('input-error');
        inputsCorrect++;
    }

    if (lastNameValue === '') {
        lastName.nextElementSibling.classList.add('show');
        lastName.classList.add('input-error');
    } else {
        lastName.nextElementSibling.classList.remove('show');
        lastName.classList.remove('input-error');
        inputsCorrect++;
    }

    if (emailValue === '') {
        email.nextElementSibling.classList.add('show');
        email.classList.add('input-error');
    } else if (!isEmail(emailValue)) {
        email.nextElementSibling.classList.add('show');
        email.classList.add('input-error');
    } else {
        email.nextElementSibling.classList.remove('show');
        email.classList.remove('input-error');
        inputsCorrect++;
    }

    if (passwordValue === '') {
        password.nextElementSibling.classList.add('show');
        password.classList.add('input-error');
    } else {
        password.nextElementSibling.classList.remove('show');
        password.classList.remove('input-error');
        inputsCorrect++;
    }

    if (inputsCorrect === 4) {
        form.submit();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});