'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi']; //Create an array called fruits and initialize it with the following elements: "apple", "banana", "orange", " grape", "kiwi".

console.log('fruits: ' + fruits.toString()); //Display the contents of the fruits array in the console.

const lenght = fruits.length; //Calculate and display the length of the fruits array.
console.log('fruit lenght: ' + lenght);

const secondIndexFruit = fruits[2]; //Access and display the element at index 2 in the fruits array in the console.
console.log('second fruit on index: ' + secondIndexFruit);

console.log('last fruit: ' + fruits[fruits.length - 1]); //Access and display the last element in the fruits array using the length property in the console.

let vegetables = []; //Create an empty array called vegetables

const veggie1 = prompt('Give me a vegetable 1'); //Prompt the user to enter three vegetables one by one, and add each entered vegetable to the vegetables array using the push() method.
const veggie2 = prompt('Give me a vegetable 2');
const veggie3 = prompt('Give me a vegetable 3');
vegetables.push(veggie1);
vegetables.push(veggie2);
vegetables.push(veggie3);
console.log('Vegetables: ' + vegetables.toString()); //Display the contents of the vegetables array in the console.
console.log('Lenght of vegetables: ' + vegetables.length.toString()); //Calculate and display the length of the vegetables array.

document.getElementById('vastaus').innerHTML = ''; //Display in HTML file

