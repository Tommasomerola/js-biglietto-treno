// chiedi utente km del viaggio e eta
// INPUT
let distanzaViaggio = parseInt(prompt("inserisci numero di km da percorrere"));

// indicare l'età
let etaUtente = parseInt(prompt("inserisci la tua età"));

console.log("km",distanzaViaggio , "età",etaUtente);
// calcola km x 0.21€ al km
// FUNZIONE
let prezzoIntero = distanzaViaggio * 0.21;
console.log("Il prezzo del biglietto senza sconto è: ", prezzoIntero);

let prezzoScontanto;
// SE eta<18 applica 20%
if (etaUtente < 18){
    prezzoScontanto = (prezzoIntero / 100) * 80;
// SE eta>65 applica 40%
} else if (etaUtente >= 65){
    prezzoScontanto = (prezzoIntero / 100) * 60;
// SE 18>eta>65 no sconto
}else{
    prezzoScontanto = prezzoIntero;
}
// fai output con prezzo finale

console.log("il prezzo finale è di: €",parseInt(prezzoScontanto))