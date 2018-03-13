'use strict';

// let userVal = document.getElementById('userInput').value;

function tenPercent() {
  document.getElementById('b1').style.background = 'green';
  let bill = parseInt(document.getElementById('userInput').value);
  let tipVal = (bill * 10 / 100);
  let newBill = ((Number(bill) + Number(tipVal))).toFixed(2);
  document.getElementById('result1').innerHTML='The total with tip will be $ ' + newBill + '';
}

function fifteenPercent() {
  document.getElementById('b2').style.background = 'green';
  let bill = parseInt(document.getElementById('userInput').value);
  let tipVal = (bill * 15 / 100);
  let newBill = ((Number(bill) + Number(tipVal))).toFixed(2);
  document.getElementById('result2').innerHTML='The total with tip will be $ ' + newBill + '';
}

function twentyPercent() {
  document.getElementById('b3').style.background = 'green';
  let bill = parseInt(document.getElementById('userInput').value);
  let tipVal = (bill * 20 / 100);
  let newBill = ((Number(bill) + Number(tipVal))).toFixed(2);
  document.getElementById('result3').innerHTML='The total with tip will be $ ' + newBill + '';
}

function twentyFivePercent() {
  document.getElementById('b4').style.background = 'green';
  let bill = parseInt(document.getElementById('userInput').value);
  let tipVal = (bill * 25 / 100);
  let newBill = ((Number(bill) + Number(tipVal))).toFixed(2);
  document.getElementById('result4').innerHTML='The total with tip will be $ ' + newBill + '';
}

// function anyPercent() {
//   document.getElementById('b5').style.background = 'green';
// }