"use strict";


let a = prompt('стоимость покупки в евро');
 function calcPrice()
 {
     const b = 73 * 1.2;
     return a * b;
}
const result = calcPrice();
console.log(result);
