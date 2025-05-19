"use strict";

//elemek elérése
document.getElementById("szoveg").innerText = "Főcím";
var szoveg = document.getElementById("szoveg");
szoveg.innerText = "Főcím";
szoveg.style.color = "red";
szoveg.style.fontsize = "30px";
szoveg.style.fontFamily = "Arial";
szoveg.style.textAlign = "center";
szoveg.style.backgroundColor = "yellow";
szoveg.style.padding = "10px";
szoveg.style.border = "2px solid black";
szoveg.style.borderRadius = "5px";
szoveg.style.boxShadow = "2px 2px 5px grey";
szoveg.style.textTransform = "uppercase";
szoveg.style.textDecoration = "underline";
szoveg.style.fontWeight = "bold";
szoveg.style.textShadow = "1px 1px 2x grey";
szoveg.style.letterSpacing = "2px";
var elem1 = document.getElementsByClassName("elem1");
elem1[0].innerText = "Első elem";
elem1[1].innerText = "Második elem";
elem1[1].style.color = "blue";
elem1[2].innerText = "Harmadik elem js";
elem1[2].style.backgroundColor = "green";
var lista = document.getElementsByTagName("li");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = lista[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var elem = _step.value;
    elem.style.color = "red";
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

for (var i = 0; i < lista.length; i += 2) {
  if (i % 2 == 0) {
    lista[i].style.background = "yellow";
  } else {
    lista[i].style.background = "blue";
  }
} //Készíts 6 soros táblázatot, 2 oszlop, a páros sorok színe legyen kék, a páratlanoké piros//


function paros() {
  var szam = document.getElementById("szam").value;
  var szoveg;

  if (szam % 2 == 0) {
    szoveg = "Helyes számot adtál meg!";
  } else {
    szoveg = "Ez nem páros szám!";
  }

  document.getElementById("kiiras").innerText = szoveg;
}

function osszeg() {
  var szam1 = +document.getElementById("egy").value;
  var szam2 = +document.getElementById("ketto").value;
  var osszeg = szam1 + szam2;
  document.getElementById("eredmeny").innerHTML = osszeg;
}

function szorzat() {
  var szam1 = +document.getElementById("egy").value;
  var szam2 = +document.getElementById("ketto").value;
  var szorzat = szam1 * szam2;
  document.getElementById("eredmeny").innerHTML = szorzat;
}

function rahuz() {
  document.getElementById("katt").style.backgroundColor = "blue";
  document.getElementById("katt").style.borderRadius = "10px";
}

function lehuz() {
  document.getElementById("katt").style.backgroundColor = "gray";
  document.getElementById("katt").style.borderRadius = "5px";
}

function leutes() {
  document.getElementById("leutesek").innerHTML += "Leütöttél egy billentyűt";
}