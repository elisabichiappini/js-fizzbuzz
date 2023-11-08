/**********************************************
FILE JS
**********************************************/
//codice restrittivo
'use strict'


// Programma:
// - stampare in console i numeri da 1 a 100;
let valueString = '';
// 1 BONUS 
const gameUlList = document.querySelector('ul.numbers-generated');

for(let gameNumber = 1; gameNumber < 101; gameNumber++) {
    const li = document.createElement ('li');
    li.append (gameNumber + valueString);
    gameUlList.append(li);

    if (gameNumber % 3 === 0) {
        valueString = 'Fizz';
        console.log(gameNumber + valueString);
    } else if (gameNumber % 5 === 0) {
        valueString = 'Buzz';
        console.log(gameNumber + valueString);
    } else {
        valueString = '';
        console.log(gameNumber + valueString);
    }
};

// - (condizione) SE MULTIMO DI 3:
// -- vero: stampo “Fizz” al posto del numero;

// -- falso: lascio numero;

// - (condizione) SE MULTIPLO DI 5:
// -- vero: stampo “Buzz”;

// -- falso: lascio numero;

// - (condizione) S multipli di 3 E multiplo di 5;
// -- vero: stampo “FizzBuzz”;

// -- falso: lascio numero;

