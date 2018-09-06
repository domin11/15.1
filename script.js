//ZADANIE 1

const greeting = 'Hello';
const name = 'World';

console.log(`${greeting} ${name}`);

//ZADANIE 2

const multiply = (a, b = 1) => console.log(a*b);

//ZADANIE 3

const average = (...args) => args.reduce((a, b) => a + b) / args.length;

console.log(average(1, 3, 6, 6, 7, 2));

//ZADANIE 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

//ZADANIE 5

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = data;

console.log(`${firstName} ${lastName}`);

