'use strict';
let numbers = []; //Create an empty array called numbers.

for (let i = 0; i < 5; i++) {
  const number = parseInt(prompt('give a number: ' + (i + 1)));
  numbers.push(number);
} //Prompt the user to enter five numbers, one by one, and add each entered number to the numbers array using the push() method.

document.getElementById('vastaus').textContent = `numbers: ${numbers}`; //Display the contents of the numbers array on the HTML document or in the console.

const numberToCheck = prompt('Give another number to check'); //Prompt the user to enter a number and check if the entered number is included in the numbers array using the includes() method.

if (numbers.includes(parseInt(numberToCheck))) {
  alert('number ' + numberToCheck + ' WAS found in numbers array');
} else {
  alert('number ' + numberToCheck + ' was NOT found in numbers array');
} //Display a message indicating whether the entered number is found or not found in the numbers array.

numbers.pop();
console.log('Updated numbers: ' + numbers); //Display the updated numbers array on the HTML document or in the console.

numbers.sort((a, b) => a - b);
console.log('Sorted numbers: ' + numbers); //Sort the numbers array in ascending numerical order using the sort() method with a custom comparison function.
