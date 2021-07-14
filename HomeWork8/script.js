'use strict';

/*
1. Для практикума из занятия 7 продумать, где можно применить замыкания.
*/



/*
2. Не выполняя кода, ответить, что выведет браузер и почему:

if (!("a" in window)) {
    var a = 1;
}
alert(a);

var b = function a(x) {
    x && a(--x);
};
alert(a);

function a(x) {
    return x * 2;
}
var a;
alert(a);

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);

function a() {
    alert(this);
}
a.call(null);
*/

// a = undefined, в if видно что window.a нет
if (!("a" in window)) {
    var a = 1; // поэтому эта строка не сработает
}
alert(a);


// Undefined. Вроде из-за того, что a не объявлен...
var b = function a(x) {
    x && a(--x);
};
alert(a);

// Просто выведет в alert саму функцию как она записана, потому что мы просим именно отобразить ее а не выполнить. Функция не объявлена. Создана переменная а, ей присвоена функция.
function a(x) {
    return x * 2;
}
var a;
alert(a);

// Будет 10, потому что параметр аргумент[2] относится к значению а. В данном случае х = arguments[0], y = [1], a = [2]. Мы переопределяем значение а с 3 на 10.
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);

// Будет null. Потому что метод call() представляет собой предопределенный метод JavaScript. То есть мы вызываем функцию с передачей значения функции null, а функция выведет этот заданный параметр. 
function a() {
    alert(this);
}
a.call(null);