// clean on start
function main() {
  clean();
}

// clean the display
function clean() {
  const display = document.querySelector('#id-displayText');
  console.log('clean pressed');
  display.textContent = '';
  display.value = '';
}

// find numbers and start writing in display
function number(i) {
  const buttons = Array.from(document.querySelectorAll('div.button-number'));
  console.log('number pressed');
  write(buttons, i)
}

// find operators and start writing in display
function operator(i) {
  const buttons = Array.from(document.querySelectorAll('div.button-operator'));
  console.log('operator pressed');
  write(buttons, i)
}

// write in display
function write(buttons, i) {
  const display = document.querySelector('#id-displayText');
  display.textContent = display.textContent + buttons[i].textContent.trim();
  display.value = display.value + buttons[i].textContent.trim();
}

// count ant display result
function result() {
  const display = document.querySelector('#id-displayText');
  console.log('result pressed');
  display.value = eval(display.value);
  display.textContent = display.value;
}

// this is important !!!
document.addEventListener("DOMContentLoaded", main);
