"use strict";

const x = prompt('Введите число');
const y = prompt('Введите число');

function NOD (x, y) {
    if (y > x) return NOD(y, x);
    if (!y) return x;
    return NOD(y, x % y);
}
console.log(NOD(x, y));