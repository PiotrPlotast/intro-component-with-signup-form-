const errorMsg = document.querySelectorAll('.error-msg');
const form = document.querySelector('form');

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorMsg.forEach((msg) => {
        msg.classList.add('show');
    });
    const email = document.querySelector('.email').value;
    if (!validateEmail(email)) {
        document.querySelector('.email-error-msg').classList.add('show');
    }
});