'use strict';

const number = prompt('Give a number:');

let val = 0;
let calculationString = '';

for (let i = 1; i < parseInt(number) + 1; i++) {
  val += i;
  if (i < parseInt(number)) {
    calculationString += i + ' + ';
  } else {
    calculationString += i;
  }
}

document.getElementById(
  'vastaus'
).innerHTML = `Given number ${number}, calculation is: ${calculationString} = ${val}`;
