//const calculator = document.querySelector('.calculator');

function main() {
  clean();
}

function clean() {
  const display = document.querySelector('#id-displayText');
  console.log('clean pressed');
  display.textContent = '';
}

function number(i) {
  const buttons = Array.from(document.querySelectorAll('div.button-number'));
  const display = document.querySelector('#id-displayText');
  console.log('number pressed');
//  calculator.dataset.firstValue = buttons[i].textContent;
  display.textContent = display.textContent + buttons[i].textContent;
}

function operator(i) {
  const buttons = Array.from(document.querySelectorAll('div.button-operator'));
  const display = document.querySelector('#id-displayText');
  console.log('operator pressed');
  display.textContent = display.textContent + buttons[i].textContent;
}

function result() {
  const display = document.querySelector('#id-displayText');
  console.log('result pressed');
  display.textContent = eval(display.textContent);
}

// this is important !!!
document.addEventListener("DOMContentLoaded", main);
