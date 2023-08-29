"use strict";

const numbers = [];

while(jatka){
  const number = promt("Enter series of numberss");
  if (number === "stop"){
    alert("stopping the program");
    jatka = false;
  }
  numbers.push(number);
}

console.log(numbers)

document.getElementById("kohde").innerHTML = "Parilliset: ";
const parilliset = [];
for (const number of numbers){
  if(number%2 ===0){
    parilliset.push(number);
  }
}

if(parilliset.lenght > 0) {
  document.getElementById("kohde").innerHTML += pariliset.join(', ');
} else {
  document.getElementById("kohde").innerHTML += "ei ole";
}
