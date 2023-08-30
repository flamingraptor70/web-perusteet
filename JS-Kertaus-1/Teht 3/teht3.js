'use script'

const side1 = prompt('Kirjoittaa ensimmäisen puolen arvon');
const side2 = prompt('Kirjoittaa toinen puolen arvon');
const side3 = prompt('Kirjoittaa kolmas puolen arvon');

if(side1 == side2 && side2 == side3){
  triangle = "equilateral";
} else if(side1 !== side2 && side1 !== side3 && side2 !== side3) {
  triangle = "scalene";
} else {
  triangle = "isosceles";
}


//print
document.getElementById("vastaus").innerHTML = `given triangle is ${triangle}`;
