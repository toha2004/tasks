"use strict";

const number1 = prompt('Введите число');
const number2 = prompt('Введите число');

function min(number1, number2) {
    return (number1 < number2) ? number1 : number2;
}

console.log('минимальное число', min(number1, number2));