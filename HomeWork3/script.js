'use strict';

/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
*/

console.log('Пример 1');

var i = 0;
simpleNum: while (i < 100) {
    i++;
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            continue simpleNum;
        }
    }
    console.log(i);
}

/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. 
Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

console.log('Пример 2');

// a)
var cart = [
    {
        title: 'item-1',
        price: 700,
        quantity: 5
    },
    {
        title: 'item-2',
        price: 300,
        quantity: 4
    },
    {
        title: 'item-3',
        price: 2350,
        quantity: 3
    }
];

// b)
function countBasketPrice(sum) {
    var result = 0;
    for (var item of cart) {
        result += item.price * item.quantity;
    }
    return result;
}

console.log(`Стоимость товаров в корзине: ${countBasketPrice(cart)}`);

/*
3.Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}
*/

console.log('Пример 3');

for (i = 0; i <= 9; console.log(i++));

/*
4) Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
*/

console.log('Пример 4');

var n = 'x';

for (i = 0; i < 20; i++) {
    console.log(n);
    n += 'x';
}