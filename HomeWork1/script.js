'use strict';

/*
1. Задать температуру в градусах по Цельсию.
Вывести в alert соответствующую температуру в градусах по Фаренгейту.
Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию.
*/

var tc = +prompt(`Введите температуру в градусах по Цельсию (C°)`);
var tf = (9 / 5) * tc + 32;

alert(`Температура по Фаренгейту = ${tf}F°`);

/*
2. Работа с переменными.
Сделать обмен значений двух числовых переменных без использования третьей переменной 
a) Объявить две переменные: admin и name. Записать в name строку «Василий»; 
b) Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).
*/

var a = +prompt('Введите число А'),
    b = +prompt('Введите число В');
b = [a, a = b][0]; // ES5
// [a, b] = [b, a]; // ES6
alert(`Теперь А = ${a} \nВ = ${b}`);

var name = 'Василий';
var admin = name;

alert(`Admin = ${admin}`); // Василий

/*
3. Чему будет равно JS - выражение 1000 + "108" ?
*/

var sum = 1000 + '108';
alert(`Выражение 1000 + '108' = ${sum}`); // 1000108

/*
4. Самостоятельно разобраться с атрибутами тега script(async и defer).
*/

// a) Defer сообщает браузеру, что он должен продолжать обрабатывать страницу и загружать скрипт в фоновом режиме, а затем запустить этот скрипт, когда он загрузится.

// b) Async используется для того, чтобы указать браузеру, что скрипт может быть выполнен асинхронно. Атрибут доступен только для файлов, подключающихся внешне.Если внешний файл имеет этот атрибут, то он может быть загружен в то время как HTML - документ ещё парсится.Парсер будет приостановлен для выполнения скрипта, как только файл скрипта будет загружен.