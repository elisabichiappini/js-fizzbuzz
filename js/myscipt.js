/**********************************************
FILE JS
**********************************************/
//codice restrittivo
'use strict'


// Programma:
// - stampare in console i numeri da 1 a 100;
const valueFizz = 'Fizz';
const valueBuzz = 'Buzz';

for(let gameNumber = 1; gameNumber < 101; gameNumber++){
    if (gameNumber % 3 === 0) {
        console.log(`${gameNumber} ${valueFizz}`);
    } else {
        console.log(gameNumber)
    }
}

// - (condizione) SE MULTIMO DI 3:
// -- vero: stampo “Fizz” al posto del numero;

// -- falso: lascio numero;

// - (condizione) SE MULTIPLO DI 5:
// -- vero: stampo “Buzz”;

// -- falso: lascio numero;

// - (condizione) S multipli di 3 E multiplo di 5;
// -- vero: stampo “FizzBuzz”;

// -- falso: lascio numero;
