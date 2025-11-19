/* script.js */
function calcolaMedia() {
try {
let voti = [
document.getElementById("v1").value,
document.getElementById("v2").value,
document.getElementById("v3").value
];


for (let i = 0; i < voti.length; i++) {
if (isNaN(voti[i]) || voti[i] === "") {
throw "Errore: inserisci solo numeri!";
}
voti[i] = Number(voti[i]);
}


const media = calcola(voti[0], voti[1], voti[2]);


let messaggio = "";
if (media >= 6) {
messaggio = `Media: ${media} → Studente PROMOSSO 🎉`;
} else {
messaggio = `Media: ${media} → Studente NON sufficiente 😔`;
}


document.getElementById("risultato").innerHTML = messaggio;
} catch (err) {
document.getElementById("risultato").innerHTML = err;
}
}


function calcola(a, b, c) {
return ((a + b + c) / 3).toFixed(2);
}