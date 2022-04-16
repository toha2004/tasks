"use strict";

let str = prompt('Введите строку!');

function getReturn(str) {
return str.split("").reverse().join("");
}
alert(getReturn(str));



/*function getReturn() {
    return ('\u202E' + str);
}

alert(getReturn());*/