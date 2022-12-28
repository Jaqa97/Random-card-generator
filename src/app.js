/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let pinta = ["spade", "club", "diamond", "heart"];
  function randomNumber() {
    let number = numbers[Math.floor(Math.random() * numbers.length)];
  }
  let pasteNumber = (document.querySelector(".number").innerHTML =
    numbers[Math.floor(Math.random() * numbers.length)]);
  let randomPinta = pinta[Math.floor(Math.random() * pinta.length)];
  let changePintaTop = document
    .querySelector(".top")
    .classList.add(randomPinta);
  let changePintaBotton = document
    .querySelector(".bottom")
    .classList.add(randomPinta);
};
