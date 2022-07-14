// Exercises
// Ex3
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Exercise 3\n");
  console.log("Returned planet: ", mars,'\n');
};

setTimeout(() => getPlanet(), 4000); // print Mars after 4 secs

// Ex4

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// imprime "Mars temperature is: 20 degree Celsius", por exemplo
sendMarsTemperature = () => `Mars temperature is: ${getMarsTemperature()} C\n`;


setTimeout(() => console.log(sendMarsTemperature()), messageDelay());

// Ex5
const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars\n`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars\n`);

sendMarsTemperatureVTwo = (callback) => callback(getMarsTemperature());

setTimeout(() => sendMarsTemperatureVTwo(temperatureInFahrenheit), messageDelay());
setTimeout(() => sendMarsTemperatureVTwo(greet), messageDelay());

// Ex6
const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

sendMarsTemperatureVThree = (callback, errorHandler) => {
  if (Math.random() >= 0.5) {
    callback(getMarsTemperature());
  } else {
    errorHandler('Robot is busy');
  }
};

setTimeout(() => sendMarsTemperatureVThree(temperatureInFahrenheit, handleError), messageDelay());
setTimeout(() => sendMarsTemperatureVThree(greet, handleError), messageDelay());


// Ex8
const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

// getPokemonDetails(
//   (pokemon) => pokemon.name === 'Squirtle',
//   (error, message) => error ? console.log(error) : console.log(message));

module.exports = {
  getPokemonDetails,
};
