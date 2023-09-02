'use strict';

let numbers = []; //Define an empty array to store the numbers entered by the user.
let more = true;

const answerElement = document.getElementById('vastaus'); //If the current number is even, display it on the HTML document.

while (more) {
  const givenNumber = prompt('Give a number, or done to stop');
  if (givenNumber === 'done') {
    more = false;
  }
  numbers.push(parseInt(givenNumber));
} //Use a loop (e.g., while or do...while) to prompt the user for numbers and add them to the array until the user decides to stop
for (const number of numbers) {
  if (number % 2 === 0) /*Inside the loop, check if the current number is even using the modulo operator */{
    answerElement.innerText += number + ', ';
  }
} //Use the for...of loop to iterate over the entered values stored in the array.

