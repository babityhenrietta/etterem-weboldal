"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

console.log("Szia Zoli"); //egysoros megjegyzés

/*többsoros megjegyzés*/
//Adattípusok

/*Egyszerű adattípusok:

number (szám), 
string(szöveg),
boolean(logikai)

Összetett adattípusok:
tömbök-Array
objektumok-Object
*/
//Változók

var a = 8;
console.log(a, _typeof(a));
a = "szöveg";
console.log(a, _typeof(a));
a = false;
console.log(a, _typeof(a));
var PI = 3.14; //Elágazások if(feltétel){igaz ág} else {hamis ág}

var szam1 = 5;
var szam2 = 8;

if (szam1 < szam2) {
  console.log(szam1, "kisebb, mint", szam2);
} else {
  console.log(szam2, "kisebb, mint", szam1);
}

if (szam1 % 3 == 0) {
  console.log(szam1, "osztható hárommal");
} else {
  console.log(szam1, "nem osztható hárommal");
}
/*többágú elágazások-switch(kifejezés) {
    case x: kód break;
    case y: kód break;
    case z: kód break;
    default: kód}
    */


szam1 = 1;

switch (szam1) {
  case 1:
    console.log("egy");
    break;

  case 16:
    console.log("tizenhat");
    break;

  case 20:
    console.log("húsz");
    break;

  default:
    console.log("nem jó szám");
} //ciklusok: léptető (for), elől és hátultesztelő (while)

/*for ciklus for(inicializálás; feltétel; növekmény)
{ciklusmag}
*/


for (i = 0; i < 10; i++) {
  console.log(i);
}

for (i = 0; i < 100; i++) {
  console.log(i);
} //while ciklus while(feltétel) { ciklusmag}


var j = 0;

while (j < 15) {
  console.log(j);
  j++;
} //hátultesztelő while ciklus


j = 3;

do {
  console.log(j);
  j++;
} while (j < 5);

for (i = 1; i < 50; i++) {
  if (i % 5 == 0) {
    console.log(i, "Osztható öttel");
  } else {
    console.log(i, "Nem osztható öttel");
  }
} //Összetett feltételek és && vagy II
//függvények function függvény_neve(paraméterek-opcionális){függvénytörzs}


function osszeg(a, b) {
  var osszeg = a + b;
  return a + b;
}

ossz1 = 18;
ossz2 = 19;
console.log(osszeg(ossz1, ossz2));
/* alert ("Szia")
prompt ("Kérek egy számot")

confirm("igaz-e?") */

var beker1 = Number(prompt("Kérek egy számot"));
var beker2 = Number(prompt("Kérek egy számot"));
console.log("A bekért szám:", beker1, _typeof(beker1));
console.log(osszeg(beker1, beker2));

function kivonas(a, b) {
  return a - b;
}

var eredmeny1 = kivonas(15, 7);
console.log("15-7=" + eredmeny1);
var eredmeny2 = kivonas(100, 250);
console.log("100-250=" + eredmeny2);
var muvelet = prompt("Melyik művelet legyen?");

if (muvelet === "Kivonás" || muvelet === "-") {
  console.log(kivonas(beker1, beker2));
} else if (muvelet === "Összeadás" || muvelet === "+") {
  console.log(osszeg(beker1, beker2));
} //Tömb let gyumolcsok= ["alma", körte", "banán"]
//bármilyen adattípus lehet egy tömbben


var zsak = [123, "szöveg", true, [323, 23432], false, 512];
var gyumolcsok = ["alma", "körte", "banán"];
console.log(gyumolcsok[2]);
console.log(zsak[3]);
console.log(zsak.length);

for (i = 0; i < gyumolcsok.length; i++) {
  console.log(gyumolcsok[1]);
}

for (var _i = 0, _gyumolcsok = gyumolcsok; _i < _gyumolcsok.length; _i++) {
  var gyumolcs = _gyumolcsok[_i];
  console.log(gyumolcs);
}

var szamlalo = 0;

for (var _i2 = 0; _i2 < zsak.length; _i2++) {
  if (typeof zsak[_i2] === "number") {
    szamlalo++;
  }
}

console.log("Number típusú elemek száma:", szamlalo); //Objektumok kulcs-érték párok

var objektum = {
  nev: "Zoli",
  nem: "férfi",
  szulev: 1854,
  felnott: false
};
var nagykoru;

if (objektum.felnott === true) {
  var _nagykoru = "igen";
} else {
  nagykoru = "nem";
}

console.log("A személy neve:", objektum.nem, "Felnott:", nagykoru);
console.log(gyumolcsok instanceof Array);
var k = 20;
var abc = 18;
console.log(k);

function kiir() {
  k = 20;
  console.log("függvényben:", k);
}

kiir();
console.log(k);