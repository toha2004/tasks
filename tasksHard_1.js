const cash = prompt('Введите ваш доход');
let tax;
if (cash <= 15000) {
    tax = cash * 13 / 100;
    console.log(tax);

} else if (cash > 15000 && cash <= 50000) {
    tax = cash * 20 / 100;
    console.log(tax);

} else  {
    tax = cash * 30 / 100;
    console.log(tax);
}