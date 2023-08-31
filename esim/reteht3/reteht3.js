'use strict';

const side1 = prompt('Give side 1');
const side2 = prompt('Give side 2');
const side3 = prompt('Give side 3');

if (side1 == side2 && side2 == side3) {
  triangle = 'equilateral';
} else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
  triangle = 'scalene';
} else {
  triangle = 'isosceles';
}

document.getElementById('vastaus').innerHTML = `triangle is ${triangle}`;
