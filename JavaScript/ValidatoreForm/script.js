const form = document.getElementById('myForm');

// Definiamo le REGEX (Espressioni Regolari)
const patterns = {
    // Almeno 3 caratteri, solo lettere e spazi
    nome: /^[a-zA-Z\s]{3,}$/, 
    // Pattern standard email
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
    // Esattamente 10 cifre numeriche
    telefono: /^\d{10}$/ 
};

function validaCampo(input, regex, idErrore, msgErrore) {
    const valore = input.value.trim();
    const spanErrore = document.getElementById(idErrore);

    // Testiamo il valore contro la regex
    if (regex.test(valore)) {
        // VALIDO
        input.className = "valid";
        spanErrore.textContent = ""; // Pulisce messaggio errore
        return true;
    } else {
        // INVALIDO
        input.className = "invalid";
        spanErrore.textContent = msgErrore;
        return false;
    }
}

form.addEventListener('submit', function(e) {
    // 1. Impediamo l'invio reale del form
    e.preventDefault(); 

    // 2. Eseguiamo la validazione su tutti i campi
    const isNomeOk = validaCampo(
        document.getElementById('nome'), 
        patterns.nome, 
        'err-nome', 
        "Inserisci un nome valido (min 3 lettere)"
    );

    const isEmailOk = validaCampo(
        document.getElementById('email'), 
        patterns.email, 
        'err-email', 
        "Inserisci una email valida"
    );

    const isTelOk = validaCampo(
        document.getElementById('telefono'), 
        patterns.telefono, 
        'err-telefono', 
        "Inserisci un numero di 10 cifre"
    );

    // 3. Se tutto è OK, mostriamo il popup
    if (isNomeOk && isEmailOk && isTelOk) {
        // Uso setTimeout per far vedere prima i colori verdi, poi l'alert
        setTimeout(() => {
            alert("Modulo inviato con successo! ✅");
            form.reset(); // Pulisce il form
            // Rimuove le classi valid/invalid
            document.querySelectorAll('input').forEach(i => i.className = '');
        }, 100);
    }
});