"use strict";

const  nameOfProduct = prompt('Наименование товара');
const quantityOfGoods = prompt('Количество товара');
const productCategory = prompt('Категория товара');
const price = prompt('Цена товара');

console.log(typeof  nameOfProduct);
console.log(typeof +quantityOfGoods);
console.log(typeof productCategory);
console.log(typeof +price);
console.log('на складе ' + quantityOfGoods + ' единиц ' + nameOfProduct + ' на сумму ' + (quantityOfGoods * price));



if  ((!isNaN(parseFloat(price)) && isFinite(price)) && (!isNaN(parseFloat(quantityOfGoods)) && isFinite(quantityOfGoods))){
    console.log('на складе ' + quantityOfGoods + ' единиц ' + nameOfProduct + ' на сумму ' + (quantityOfGoods * price));
} else {
    console.log('Вы ввели некорректные данные');
}





