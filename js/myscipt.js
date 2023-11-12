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

// 1 BONUS 
const gameUlList = document.querySelector('ul.numbers-generated');

// - stampare in console i numeri da 1 a 100;
for(let gameNumber = 1; gameNumber <= 100; gameNumber++) {
    const elementLi = document.createElement ('li');
    let valueString = gameNumber;
    
    if (gameNumber % 3 === 0 && gameNumber % 5 === 0) {
        valueString = 'fizzbuzz';
        // console.log(valueString)
    } else if (gameNumber % 3 === 0) {
        valueString = 'fizz';
        // console.log(valueString);
    } else if (gameNumber % 5 === 0) {
        valueString = 'buzz';
        // console.log(valueString);
    }

    if (typeof valueString !== 'number'){
        elementLi.classList.add(valueString);
    }
    elementLi.append (valueString);
    gameUlList.appendChild(elementLi);
};
