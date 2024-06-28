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

// 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const array = [1, 3, 5, 7, 8, 10];
const arrayResult = sumArray(array);
sumArray(arrayResult);
console.log(arrayResult);

// 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.

function sortArray(arr) {
  let arrCopy = arr.slice();

  arrCopy.sort(function (a, b) {
    return a - b;
  });
  return arrCopy;
}

const numbers = [5, 1, 3, 15, 7, 9, 55, 31, 22, 19];
const sortedNumbers = sortArray(numbers);
sortArray(sortedNumbers);

console.log(sortedNumbers);

// 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"

function capitalizeFirstLetter(str) {
  if (str.length === 0) {
    return str;
  }

  let firstLetter = str.charAt(0).toUpperCase();
  let restOfString = str.slice(1);

  let capitalizedString = firstLetter + restOfString;

  return capitalizedString;
}

capitalizeFirstLetter("hello");
capitalizeFirstLetter("world");
capitalizeFirstLetter("javascript");

console.log(capitalizeFirstLetter("hello"));
console.log(capitalizeFirstLetter("world"));
console.log(capitalizeFirstLetter("javascript"));
