// Examples
const wakeUp = () => {
  return 'Acordando!!';
};

const drinkCoffee = () => {
  return 'Drink Coffee';
};

const goSleep = () => {
  return 'Go Sleep';
};

const doingThings = (thing) => {
  return thing;
};

console.log(doingThings(wakeUp()));

// Exercises
// Ex 1
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drummond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const addNewEmployee = (newEmployee) => {
  const addEmployee = {
    nomeCompleto: `${newEmployee}`,
    email:`${newEmployee.toLowerCase().replace(/\s/g, '_')}@betrybe.com`,
  }
  return addEmployee;
};
console.log(newEmployees(addNewEmployee));

// Ex 2
const numberCheck = (lotteryTicket, winningNumber) => lotteryTicket === winningNumber;

const lotteryCheck = (lotteryTicket, numberCheckFunc) => {
  const winningNumber = Math.ceil(Math.random() * 5);
  return numberCheckFunc(lotteryTicket, winningNumber) ? 'Parabéns voce ganhou' : 'Tente novamente';
};

console.log(lotteryCheck(3, numberCheck));

// Ex 3
