"use strict";

const x = prompt('Введите число');
const y = prompt('Введите число');


function max(x, y) {
    return (x < y) ? x : y;
}
console.log(max(x, y));

/*function max(x, y){
    return Math.max(x, y);
}
console.log(max(x, y));


function max(x, y){
    if(x > y) return x;
    else return y;
}
console.log(max(x, y));*/