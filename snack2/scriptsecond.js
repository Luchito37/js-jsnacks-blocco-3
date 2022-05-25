/*
Snack2
Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno 
formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.
*/



const askNumber = prompt("Inserisci un numero :");

let arrayPrincipal = [];

for(let i = 0; i < askNumber; i++ ){
    let arraySecond = []

    arrayPrincipal.push(arraySecond)

    for(let i = 0; i < 10; i++){
        
        indiciRandom = Math.round(Math.random()*10)+1;

        arraySecond.push(indiciRandom)
    }
    console.log(arraySecond);
}


console.log(arrayPrincipal);





