const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const form = document.querySelector('form');


function checkInputs() {
    // get the values from the inputs
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === '') {
        firstName.nextElementSibling.classList.add('show');
    } else {
        return;
    }

    if (lastNameValue === '') {
        firstName.nextElementSibling.classList.add('show');
    } else {
        return;
    }

    if (emailValue === '') {
        firstName.nextElementSibling.classList.add('show');
    } else if (!isEmail(emailValue)) {
        firstName.nextElementSibling.classList.add('show');
    } else {
        return;
    }

    if (passwordValue === '') {
        firstName.nextElementSibling.classList.add('show');
    } else {
        return;
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});