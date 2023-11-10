
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    inputs.forEach((input) => {
        if (input.value.trim() === '') {
            const errorMessage = document.createElement('p');
            errorMessage.classList.add('error-message');
            errorMessage.textContent = `${input.name} is required`;
            input.parentElement.appendChild(errorMessage);
        }
    });
});
