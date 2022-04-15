"use strict";
/*Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
    В качестве аргументов функция принимает 3 параметра:
    Общая сумма корзины
Количество товаров в корзине
Промокод
Правила и порядок (порядок важен!) начисления скидок:
    Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
Если промокод равен "METHED", то скидка 10%
Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р

Порядок применения скидок должен соблюдаться*/
let sum = prompt('Общая сумма корзины');
let str2 = prompt('Количество товаров в корзине');
let promoCode = prompt('Промокод');


function calculate() {
    if (str2 > 10 && sum <= 30000){
        let sum1 = sum - sum * 0.03;
        return sum1;
    } else if (sum > 30000) {
        let sum2 = sum - 30000 - (sum - 30000) * 0.15;
        let sum3 = 30000 - 30000 * 0.03;
        return sum2 + sum3;
    } else if (promoCode === "METHED") {
        return sum * 0.1;
    } else if (promoCode === "G3H2Z1" && sum > 2000) {
        return sum - 500;
    }
    else
    {
        return sum;
    }
}
alert(calculate());

