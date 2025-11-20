/* script.js */
let count = 0;

function addInput() {
  count++;
  const container = document.getElementById("inputs");

  const label = document.createElement("label");
  label.textContent = `Voto ${count}`;

  const input = document.createElement("input");
  input.type = "text";
  input.className = "voto";

  container.appendChild(label);
  container.appendChild(input);
}

function calcolaMedia() {
  try {
    let voti = Array.from(document.querySelectorAll(".voto"))
                   .map(input => input.value);

    if (voti.length === 0) throw "Inserisci almeno un voto!";

    for (let i = 0; i < voti.length; i++) {
      if (isNaN(voti[i]) || voti[i] === "") throw "Tutti i valori devono essere numeri!";
      voti[i] = Number(voti[i]);
    }

    const media = (voti.reduce((a, b) => a + b, 0) / voti.length).toFixed(2);

    let msg = "";
    if (media >= 8) msg = `Media: ${media} → ECCELLENTE 🏆`;
    else if (media >= 6) msg = `Media: ${media} → Buono 😊`;
    else msg = `Media: ${media} → Da migliorare 😔`;

    document.getElementById("risultato").innerHTML = msg;
  }
  catch (err) {
    document.getElementById("risultato").innerHTML = err;
  }
}

document.getElementById("addBtn").onclick = addInput;
document.getElementById("calcBtn").onclick = calcolaMedia;

// Aggiungi già un campo all'avvio
addInput();