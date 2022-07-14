// const { expect } = require("expect");
// const { describe, test } = require("jest-circus");

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('exercise 7: test to upper case function', () => {
  test('make sure async functions does not give false-positive results', (done) => {
    uppercase('test', (str) => {
      try {
        expect(str).toBe('TEST');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

const { getPokemonDetails } = require("./script.js");

// getPokemonDetails(
//   (pokemon) => pokemon.name === 'Bulbasaur',
//   (error, message) => error ? console.log(error) : console.log(message));

describe('exercise 9, async function testing', () => {
  test('error returned when pokemon not on database', (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');

    getPokemonDetails(
      (pokemon) => pokemon.name === 'Squortle',
      (error) => {
        expect(error).toEqual(expectedError);
        done();
      });
  });

  test('pokemon returned when it exists on database', (done) => {
    const expectedMessage = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun';

    getPokemonDetails(
      (pokemon) => pokemon.name === 'Squirtle',
      (error, message) => {
        expect(message).toBe(expectedMessage);
        done();
      });
  });
});
