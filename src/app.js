import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here



  const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const action = ['ate', 'peed', 'crushed', 'broke'];
  const what = ['my homework', 'my phone', 'the car'];
  const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  const getRandomExcuse = arr => arr[Math.floor(Math.random() * arr.length)];

  let statement = `${getRandomExcuse(who)} ${getRandomExcuse(action)} ${getRandomExcuse(what)} ${getRandomExcuse(when)}.`;

  let new_statement = document.getElementById("excuse");
  new_statement.innerHTML = statement
};