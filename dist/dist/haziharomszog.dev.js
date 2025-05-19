"use strict";

function szamol() {
  var a = parseFloat(document.getElementById('aoldal').value);
  var b = parseFloat(document.getElementById('boldal').value);
  var c = parseFloat(document.getElementById('coldal').value);
  if (isNaN(a) || isNaN(b) || isNaN(c)) return;
  var kerulet = a + b + c;
  var s = kerulet / 2;
  var terulet = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  document.getElementById('kerulet').value = kerulet;
  document.getElementById('terulet').value = terulet.toFixed(4);
}

function alaphelyzet() {
  document.getElementById('aoldal').value = '';
  document.getElementById('boldal').value = '';
  document.getElementById('coldal').value = '';
  document.getElementById('kerulet').value = '';
  document.getElementById('terulet').value = '';
}