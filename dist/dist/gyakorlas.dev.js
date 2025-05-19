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