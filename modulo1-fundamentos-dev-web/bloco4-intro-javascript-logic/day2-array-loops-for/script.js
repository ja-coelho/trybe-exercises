let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 1
numbers.forEach(element => {
  console.log('element is ' + element);
});
// 2
let sum = 0;
numbers.forEach(element => {
  sum += element;
});
console.log('sum is ' + sum);
// 3
let average = sum / numbers.length;
console.log('average is ' + average);
// 4
if (average <= 20) {
  console.log('valor menor ou igual a 20');
} else {
  console.log('valor maior que 20');
}
// 5
let big = numbers[0];
numbers.forEach(element => {
  if (element > big) {
    big = element;
  } else {
    console.log(element + ' is not bigger');
  }
});
console.log('big number is ' + big);
// 6
let numberOfUneven = 0;
numbers.forEach(element => {
  if (element % 2 !== 0) {
    numberOfUneven += 1;
  }
});
if (numberOfUneven === 0) {
  console.log('nenhum valor impar encontrado');
} else {
  console.log('number of unevens is ' + numberOfUneven);
}
// 7
let small = numbers[0];
numbers.forEach(element => {
  if (element < small) {
    small = element;
  }
});
console.log('smallest is ' + small);
// 8
let newArray = [];
for (let index = 1; index <= 25; index += 1) {
  newArray.push(index);
}
console.log('new array is ' + newArray);
// 9
newArray.forEach((element, i) => {
  newArray[i] = newArray[i] / 2;
});
console.log(newArray);
// end of regular exercises
// beginning of bonus exercises
// BONUS
// 1
let numbersToBeSorted = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbersToBeSorted.length; index += 1) {  // begin at index 1 (second position)
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbersToBeSorted[index] < numbersToBeSorted[secondIndex]) {
      let element = numbersToBeSorted[index];
      numbersToBeSorted[index] = numbersToBeSorted[secondIndex];
      numbersToBeSorted[secondIndex] = element;
    }
  }
}
console.log('sorted array is ' + numbersToBeSorted);
// 2
for (let index = 1; index < numbersToBeSorted.length; index += 1) {  // begin at index 1 (second position)
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbersToBeSorted[index] > numbersToBeSorted[secondIndex]) {
        let element = numbersToBeSorted[index];
        numbersToBeSorted[index] = numbersToBeSorted[secondIndex];
        numbersToBeSorted[secondIndex] = element;
      }
    }
  }
  console.log('sorted reverted array is ' + numbersToBeSorted);
// 3
let numbersToBeMultiplied = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multipliedArray = [];
for (let index = 0; index < numbersToBeMultiplied.length; index += 1) {
    if (index + 1 < numbersToBeMultiplied.length) {
      multipliedArray.push(numbersToBeMultiplied[index] * numbersToBeMultiplied[index + 1]);
    } else {
      multipliedArray.push(numbersToBeMultiplied[index] * 2);
    }
  }
  console.log('multiplied array is ' + multipliedArray);
