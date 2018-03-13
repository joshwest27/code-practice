'use strict';

function myReset() {
  location.reload();
}

function setBtnToActive(btnSelector) {
  document.getElementById(idSelector).style.background = '#8ED081';
}

function getBill() {
  return parseInt(document.getElementById('userInput').value);
}

function calculateBillWithTip(bill, percent) {
  return (bill * percent / 100 + bill).toFixed(2);
}

function getCustomTipPercent() {
  return parseInt(document.getElementById('customTip').value);
}

function displayResult(resultSelector, billWithTip) {
  document.getElementById(resultSelector).innerHTML = 'The total with tip will be $' + billWithTip + '';
}

function tenPercent() {
  setBtnToActive('b1')
  const bill = getBill();
  const newBill = calculateBillWithTip(bill, 10);
  displayResult('result1', newBill);
}

function fifteenPercent() {
  setBtnToActive('b2')
  const bill = getBill();
  const newBill = calculateBillWithTip(bill, 15);
  displayResult('result2', newBill);
}

function twentyPercent() {
  setBtnToActive('b3')
  const bill = getBill();
  const newBill = calculateBillWithTip(bill, 20);
  displayResult('result3', newBill);
}

function twentyFivePercent() {
  setBtnToActive('b4')
  const bill = getBill();
  const newBill = calculateBillWithTip(bill, 25);
  displayResult('result4', newBill);
}

function anyPercent() {
  setBtnToActive('b1')
  const bill = getBill();
  const tip = getCustomTipPercent();
  const newBill = calculateBillWithTip(bill, tip);
  displayResult('result5', newBill);
}
