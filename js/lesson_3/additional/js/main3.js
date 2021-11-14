// 1. Створити пустий масив та :
let arr = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
let i = 0;
// while (arr.length < 50) {
//     if (i % 2 == 0) {
//         arr.push(i)
//     }
//     i++
// }
// console.log(arr);
//     b. заповнити його 50 непарними числами за допомоги циклу.
// while (arr.length < 50) {
//     if (i % 2 !== 0) {
//         arr.push(i)
//     }
//     i++
// }
// console.log(arr);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
function Random() {
    return Math.floor(Math.random() * 100) + 1;
}

function RandomMinMax(a = 1, b = 10) {
    return Math.floor(Math.random() * (b - a)) + a;
}

while (arr.length < 50) {
    arr.push(Random());
    i++
}
// console.log(arr);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
while (arr.length < 20) {
    arr.push(RandomMinMax(8, 732));
    i++
}
console.log(arr);
// 2. Вивести за допомогою console.log кожен третій елемен
for (let j = 0; j < arr.length; j += 3) {
    console.log(arr[j])
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let j = 0; j < arr.length; j += 3) {
    if (arr[j] % 2 === 0) {
        console.log(arr[j])
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newArr = []
for (let j = 0; j < arr.length; j += 3) {
    if (arr[j] % 2 === 0) {
        newArr.push(arr[j])
        console.log(arr[j])
    }
}
console.log(newArr)
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
console.log(arr)
for (let j = 0; j < arr.length; j++) {
    if (arr[j + 1] % 2 === 0) {
        console.log(arr[j])
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
let chek = [100, 250, 50, 168, 120, 345, 188];
let k = 0;
for (let number of chek) {
    k += number;
}
console.log(`середній чек - ${k / chek.length}`)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let nextArr = [];
for (let number of chek) {
    nextArr.push(number * 5);
}
console.log(nextArr);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив.
//
let nextArr1 = [100, '', 'lorem', 250, 'cool', 50, 168, true, 120, false, 345, 188];
let nextArr2 = [];
for (let nextArrElement of nextArr1) {
    if (typeof (nextArrElement) === "number") {
        nextArr2.push(nextArrElement)
    }
}
console.log(nextArr2);

//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
for (let i = 0; i < usersWithId.length; i++) {
    usersWithId[i].address = citiesWithId[citiesWithId.findIndex(arr => arr.user_id === usersWithId[i].id)]
}

//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr10 = []
while (arr10.length < 10) {
    arr10.push(RandomMinMax(0, 100));
    i++;
}
console.log(`створений масив ${arr10}. треба вивести парні`);
for (let arr10Element of arr10) {
    if (arr10Element % 2 === 0) (console.log(arr10Element));
}

//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
let arr10New   =[];
for (const arr10NewElement of arr10) {
    arr10New.push(arr10NewElement)
}
console.log(`Створений новий масив , за допомогою цикла ${arr10New}`);

//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arr9= [ 'a', 'b', 'c'];
let NextWord = "";
for (let j = 0; j < arr9.length ; j++) {
    NextWord += arr9[j];
}
console.log(NextWord);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
NextWord = "";
let ell =0;
while (ell<arr9.length){
    NextWord += arr9[ell]
    ell++
}
console.log(NextWord);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
NextWord = "";
for (let nextWordElement of arr9) {
    NextWord += nextWordElement
}
console.log(NextWord);
