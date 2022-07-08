// 1
let result = 1;
let number = 10;
for (let index = number; index > 0; index -= 1) {
  result = result * index;
}
console.log('factorial of number is ' + result);
// 2
let word = 'tryber'
let letterArray = word.split('');
let revertedWord = '';
letterArray.forEach((letter, i) => {
  revertedWord += letterArray[letterArray.length - i - 1];
});
console.log('reverted word is ' +  revertedWord);
// 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let smaller = array[0];
let bigger = array[0];
array.forEach(element => {
  if (element.length > bigger.length) {
    bigger = element;
  } else if (element.length < smaller.length) {
    smaller = element;
  }
});
console.log('smaller word is ' +  smaller + ' bigger word is ' + bigger);
// 4
let upper = 50;
let lower = 2;
let biggerPrime = 2;
for (let index = lower; index <= upper; index += 1) {
  if (index % 2 === 0 || index % 10 === 0) {
    continue;
  }
  let divisors = 0;
  for (let secondIndex = 2; secondIndex < index; secondIndex += 1) {
    if (index % secondIndex === 0) {
      divisors += 1;
      break;
    }
  }
  if (divisors === 0) {
    biggerPrime = index;
  }
}
console.log('biggest prime is ' + biggerPrime);
// end of regular exercises
// start of bonus exercises
// BONUS
// 1

