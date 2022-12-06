console.log('JS OK')

//  TRACCIA:
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const ticketElement = document.getElementById('ticket')

//Info generics

const kms = prompt('Quanti chilometri vuoi percorrere?', 100)
const age = prompt('Quanti anni hai?', 35)

//controlliamo se ci sono probelmi
if (isNaN(kms) || isNaN(age) || kms <= 0 || age <= 0) {
    alert('I dati inseriti non sono corretti')
} else {

    // Calcolo il prezzo base
    const basePrice = kms * 0.21;
    let finalPrice = basePrice;


    let discount = null;

    // verifico eventuali sconti
    if (age >= 65) {
        finalPrice *= 0.6;
        discount = "40%";

    } else if (age < 18) {
        finalPrice *= 0.8;
        discount = "20%";
    }
    ticketElement.innerText = finalPrice.toFixed(2) + "€";
}





