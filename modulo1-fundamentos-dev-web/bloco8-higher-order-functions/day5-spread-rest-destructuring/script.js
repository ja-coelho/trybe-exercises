// Examples
// Example 1
const specialFruit = ['Fruit 1', 'Fruit 2', 'Fruit 3'];
const additionalItens = ['Item 1', 'Item 2', 'Item 3'];

const fruitSalad = (fruit, additionalItem) => [...fruit, ...additionalItem];

// console.log(fruitSalad(specialFruit, additionalItens));

// Example 2
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};
  
const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userObj = { ...user, ...jobInfos };
const { name: nameUsr, age, nationality, profession, squadInitials, squad } = userObj;

// console.log(`Hi, my name is ${nameUsr}, I'm ${age} years old and I'm ${nationality}.`,
//   `I work as a ${profession} and my squad is ${squadInitials}-${squad}.`);

// Example 3
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [saudacoesOne, saudacoesTwo] = saudacoes;
// saudacoesTwo(saudacoesOne);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];
// console.log(comida, animal, bebida);

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares;
// console.log(numerosPares);

// Example 4
const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// Example 5
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});
  
// console.log(getPosition(-19.8157, -43.9542));

// Example 6
const multiply = (number, value = 2) => number * value;
  
// console.log(multiply(8));

// Exercises
// Ex1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

console.log('Exercise 1, print rectangle areas: ');
rectangles.forEach((rectangle) => console.log('Asnwer is: ' + rectangleArea(...rectangle)));

// Ex2
const sumReduce = (...args) => args.reduce((acc, curr) => (acc + curr), 0);

console.log('\nExercise 2, use rest parameter to sum variable number of args: ');
console.log(sumReduce(1,2,3));

// Ex3
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const personLikes = ({ name, age: ageTwo, likes }) => `${name} is ${ageTwo} years old and likes ${likes.join(', ')}.`;

console.log('\nExercise 3, use object destructuring to print a person likes: ');
console.log(personLikes(gunnar));

// Ex4
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = (arr) => arr
  .filter(({nationality, bornIn}) => nationality === 'Australian' && bornIn <= 2000);;

console.log('\nExercise 4, use object destructuring to filter a list by year born: ');
console.log(filterPeople(people));

// Ex5
const myList = [1, 2, 3];

const swapFunc = (arr) => [arr[2], arr[1], arr[0]];

console.log('\nExercise 5, use array destructuring to swap elements in array: ');
console.log(swapFunc(myList));

// Ex6
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];
const cars = [palio, shelbyCobra, chiron];

const arrToObj = ([name, brand, year]) => ({ name, brand, year });

console.log('\nExercise 6, use array destructuring to create object from array: ');
console.log(cars.map((car) => arrToObj(car)));

// Ex7
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

const shipLength = ({ name, length, measurementUnit }) =>
  `${name} is ${length} ${measurementUnit} long.`;

console.log('\nExercise 7, use object destructuring to return elements within object: ');
console.log(ships.map((ship) => shipLength(ship)));

// Ex8
const greet = (name, message = 'Hi') => `${message} ${name}`;

console.log('\nExercise 8, use default parameters to use functions without parameters: ');
console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

// Ex9
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const concatToArr = ({ spring, summer, autumn, winter }) => 
  ([...spring, ...summer, ...autumn, ...winter]);

console.log('\nExercise 9, use object destructuring to concatenate objects into arrays: ');
console.log(concatToArr(yearSeasons))
