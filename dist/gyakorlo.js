

let count=0; 
let i=1000; 
do {if (i%2===0) { count++;} i--; } 
while (i>=300); 
console.log("páros számok 300 és 1000 közt: "+count);

let autok= ["Toyota", "BMW", "Mercedes", "Audi", "Ford", "Volkswagen"]; 
let szoveg=""; for (let i=0; i<autok.length; i++) 
    { szoveg+=autok[i]+"<br>"; }  
document.getElementById("enautom").innerHTML=szoveg;

function ellenoriz(szam1, szam2) 
{ let osszeg=szam1+szam2; 
return osszeg <100 &&osszeg%2===0;}