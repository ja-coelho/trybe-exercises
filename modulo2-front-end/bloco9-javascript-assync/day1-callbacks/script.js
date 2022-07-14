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
sendMarsTemperature = () => `Exercise 4\nMars temperature is: ${getMarsTemperature()} C\n`;


setTimeout(() => console.log(sendMarsTemperature()), messageDelay());

// Ex5
const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Exercise 5\nIt is currently ${toFahrenheit(temperature)}ºF at Mars\n`);

const greet = (temperature) =>
  console.log(`Exercise 5\nHi there! Curiosity here. Right now is ${temperature}ºC at Mars\n`);

sendMarsTemperatureVTwo = (callback) => callback(getMarsTemperature());

// imprime "It is currently 47ºF at Mars", por exemplo
setTimeout(() => sendMarsTemperatureVTwo(temperatureInFahrenheit), messageDelay());
// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
setTimeout(() => sendMarsTemperatureVTwo(greet), messageDelay());

// Ex6
