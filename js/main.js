/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere 
e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo) */

//chiedere all'utente i km che dovrà percorrere
let kmUser = prompt("Quanti chilometri dovrai percorrere?");


//chiedere l'età al passeggero

let ageUser = prompt("Quanti anni hai?");

console.log(kmUser, ageUser);

//prezzo del biglietto calcolato in base ai km da percorrere
let x = 0.21;
let ticketPrice = x * kmUser;
let sconto18 = (ticketPrice * 0.20);//se età < 18 anni = prezzo al -20%
let sconto65 = (ticketPrice * 0.40);//se età > 65 anni = prezzo al -40%

console.log(ticketPrice, sconto18, sconto65);

//in base alle'età stabilire il tipo di sconto

    if(ageUser < 18){
        ticketPrice;
        sconto18;

        let ticketPrice18 = ticketPrice - sconto18;

        console.log(ticketPrice18);

        //output del prezzo con massimo due decimali per indicare i centesimi
        document.getElementById('price').innerHTML = ticketPrice18.toFixed(2) + " euro ";

        // console.log(ticketPrice18.toFixed(2));

    } else if(ageUser > 65){
        ticketPrice;
        sconto65;

        let ticketPrice65 = ticketPrice - sconto65;

        console.log(ticketPrice65);

        //output del prezzo con massimo due decimali per indicare i centesimi
        document.getElementById('price').innerHTML = ticketPrice65.toFixed(2) + " euro ";
        
        // console.log(ticketPrice65.toFixed(2));
    }else{
        let x = 0.21;
        let ticketPrice = x * kmUser; // altrimenti nessuno sconto

        //output del prezzo con massimo due decimali per indicare i centesimi
        document.getElementById('price').innerHTML = ticketPrice.toFixed(2) + " euro ";
        
        // console.log(ticketPrice.toFixed(2));
    }



