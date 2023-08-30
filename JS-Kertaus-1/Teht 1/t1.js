'use strict'

const celsius = prompt("Syötä asteet Celsiussa");

const farenheit = (celsius * 9/5) + 32;
const kelvin = celsius + 273.15;

const vastaus = `${celsius}C on ${farenheit}F ja ${kelvin}K `;

//printing
document.getElementById("temper").innerHTML = vastaus;

