// Examples
// Example 1
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };

  emailListInData.forEach(showEmailList);

// Example 2
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
}

console.log(findDivisibleBy3And5())

// Example 3
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((element) => element.length >= 5);
}

console.log(findNameWithFiveLetters());

// Example 4
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    return musicas.find((song) => song.id === id);
  }
  
  console.log(findMusic('31031686'))

// Example 5
const namesArray = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, nameValue) => {
  return arr.some((nameInArray) => nameInArray === nameValue);
}

console.log(hasName(namesArray, 'Anas'))

// Example 6
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 19 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    return arr.every((person) => person.age >= minimumAge);
  }
  
  console.log(verifyAges(people, 18));

// Example 7
const peopleArr = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
peopleArr.sort((element2, element1) => - (element2.age - element1.age));
  
console.log(peopleArr);