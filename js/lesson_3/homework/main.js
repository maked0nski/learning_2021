// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let arr1 = [5,8,6,48,25];
// console.log(arr1);
// let arr2 = ['Home','Street','Bolt','58','false'];
// console.log(arr2);
// let arr3 = ['Home','Street','Bolt',58, false];
// console.log(arr3);

//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let emplyArr = [];
// emplyArr[0]= 1;
// emplyArr[1]= 'Demon';
// emplyArr[2]= true;
// console.log(emplyArr);
// for (const emplyArrElement of emplyArr) {
//     console.log(emplyArrElement);
// }

let str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consectetur consequatur dolores in libero minima molestiae necessitatibus odio quo vel!';
let newArr = str.split(' ')

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let block = document.createElement('div');
for (let i = 0; i < 11; i++) {
    let word = document.createElement('div');
    word.innerText = newArr[i];
    block.appendChild(word);
}
document.body.appendChild(block)


for (let i = 0; i < 11; i++) {
    document.write(`<div>${newArr[i]}</div>`);
}


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>index arrey - ${i}, word - ${newArr[i]} </div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let c = 0
while (c < newArr.length) {
    document.write(`<h1>${newArr[c]} </h1>`);
    c++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
c = 0
while (c < newArr.length) {
    document.write(`<h1>${newArr[c]} in index arrey - ${c} </h1>`);
    c++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of arr4) {
    console.log(number);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr5 = ['один', 'два', 'три', 'чотири', "п'ять", 'шість', 'сім', 'вісім', "дев'ять", 'десять']
for (const arr5Key in arr5) {
    console.log(arr5[arr5Key]);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr6 = ['один', true, 'три', 4, false, 6, 'сім', 8, "дев'ять", true]
for (let i = 0; i < arr6.length; i++) {
    console.log(arr6[i]);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (const arr6Element of arr6) {
    if (typeof arr6Element === "boolean") {
        console.log(arr6Element);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
//  За допомогою if та typeof вивести тільки числові елементи
for (const arr6Element of arr6) {
    if (typeof arr6Element === "number") {
        console.log(arr6Element);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
//      За допомогою if та typeof вивести тільки рядкові елементи
//
for (const arr6Element of arr6) {
    if (typeof arr6Element === "string") {
        console.log(arr6Element);
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let arr7 = [];
arr7[0] = 1;
arr7[1] = true;
arr7[2] = 'true';
arr7[3] = false;
arr7[4] = 'false';
arr7[5] = 9;
arr7[6] = 40;
arr7[7] = 'string';
arr7[8] = false;
arr7[9] = 'ten';
for (const arr7Element of arr7) {
    console.log(arr7Element);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(i);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i < 100; i += 2) {
    console.log(i);
    document.write(i);
}

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(i);
    }
}
