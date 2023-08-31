'use strict';

const celsius = prompt('Syötä aste Celsiussa');

const farenheit = (celsius * 9) / 5 + 32;
const kelvin = celsius + 273.15;

const vastaus = `${celsius}celsiussa on ${farenheit}F ja ${kelvin}K`;

document.getElementById('temper').innerHTML = vastaus;
