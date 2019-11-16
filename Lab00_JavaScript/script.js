/*
function main(){
  let paragraph = document.querySelector("#my-paragraph");
  paragraph.onclick = changeText;
  console.log(paragraph);
}

function changeText(){
   let paragraph = document.querySelector("#my-paragraph");
   if (paragraph.textContent === "Hi!") {
     paragraph.textContent = "Hola hola!";
   } else {
     paragraph.textContent = "Hi!"
   }
}
*/

function main(){
  let paragraph = document.querySelector("#my-paragraph");
  paragraph.onclick = function changeText(){
    if (paragraph.textContent === "Hi!") {
      paragraph.textContent = "Hola hola!";
    } else {
      paragraph.textContent = "Hi!"
    }
  }
  console.log(paragraph);
}

// this is important !!!
document.addEventListener("DOMContentLoaded", main);

function remove() {
  document.querySelector('p').remove();
}

function add(){
  let newParagraph = document.createElement('p');
  let text = document.createTextNode("Hola Hola Coca cola!");
  document.body.appendChild(newParagraph).appendChild(text);
}

function makeUgly(){
  const ps = Array.from(document.querySelectorAll('p'));
  for (let i = 0; i < ps.length; i++) {
    ps[i].style.backgroundColor = 'yellow';
    ps[i].style.color = 'red';
  }
}
