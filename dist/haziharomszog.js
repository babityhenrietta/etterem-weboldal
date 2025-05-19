function szamol() {
    const a= parseFloat(document.getElementById('aoldal').value);
    const b= parseFloat(document.getElementById('boldal').value);
    const c= parseFloat(document.getElementById('coldal').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) return;

    const kerulet=a+b+c;
    const s=kerulet/2;
    const terulet=Math.sqrt(s* (s-a)*(s-b)*(s-c));

    document.getElementById('kerulet').value=kerulet;
    document.getElementById('terulet').value=terulet.toFixed (4);
}

function alaphelyzet() {
    document.getElementById('aoldal').value='';
    document.getElementById('boldal').value='';
    document.getElementById('coldal').value='';
    document.getElementById('kerulet').value='';
    document.getElementById('terulet').value='';
}

