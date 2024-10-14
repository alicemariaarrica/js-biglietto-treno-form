//MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

function generaBiglietto(){
    
    let nome = document.getElementById("nome").value;
    let numKm = Number(document.getElementById("km").value); //ho aggiunto Number perchè (document.getElementById) restituisce una stringa
    let numAge = Number(document.getElementById("age").value); // //ho aggiunto Number perchè (document.getElementById) restituisce una stringa


let scontoMinor = 1-0.2;
let scontoOld = 1-0.4;
let costKm = 0.21;
let prezzo;


if (numAge > 18 && numAge < 65 || numAge == 18){

 prezzo = numKm * costKm
}

else if (numAge < 18){

    prezzo = numKm * costKm * scontoMinor
}

else {
    prezzo = numKm * costKm * scontoOld
}

console.log("Il prezzo del biglietto per " + nome + " è: " + prezzo.toFixed(2));
}

generaBiglietto()
