"use strict";

let str = prompt('Введите строку!');

/*function getReturn() {
    return (str[0].toUpperCase() + str.slice(1));
}

alert(getReturn());*/

const getReturn = () => str[0].toUpperCase() + str.slice(1);
alert(getReturn());