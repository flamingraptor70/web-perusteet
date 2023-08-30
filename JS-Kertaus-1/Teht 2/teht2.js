'use strict';

const firstx = prompt("Give first x");
const firsty = prompt("give first y");
const secondx = prompt("give second x");
const secondy = prompt("give second y");

const distance = Math.sqrt(((secondx - firstx)**2) + ((secondy- firsty)**2));

//printing
document.getElementById("vastaus").innerHTML = `distance is: ${distance}`
