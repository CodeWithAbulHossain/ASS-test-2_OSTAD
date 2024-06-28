// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.

function calculateSum(a, b) {
  return a + b;
}

calculateSum(3, 5);

const result = calculateSum(3, 5);
console.log(result);

// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.

function isEven(number) {
  return number % 2 === 0;
}
isEven(4);
isEven(9);

console.log(isEven(4));
console.log(isEven(9));

// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.

function findMax(numbers) {
  if (numbers.length === 0) {
    throw new Error("Array is Empty");
  }

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

const numbersArray = [2, 5, 8, 11, 6, 9, 15, 1, 3, 19];
findMax(numbersArray);

console.log(findMax(numbersArray));

// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.

function reverseString(str) {
  return str.split("").reverse().join("");
}

const originalString = "Hello";

reverseString(originalString);
console.log(reverseString(originalString));

// 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.

function filterOddNumbers(numbers) {
  let oddNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      oddNumbers.push(numbers[i]);
    }
  }
  return oddNumbers;
}

const numbersArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNumbersArray = filterOddNumbers(numbersArray2);
console.log(oddNumbersArray);
