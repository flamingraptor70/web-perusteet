'use strict';

const firstx = prompt('Give first x');
const firsty = prompt('Give first y');
const secondx = prompt('Give second x');
const secondy = prompt('Give second y');

const distance = Math.sqrt((secondx - firstx) ** 2 + (secondy - firsty) ** 2);

document.getElementById('vastaus').innerHTML = `distance is ${distance}`;
