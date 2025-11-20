const btn = document.getElementById('theme-btn');
const body = document.body;

// 1. FUNZIONI COOKIE
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// 2. CARICAMENTO PREFERENZA ALL'AVVIO
const savedTheme = getCookie("theme");
if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    btn.textContent = "☀️ Cambia Tema";
}

// 3. GESTIONE TOGGLE
btn.addEventListener('click', () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        setCookie("theme", "dark", 30); // Salva per 30 giorni
        btn.textContent = "☀️ Cambia Tema";
    } else {
        setCookie("theme", "light", 30);
        btn.textContent = "🌙 Cambia Tema";
    }
});

// 4. INFO DISPOSITIVO (BOM)
const list = document.getElementById('device-details');
const info = [
    `Larghezza Finestra: ${window.innerWidth}px`,
    `Altezza Finestra: ${window.innerHeight}px`,
    `Piattaforma: ${navigator.platform}`,
    `Lingua: ${navigator.language}`
];

info.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
});