const form = document.querySelector('form');
const newsletter = document.querySelector('.form__thanks')
const inputForm = document.querySelector('.form__input')
const displayMessage = (e) => {
    e.preventDefault();
    newsletter.textContent = "Dziękujemy za zapisanie się do naszego newslettera!";

}
form.addEventListener('submit', displayMessage)