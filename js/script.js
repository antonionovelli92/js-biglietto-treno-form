console.log('JS OK')

/* MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, ispiratevi all'immagine in allegato. Potete scegliere di implementare una soluzione completamente diversa oppure simile.
:avviso: ATTENZIONE: se utilizzate il tag <form> Javascript tenterà di ricaricare la pagina, cancellando tutte le vostre variabili in memoria. Per evitare che ciò accada, per il momento non utilizzate il tag <form> (oppure inserite un  <button type="button">)
BONUS:
Randomizzare un numero per la carrozza dell'utente
Randomizzare un numero per il codice del biglietto
Utilizzare una <select> invece di un <input> per determinare l'età dell'utente
Buon pomeriggio e buon divertimento! */



const ticketElement = document.getElementById('ticket')
const inputName = document.getElementById('text-name')
const inputKms = document.getElementById('text-kms')
const inputAge = document.getElementById('text-age')
const btnGenera = document.getElementById('btn-genera')
// print
const finalName = document.getElementById('final-name')
const finalDiscount = document.getElementById('final-discount')
const train = document.getElementById('train')
const code = document.getElementById('code')
const lastPrice = document.getElementById('last-price')


btnGenera.addEventListener('click', function () {
    const age = inputAge.value;
    const kms = inputKms.value;





    if (isNaN(kms) || isNaN(age) || kms <= 0 || age <= 0) {
        alert('I dati inseriti non sono corretti')
    } else {

        // Calcolo il prezzo base
        const basePrice = kms * 0.21;
        let finalPrice = basePrice;
        const name = inputName.value;
        const random = Math.random();
        const randomTrain = random * 10;
        const randomCode = random * 10000;




        let discount = null;

        // verifico eventuali sconti
        if (age >= 65) {
            finalPrice *= 0.6;
            discount = "40%";

        } else if (age < 18) {
            finalPrice *= 0.8;
            discount = "20%";
        }




        finalName.innerText = name;
        train.innerText = Math.floor(randomTrain);
        code.innerText = Math.floor(randomCode);
        finalDiscount.innerText = discount;
        lastPrice.innerText = finalPrice.toFixed(2) + "€";
    }
})













//*************************************************** */

//Info generics

// // const kms = prompt('Quanti chilometri vuoi percorrere?', 100)
// // const age = prompt('Quanti anni hai?', 35)

// //controlliamo se ci sono probelmi
// // if (isNaN(kms) || isNaN(age) || kms <= 0 || age <= 0) {
// //     alert('I dati inseriti non sono corretti')
// // } else {

// //     // Calcolo il prezzo base
// //     const basePrice = kms * 0.21;
// //     let finalPrice = basePrice;


// //     let discount = null;

// //     // verifico eventuali sconti
// //     if (age >= 65) {
// //         finalPrice *= 0.6;
// //         discount = "40%";

// //     } else if (age < 18) {
// //         finalPrice *= 0.8;
// //         discount = "20%";
// //     }
// //     // ticketElement.innerText = finalPrice.toFixed(2) + "€";
// }





