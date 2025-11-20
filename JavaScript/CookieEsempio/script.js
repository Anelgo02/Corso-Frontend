//creo le variabile per i miei elementi
const firstText = document.getElementById('firstText').value;
const lastText = document.getElementById('lastText').value;
const submitBtn = document.getElementById('submitBtn').value;
const cookieBtn = document.getElementById('cookieBtn').value;

//creo gli eventListener per i bottoni

//eventhandler per submit btn
submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText, 365);
    setCookie("lastName", lastText, 365);
});


//eventhandler per cookie btn
submitBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});


//funzione che inserisce la coppia name-value nel document.cookie
function setCookie(name, value, daysToLive) {

    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`

}

function deleteCookie(name) {
    setCookie(name, null, null);
}

function getCookie(name) {

    //decodifico la string di cookie
    const cDecoded = decodeURIComponent(document.cookie);
    //creo l'array in cui ogni elemento e' una coppia chiave/valore
    const cArray = cDecoded.split("; ");

    let result = null;

    //per ogni elemento confronto il nome che cerco con la chiave, se corrisponde allora lo assegno al risultato
    cArray.forEach(element => {
        if (element.indexOf(name + "=") == 0) {
            result = element.substring(name.length + 1);
        }

    });

    return result;


} 
