/*
Snack2
Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno 
formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.
*/



const askNumber = prompt("Inserisci un numero :")

let arrayFirst = []

let randomArray = askNumber * (arrayFirst)

console.log(randomArray)

for(let i = 0; i < 10; i++){

    casualArrayContent = arrayFirst[Math.round(Math.random()*10)+1];

}

