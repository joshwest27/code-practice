// This is a basic tip calculator. User can calculate preset tip percentages or they can calculate any percentage. 

'use strict';

// Sound files
let audio = new Audio('sounds/cash.mp3');
let reset = new Audio('sounds/ping.mp3');

// Reset button refreshes the application
function myReset() {
  reset.play();
  location.reload();
}

// Function to store total bill
function getBill() {
  return parseInt(document.getElementById('userInput').value);
}

// Calculates 10% tip and displays total bill with tip. 
function tenPercent() {
  document.getElementById('b1').style.background = '#8ED081';
  const bill = getBill();
  let tipVal = (bill * 10 / 100);
  let newBill = ((Number(bill) + Number(tipVal))).toFixed(2);
  document.getElementById('tipOne').innerHTML='Ten Percent is $' + Number(tipVal).toFixed(2) + '';
  document.getElementById('result1').innerHTML='The total with tip will be $' + newBill + '';
  audio.play();
}

// Calculates 15% tip and displays total bill with tip. 
function fifteenPercent() {
  document.getElementById('b2').style.background = '#8ED081';
  const bill = getBill();
  let tipVal = (bill * 15 / 100);
  let newBill = ((Number(bill) + Number(tipVal))).toFixed(2);
  document.getElementById('tipTwo').innerHTML='Fifteen Percent is $' + Number(tipVal).toFixed(2) + '';
  document.getElementById('result2').innerHTML='The total with tip will be $' + newBill + '';
  audio.play();
}

// Calculates 20% tip and displays total bill with tip. 
function twentyPercent() {
  document.getElementById('b3').style.background = '#8ED081';
  const bill = getBill();
  let tipVal = (bill * 20 / 100);
  let newBill = ((Number(bill) + Number(tipVal))).toFixed(2);
  document.getElementById('tipThree').innerHTML='Twenty Percent is $' + Number(tipVal).toFixed(2) + '';
  document.getElementById('result3').innerHTML='The total with tip will be $' + newBill + '';
  audio.play();
}

// Calculates 25% tip and displays total bill with tip. 
function twentyFivePercent() {
  document.getElementById('b4').style.background = '#8ED081';
  const bill = getBill();
  let tipVal = (bill * 25 / 100);
  let newBill = ((Number(bill) + Number(tipVal))).toFixed(2);
  document.getElementById('tipFour').innerHTML='Twenty Five Percent is $' + Number(tipVal).toFixed(2) + '';
  document.getElementById('result4').innerHTML='The total with tip will be $' + newBill + '';
  audio.play();
}

// Calculates any tip percentage and displays total bill with tip. 
function anyPercent() {
  document.getElementById('b5').style.background = '#8ED081';
  const bill = getBill();
  let tip = parseInt(document.getElementById('customTip').value);
  let tipVal = (bill * tip / 100);
  let newBill = ((Number(bill) + Number(tipVal))).toFixed(2);
  document.getElementById('result5').innerHTML='The total with tip will be $' + newBill + '';
  audio.play();
}
