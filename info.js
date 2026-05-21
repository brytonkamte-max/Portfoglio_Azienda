// selezione elementi DOM
const form = document.getElementById("formInfo");
const contenitoreMessaggi = document.getElementById("contenitoreMessaggi");

// submit form
form.addEventListener("submit", function(event){
    // blocco refresh pagina
    event.preventDefault();
    // recupero valori
    const email = document.getElementById("email").value;
    const messaggio = document.getElementById("messaggio").value;

    // messaggio successo
    contenitoreMessaggi.textContent = "Richiesta inviata con successo!";
    contenitoreMessaggi.style.color = "green";
    // reset form
    form.reset();
});