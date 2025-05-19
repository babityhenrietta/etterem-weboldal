//elemek elérése
document.getElementById("szoveg").innerText="Főcím"
let szoveg=document.getElementById("szoveg")
szoveg.innerText="Főcím"
szoveg.style.color="red"
szoveg.style.fontsize="30px"
szoveg.style.fontFamily="Arial"
szoveg.style.textAlign="center"

szoveg.style.backgroundColor="yellow"
szoveg.style.padding="10px"
szoveg.style.border="2px solid black"
szoveg.style.borderRadius="5px"
szoveg.style.boxShadow="2px 2px 5px grey"
szoveg.style.textTransform="uppercase"
szoveg.style.textDecoration="underline"
szoveg.style.fontWeight="bold"
szoveg.style.textShadow="1px 1px 2x grey"
szoveg.style.letterSpacing="2px"

let elem1=document.getElementsByClassName("elem1")
elem1[0].innerText="Első elem"
elem1[1].innerText="Második elem"
elem1[1].style.color="blue"
elem1[2].innerText="Harmadik elem js"
elem1[2].style.backgroundColor="green"

let lista=document.getElementsByTagName("li")
for (let elem of lista){
    elem.style.color="red"
}
for (let i=0; i<lista.length; i+=2) {
    if(i%2==0){
lista[i].style.background= "yellow"
    } else {
        lista[i].style.background= "blue"
    }
}

//Készíts 6 soros táblázatot, 2 oszlop, a páros sorok színe legyen kék, a páratlanoké piros//

function paros() {
let szam=document.getElementById("szam").value
let szoveg
if(szam%2==0){
    szoveg="Helyes számot adtál meg!"
} else {
    szoveg="Ez nem páros szám!"
}
document.getElementById("kiiras").innerText=szoveg
}

function osszeg() {
    let szam1=+document.getElementById("egy").value
    let szam2=+document.getElementById("ketto").value
    let osszeg=szam1+szam2
    document.getElementById("eredmeny").innerHTML=osszeg
    
}

function szorzat() {
    let szam1=+document.getElementById("egy").value
    let szam2=+document.getElementById("ketto").value
    let szorzat=szam1*szam2
    document.getElementById("eredmeny").innerHTML=szorzat

}

function rahuz () {
    document.getElementById("katt").style.backgroundColor="blue"
    document.getElementById("katt").style.borderRadius="10px"
}

function lehuz() {
    document.getElementById("katt").style.backgroundColor="gray"
    document.getElementById("katt").style.borderRadius="5px"
}

function leutes() {
    document.getElementById("leutesek").innerHTML+="Leütöttél egy billentyűt"
    
}
