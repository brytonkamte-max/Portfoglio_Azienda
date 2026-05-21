// Selezioniamo la lista in cui inserire i prodotti salvati
const listaScelta = document.getElementById("lista-scelta");

// --- GESTIONE TAVOLO ---

// 1. Seleziono il bottone, il nome e il prezzo del tavolo usando i loro ID precisi
const btnTavolo = document.getElementById("btn-tavolo");
const nomeTavolo = document.getElementById("nome-tavolo").textContent;
const prezzoTavolo = document.getElementById("prezzo-tavolo").textContent;

// 2. Creo l'evento click specifico solo per il tavolo
btnTavolo.addEventListener("click", function() {
    // Creiamo il tag <li>
    const nuovoElemento = document.createElement("li");
    // Gli scriviamo dentro i dati del tavolo che abbiamo preso sopra
    nuovoElemento.textContent = nomeTavolo + " - Prezzo: " + prezzoTavolo;
    // Lo aggiungiamo alla lista in fondo
    listaScelta.appendChild(nuovoElemento);
});


// --- GESTIONE SEDIA ---

// 1. Seleziono il bottone, il nome e il prezzo della sedia usando i loro ID precisi
const btnSedia = document.getElementById("btn-sedia");
const nomeSedia = document.getElementById("nome-sedia").textContent;
const prezzoSedia = document.getElementById("prezzo-sedia").textContent;

// 2. Creo l'evento click specifico solo per la sedia
btnSedia.addEventListener("click", function() {
    // Creiamo il tag <li>
    const nuovoElemento = document.createElement("li");
    // Gli scriviamo dentro i dati della sedia che abbiamo preso sopra
    nuovoElemento.textContent = nomeSedia + " - Prezzo: " + prezzoSedia;
    // Lo aggiungiamo alla lista in fondo
    listaScelta.appendChild(nuovoElemento);
});