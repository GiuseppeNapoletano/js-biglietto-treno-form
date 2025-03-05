/*Il programma dovrà mostrare una form da compilare usando i corretti campi HTML di input con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Utilizzate Bootstrap come libreria UI.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).Vi consigliamo di seguire questo ordine nella risoluzione dell'esercizio:
1. Preparazione dell'interfaccia utente con utilizzo di classi di bootstrap.
2. Al click sul bottone "calcola" prelevare tutti i dati dagli input e stamparli in console.
3. Eseguire il calcolo del prezzo e stamparlo in console.
4. Stampare il risultato in pagina.*/

const ticketform = document.getElementById("ticketForm");
const nameInput = document.getElementById("name");
const lastnameInput = document.getElementById("lastname")
const etaInput = document.getElementById("eta");
const kmInput = document.getElementById("km");
const risultatoElemento = document.getElementById("risultato");
ticketform.addEventListener("submit", gestisciForm);



function gestisciForm(event) {
    event.preventDefault()
    const nome = nameInput.value
    const cognome = lastnameInput.value
    const eta = parseInt(etaInput.value);
    const km = parseInt(kmInput.value);
    let risultatoFinale = sconto(eta, km)
    let message = `Salve ${nome} ${cognome}, il costo del tuo biglietto sara di ${risultatoFinale}€`
    risultatoElemento.innerText = message;
}


function sconto(etaFunction, kmFunction) {
    const prezzoBigliettoIntero = kmFunction * 0.21;
    const scontoMinorenni = prezzoBigliettoIntero * 20 / 100;
    const scontoOver = prezzoBigliettoIntero * 40 / 100;
    let prezzoBigliettoFinale
    if (etaFunction <= 17) {
        prezzoBigliettoFinale = prezzoBigliettoIntero - scontoMinorenni;
    } else if (etaFunction >= 65) {
        prezzoBigliettoFinale = prezzoBigliettoIntero - scontoOver;
    } else prezzoBigliettoFinale = prezzoBigliettoIntero;
    return prezzoBigliettoFinale.toFixed(2);
}