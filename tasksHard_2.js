const cash = prompt('Введите ваш доход');
let tax;
let minSum = 15000;
let maxSum = 50000;
if (cash <= 15000) {
    tax = cash * 13 / 100;
    console.log(tax);

} else if (cash > 15000 && cash <= 50000) {
    let cash2 = cash - minSum;
    tax = cash2 * 20 / 100 + minSum * 13 / 100;
    console.log(tax);

} else  {
    let cash3 = cash - maxSum;
    tax = cash3 * 30 / 100 + maxSum * 20 / 100;
    console.log(tax);
}