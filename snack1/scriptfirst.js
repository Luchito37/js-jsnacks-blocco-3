/*
Snack1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a 
quando la somma degli elementi è minore di 50.
*/

let listaNum = []

let somma = 0;

while (somma < 50 ) {



        const askNumber = prompt("Inserisci un numero :")
        
        listaNum.push(parseInt(askNumber))

        somma = somma + parseInt(askNumber);
        
        console.log(somma)
        
        console.log(listaNum)
    
    
}