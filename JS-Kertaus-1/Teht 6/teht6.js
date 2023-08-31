'use strict';

const positiveInt = parseInt(prompt('Give a positive integer'));
const tableBody = document.getElementById('tableBody');

for (let i = 1; i < positiveInt + 1; i++) {
  const tr = document.createElement('tr');
  tableBody.append(tr);
  for (let c = 1; c < positiveInt + 1; c++) {
    const td = document.createElement('td');
    const calculation = c * i;
    td.textContent = calculation.toString();
    tr.append(td);
  }
}

document.getElementById(
  'infoText'
).innerText = `Given number was: ${positiveInt}`;
