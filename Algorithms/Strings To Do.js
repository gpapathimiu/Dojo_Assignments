
// let sentence = "I like BG3"

// function removeBlanks(inputString) {
//   let result = '';

//   for (let i = 0; i < inputString.length; i++) {
//     if (inputString[i] !== ' ' && inputString[i] !== '\t') {
//       result += inputString[i];
//     }
//   }

//   return result;
// }

// console.log(removeBlanks(sentence));

// let code = "qw2u9fds980fa7uk79"

// function getDigits(inputString) {
//   let result = '';

//   for (let i = 0; i < inputString.length; i++) {
//     const char = inputString[i];

//     if (!isNaN(Number(char))) {
//       result += char;
//     }
//   }

//   return Number(result);
// }

// console.log(getDigits(code))


// let sentence = "Today I Might Code"

// function acronym(inputString) {
//   const words = inputString.split(' ');

//   const acronym = words
//     .filter(word => word.length > 0) 
//     .map(word => word[0].toUpperCase())
//     .join('');

//   return acronym;
// }

// console.log(acronym(sentence))


// let sentence = "Tomorrow I will go to the mall"

// function countNonSpaces(inputString) {
//   let count = 0;

//   for (let i = 0; i < inputString.length; i++) {
//     if (inputString[i] !== ' ') {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countNonSpaces(sentence))


let array = ["mouse", "cat", "horse", "dog", "elephant"]
number = 4

function removeShorterStrings(stringsArray, minLength) {
  return stringsArray.filter(str => str.length >= minLength);
}

console.log(removeShorterStrings(array, 4))