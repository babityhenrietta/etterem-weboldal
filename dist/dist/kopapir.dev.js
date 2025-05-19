"use strict";

var userPoint = 0;
var compPoint = 0;

function play(userChoice) {
  var choises = ["rock", "paper", "scissors"];
  var randomIndex = Math.floor(Math.random() * 3); //console.log(randomIndex)

  var compChoice = choises[randomIndex]; //console.log(compChoice)

  if (userChoice == "rock") {
    document.getElementById("bko").style.border = "red solid 3px";
    document.getElementById("bpapir").style.border = "red solid 0px";
    document.getElementById("bollo").style.border = "red solid 0px";
  }

  if (userChoice == "paper") {
    document.getElementById("bpapir").style.border = "red solid 3px";
    document.getElementById("bko").style.border = "red solid 0px";
    document.getElementById("bollo").style.border = "red solid 0px";
  }

  if (userChoice == "scissors") {
    document.getElementById("bollo").style.border = "red solid 3px";
    document.getElementById("bpapir").style.border = "red solid 0px";
    document.getElementById("bko").style.border = "red solid 0px";
  }

  var result = getResult(userChoice, compChoice);
  document.getElementById("result").innerText = result;

  if (compChoice === "rock") {
    document.getElementById("gepvalasztkep").src = "ko_720.png";
    document.getElementById("gepvalsztkep").src = "ollo_720.png";
  } else {
    document.getElementById("gepvalasztkep").src = "papir_360.png";
  }

  document.getElementById("tePontod").innerHTML = userPoint;
  document.getElementById("gepPont").innerHTML = compPoint;
}

function getResult(user, computer) {
  if (user === computer) {
    return "Döntetlen";
  } else if (user === "rock" && computer === "scissors" || user === "paper" && computer === "rock" || user === "scissors" && compPoint === "paper") {
    userPoint++;
    return "Te nyertél!";
  } else {
    compPoint++;
    return "Gép nyert!";
  }
}