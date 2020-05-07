const form = document.querySelector('form');
const newsletter = document.querySelector('.form__thanks')
const inputForm = document.querySelector('.form__input')
const displayMessage = (e) => {
    e.preventDefault();
    newsletter.textContent = "Dziękujemy za zapisanie się do naszego newslettera!";

}
form.addEventListener('submit', displayMessage)


const friend = (friend) => {

    return friend.filter(item => item.length === 4)
}


// const names = "2334, agat, paul, www, eee, eeeeee";
// // const split = name.split(' ');
// const repl = names.replace(/,/g, ' ')
// const spli = repl.split('  ');

// spli.map(item => {
//     const lenghtU = item.length;
//     if (lenghtU === 4) {
//         console.log(item);
//     }
// })

// if () {

// }

// console.log(split);
// split.map(item => {
//     return console.log(item.length)

// })



