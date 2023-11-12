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
    } else {
        firstName.nextElementSibling.classList.remove('show');
        inputsCorrect++;
    }

    if (lastNameValue === '') {
        lastName.nextElementSibling.classList.add('show');
    } else {
        lastName.nextElementSibling.classList.remove('show');
        inputsCorrect++;
    }

    if (emailValue === '') {
        email.nextElementSibling.classList.add('show');
    } else if (!isEmail(emailValue)) {
        email.nextElementSibling.classList.add('show');
    } else {
        email.nextElementSibling.classList.remove('show');
        inputsCorrect++;
    }

    if (passwordValue === '') {
        password.nextElementSibling.classList.add('show');
    } else {
        password.nextElementSibling.classList.remove('show');
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