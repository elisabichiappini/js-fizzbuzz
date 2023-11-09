/**********************************************
FILE JS
**********************************************/
//codice restrittivo
'use strict'

// - (condizione) SE MULTIMO DI 3:
// -- vero: stampo “Fizz” al posto del numero;
// -- falso: lascio numero;
// - (condizione) SE MULTIPLO DI 5:
// -- vero: stampo “Buzz”;
// -- falso: lascio numero;
// - (condizione) S multipli di 3 E multiplo di 5;
// -- vero: stampo “FizzBuzz”;
// -- falso: lascio numero;

// Programma:
// - stampare in console i numeri da 1 a 100;
let valueString = '';
// 1 BONUS 
const gameUlList = document.querySelector('ul.numbers-generated');

for(let gameNumber = 1; gameNumber <= 100; gameNumber++) {
    const li = document.createElement ('li');
    
    if (gameNumber % 3 === 0 && gameNumber % 5 === 0) {
        valueString = 'FizzBuzz';
        console.log(valueString)
    } else if (gameNumber % 3 === 0) {
        valueString = 'Fizz';
        console.log(valueString);
    } else if (gameNumber % 5 === 0) {
        valueString = 'Buzz';
        console.log(valueString);
    } else {
        valueString = gameNumber + '';
        console.log(valueString);
    }
    li.append (valueString);
    gameUlList.append(li);
};
