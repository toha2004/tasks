

const rain = Math.round(Math.random(0, 1) );
if (rain === 1) {
    console.log('Пошёл дождь. Возьмите зонт!');
} else {
    console.log('Дождя нет!');
}



const match = prompt('Введите кол-во баллов по математике');
const russian = prompt('Введите кол-во баллов по русскому языку');
const information = prompt('Введите кол-во баллов по информатике');
let sum = match + russian + information;

if (sum >= 265) {
    console.log(sum, 'Поздравляю, вы поступили на бюджет!');
} else {
    console.log('Поздравляю, готовьте 300000!');
}


const cash = prompt('Владимир, сколько денег вы хотите снять');

if (cash % 100 === 0) {
    console.log('Возьмите деньги, Владимир');
} else {
    console.log('Введите другую сумму');
}