// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7,
// 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let h = 'hello';
let o = 'owu';
let s = 'com';
let u = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let flot1 = 3.14;
let flot2 = 2.7;
let num5 = 16;
let boul1 = true;
let boul2 = false;
let array = [h, o, s, u, num1, num2, num3, num4, flot1, flot2, num5, boul1, boul2]
// for (const i of array) {
//     console.log(i) ;
//     alert(i);
//     document.write(i + `<br/>`);
// }

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
h = 'home';
o = 'okten';
s = 'culler';
u = 'Ukraine';
num1 = 12;
num2 = 55;
num3 = -951;
num3 = 65;
flot1 = 9.12;
flot2 = 85.245;
num5 = 753;
boul1 = false;
boul2 = true;
array = [h, o, s, u, num1, num2, num3, num4, flot1, flot2, num5, boul1, boul2]
// for (const i of array) {
//     console.log(i) ;
//     alert(i);
//     document.write(i + `<br/>`);
// }

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName;
let middleName;
let lastName;
let age = 31;
firstName = 'Oleksandr';
middleName = 'Oleksandrovuch';
lastName = 'Makedonski';
let person = `${firstName} ${middleName} ${lastName}`;

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.

// firstName = prompt('enter your firstName');
// middleName = prompt('enter your middleName');
// lastName = prompt('enter your lastName');
// age = Number(prompt('enter your age'));


//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

document.write(`Вітаю ${firstName} ${middleName}. Тобі ${age} років`)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;
console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (c));

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 < 6 -> true
//     5 >= 6 -> false
//     5 > 6 -> false
//     5 <! 6 -> false
//     10 = 10 -> true
//     10 <= 10 -> true
//     10 != 10 -> false
//     10 <> 10 -> false
//     10 !== 10 -> false
//     123 === '123' -> false
//     123 == '123' -> true
//
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//     let z = 5;
//     document.write(str + z + "<br/>");         205
//     document.write(str - z + "<br/>");         15
//     document.write(str * "2" + "<br/>");           40
//     document.write(str / 2 + "<br/>");         10
