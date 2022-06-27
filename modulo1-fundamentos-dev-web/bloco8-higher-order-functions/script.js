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
// correct: +1 point, wrong: -0.5, N.A: no change
const rightAnswersArray = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const studentAnswersArray = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C']; // 10 pts
const studentAnswersArray = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']; // 5.5 pts

const answerChecker = (rightAnswers, studentAnswers) => {
  let gradeNumber = 0;
  studentAnswers.forEach((answer, index) => {
    switch (true) {
      case answer === rightAnswers[index]:
        gradeNumber += 1;
        break;
      case answer === 'N.A':
        break;
      default:
        gradeNumber -= 0.5;
        break;
    }
  });
  return gradeNumber;
};

const answerGrader = (rightAnswers, studentAnswers, answerCheckerFunction) => {
  return answerCheckerFunction(rightAnswers, studentAnswers);
};

console.log(answerGrader(rightAnswersArray, studentAnswersArray, answerChecker));

// Bonus Ex 1
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => {
  return Math.ceil(Math.random() * (dragon.strength - 15) + 15);
};

const warriorDamage = (warrior) => {
  return Math.ceil(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength) + warrior.strength);
};

const mageDamage = (mage) => {
  let mageDamageObj = {
    damage: 0,
    mana: 0,
  };
  if (mage.mana < 15) {
    mageDamageObj.damage = 'Not enough mana';
  } else {
    mageDamageObj.damage = Math.ceil(Math.random() * (mage.intelligence * 2 - mage.intelligence) + mage.intelligence);
    mageDamageObj.mana = 15;
  }
  return mageDamageObj;
};

const gameActions = {
  warriorTurn: (warriorDamage) => {
    warrior.damage = warriorDamage(warrior);
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (mageDamage) => {
    mage.damage = mageDamage(mage).damage;
    mage.mana -= mageDamage(mage).mana;
    dragon.healthPoints -= mage.damage;
  },
  dragonTurn: (dragonDamage) => {
    dragon.damage = dragonDamage(dragon);
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  turnEnd: (battleMembers) => {
    gameActions.warriorTurn(warriorDamage);
    gameActions.mageTurn(mageDamage);
    gameActions.dragonTurn(dragonDamage);
    console.log(battleMembers);
  }
};

let numberOfTurns = 5;
for (let index = 1; index <= numberOfTurns; index += 1) {
  gameActions.turnEnd(battleMembers);
}

// console.log(gameActions.turnEnd(battleMembers));
