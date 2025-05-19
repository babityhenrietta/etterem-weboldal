function vizsgal () {
    let a=
    parseFloat(document.getElementById("a").
value);
    let b=
    parseFloat(document.getElementById("b").
value);
    let c=
    parseFloat(document.getElementById("c").
value);
    let eredmeny=
document.getElementById("eredmeny");

if (a+b>c && a+c> b&&b+c>a) {
    if (a===b && b===c){
        eredmeny.textContent="Egyenlőszárú háromszög.";
    } else if (a===b || a===c ||b===c) {
    
    } else {
        eredmeny.textContent="Általános háromszög.";
    }
} else {
    eredmeny.textContent="A megadott oldalak nem alkotnak háromszöget!";
}
}
