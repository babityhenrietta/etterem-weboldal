"use strict";

var count = 0;
var i = 1000;

do {
  if (i % 2 === 0) {
    count++;
  }

  i--;
} while (i >= 300);

console.log("páros számok 300 és 1000 közt: " + count);
var autok = ["Toyota", "BMW", "Mercedes", "Audi", "Ford", "Volkswagen"];
var szoveg = "";

for (var _i = 0; _i < autok.length; _i++) {
  szoveg += autok[_i] + "<br>";
}

document.getElementById("enautom").innerHTML = szoveg;

function ellenoriz(szam1, szam2) {
  var osszeg = szam1 + szam2;
  return osszeg < 100 && osszeg % 2 === 0;
}