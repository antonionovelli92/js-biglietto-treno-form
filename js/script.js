console.log('JS OK')

//  TRACCIA:
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



// 1. Chiedere quanti km si vogliono percorrere
// 2. Chiedere l'eta del passeggero
// 3. Calcolare il prezzo totale del viaggio (che si baserà sui km dei passeggeri)
// 4. calcolare due tipologie di sconto:
// 4a. 20% SE minori
// 4b. 40% SE maggiori
// 5. applicare le due tipologie di sconto:
// 5a. 20% SE minori
// 5b. 40% SE maggiori

// 5. Prezzo finale 

const priceElement = document.getElementById('price')
// ! console.log('priceElement')

let priceKm = 0.21;


// 1. Chiedere quanti km si vogliono percorrere 2. Chiedere l'eta del passeggero
const userDistance = parseInt(prompt('Quanti km devi effettuare?', 35).trim());
const userAge = parseInt(prompt('Quanti anni hai?', 30).trim());
// ! console.log(userDistance, userAge)

// 3. Calcolare il prezzo totale del viaggio (che si baserà sui km dei passeggeri)
const priceTotal = (userDistance * priceKm);
// !console.log(priceTotal.toFixed(2))

// 4. Calcolare sconto del 20%
let discountJunior = parseInt((priceTotal / 100) * 20);
let juniorPrice = priceTotal - discountJunior;
// !console.log(juniorPrice.toFixed(2))

// 4. Calcolare sconto del 40%
let discountSenior = parseInt((priceTotal / 100) * 40);
let seniorPrice = priceTotal - discountSenior;
// !console.log(seniorPrice.toFixed(2))


//applicare lo sconto
if (userAge >= 65) {
    console.log(seniorPrice.toFixed(2))
    priceElement.innerText = `Complimenti, il tuo prezzo finale sarà di ${seniorPrice.toFixed(2)}€ `

} else {
    console.log(juniorPrice.toFixed(2))
    priceElement.innerText = `Complimenti, il tuo prezzo finale sarà di ${juniorPrice.toFixed(2)}€ `

}








