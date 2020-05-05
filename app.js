const form = document.querySelector('form');
const newsletter = document.querySelector('form h1')
const displayMessage = (e, text) => {
    e.preventDefault();

}
form.addEventListener('click', displayMessage)