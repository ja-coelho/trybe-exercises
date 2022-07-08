const exp = require('constants');
const {
    sum,
    myRemove,
    myFizzBuzz,
 } = require('./script.js');

// 1
test('test if sum(4, 5) === 9', () => {
  expect(sum(4, 5)).toBe(9);
});

test('test if sum(0, 0) === 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('test if sum(4, "5") throws an error', () => {
  expect(() => { sum(4, '5') }).toThrow();
});

test('test if sum (4, "5") throws the correct error message', () => {
  expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
});

// 2
test('if myRemove([1, 2, 3, 4], 3 returns [1, 2, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

test('if myRemove ([1, 2, 3, 4], 3) does not return [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('if myRemove ([1, 2, 3, 4], 5) returns [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});

// 3
test('if myFizzBuzz(15) returns "fizzBuzz"', () => {
  expect(myFizzBuzz(15)).toEqual('fizzBuzz');
});

test('if myFizzBuzz(9) returns "fizz"', () => {
  expect(myFizzBuzz(9)).toEqual('fizz')
});

test('if myFizzBuzz(10) returns "Buzz"', () => {
  expect(myFizzBuzz(10)).toEqual('Buzz');
});

test('', () => {
  expect(myFizzBuzz(7)).toEqual(7);
});

test('', () => {
  expect(myFizzBuzz('lol')).toBeFalsy();
});
