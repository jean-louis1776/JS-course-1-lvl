'use strict';

/*
1. Дан код. Почему код даёт именно такие результаты ?
*/

console.log('Пример 1');

var a = 1, b = 1, c, d;
c = ++a;
console.log(`c = ${c} - потому что префиксная форма ++a увеличивает переменную на 1 и возвращает новое значение 2`); // 2
d = b++;
console.log(`d = ${d} - потому что постфиксная форма b++ увеличивает переменную на 1, но возвращает старое значение (которое было до увеличения).`); // 1
c = (2 + ++a);
console.log(`c = ${c} - потому что использована префиксная форма инкремента и т.к. в первом примере мы прибавили единицу в переменную, то поэтому ее значение стало равно 5`); // 5 
d = (2 + b++);
console.log(`d = ${d} - постфиксная форма инкремента и т.к. во втором примере мы прибавили единицу в переменную b, то ее значение стало равно 4`); // 4
console.log(`a = ${a} - прибавили единицу в примере 1 и примере 3`); // 3
console.log(`b = ${b} - прибавили единицу в примере 2 и примере 4`); // 3

/*
2. Чему будет равен x в примере ниже ?
var a = 2;
var x = 1 + (a *= 2);
*/

console.log('Пример 2');

var a = 2,
    x = 1 + (a *= 2);
console.log(`x = ${x}`); // x = 5

/*
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
*/

console.log('Пример 3');

var a = 3,
    b = 6;

function calc(a, b) {
    if (a >= 0 && b >= 0) {
        console.log(`a - b = ${a - b}`);
    } else if (a < 0 && b < 0) {
        console.log(`a * b = ${a * b}`);
    } else if (a > 0 && b < 0 || a < 0 && b > 0) {
        console.log(`a + b = ${a + b}`);
    }
}

calc(a, b);

/*
4. Присвоить переменной а значение в промежутке[0..15].С помощью оператора switch организовать вывод чисел от 0 до 15. 
Дополнительное задание. Сделайте решение вторым способом, используя рекурсию.
*/

console.log('Пример 4.1 - метод SWITCH');

var x = parseInt(Math.random() * 15);

switch (x) {
    case 0:
        console.log('Ваше число - 0');

    case 1:
        console.log('Ваше число - 1');

    case 2:
        console.log('Ваше число - 2');

    case 3:
        console.log('Ваше число - 3');

    case 4:
        console.log('Ваше число - 4');

    case 5:
        console.log('Ваше число - 5');

    case 6:
        console.log('Ваше число - 6');

    case 7:
        console.log('Ваше число - 7');

    case 8:
        console.log('Ваше число - 8');

    case 9:
        console.log('Ваше число - 9');

    case 10:
        console.log('Ваше число - 10');

    case 11:
        console.log('Ваше число - 11');

    case 12:
        console.log('Ваше число - 12');

    case 13:
        console.log('Ваше число - 13');

    case 14:
        console.log('Ваше число - 14');

    case 15:
        console.log('Ваше число - 15');

    default:
        break;
}

console.log('Пример 4.2 - метод рекурсии');

function recursion(x) {
    console.log(x);
    if (x >= 15) {
        return x;
    };
    recursion(++x);
}

recursion(x);

/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.Обязательно использовать оператор return.
*/

console.log('Пример 5 (смотреть код)');

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function prod(a, b) {
    return a * b;
}

function quotient(a, b) {
    return a / b;
}

/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции.В зависимости от переданного значения операции выполнить одну из арифметических операций(использовать функции из пункта 5) и вернуть полученное значение(использовать switch).
*/

console.log('Пример 6');

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return sum(arg1, arg2);

        case '-':
            return diff(arg1, arg2);

        case '*':
            return prod(arg1, arg2);

        case '/':
            return quotient(arg1, arg2);

        default:
            return 'Error!';
    }
}

console.log(mathOperation(4, 2, '+'));
console.log(mathOperation(4, 2, '-'));
console.log(mathOperation(4, 2, '*'));
console.log(mathOperation(4, 2, '/'));
console.log(mathOperation(4, 2, '='));

/*
7) * Сравнить null и 0. Попробуйте объяснить результат.
*/

console.log('Пример 7');

console.log(`null > 0; // false - null будет преобразовано в +0, а 0 останется самим собой.`);
console.log(`null == 0; // false - Значение +0 равно 0, в результате алгоритм возвращает false`);
console.log(`null >= 0; // true -  С точки зрения математики, если у нас есть два числа, x и y, и если x не меньше, чем y, тогда x должно быть больше чем y или равно ему. Данный оператор работает именно так для того, чтобы оптимизировать вычисления`);

/*
8) * С помощью рекурсии организовать функцию возведения числа в степень.Формат: function power(val, pow), где val – заданное число, pow – степень.
*/

console.log('Пример 8');

function power(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}

console.log(power(4, 2));