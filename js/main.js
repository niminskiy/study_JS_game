

let input = document.querySelector('#input');

let message = document.querySelector('#message');

let compNumber = getRandomInt(1, 100);
console.log(compNumber);



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min - 1)) + min;
}
