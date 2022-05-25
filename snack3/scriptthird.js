/*
Snack3
Il software deve chiedere per 5 volte all’utente di inserire un numero. 
Il programma stampa la somma di tutti i numeri inseriti.
*/

let listaNum = []

let somma = 0;

for(let i = 0; i < 5; i++){

    const askNumber = prompt("Inserisci un numero :")
        
    listaNum.push(parseInt(askNumber))

    somma = somma + parseInt(askNumber);
        
    console.log(somma)
        
    console.log(listaNum)
    
}

    
