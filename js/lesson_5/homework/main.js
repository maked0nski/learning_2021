// Всі функції повинні бути описані стрілочним типом, та selfinvoke!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

// стрілочним типом
let areaRectangle = (a, b) => a * b;
console.log(areaRectangle(14, 5));

// Self-Invoking Functions
(function (a, b) {
    console.log(a * b)
}(5, 8));


// - створити функцію яка обчислює та повертає площу кола
// стрілочним типом
let areaCircle = radius => Math.PI * Math.pow(radius, 2);
console.log(areaCircle(6));

// Self-Invoking Functions

(function (radius) {
    console.log(`площа кола ${Math.PI * Math.pow(radius, 2)}`)
}(6));

// - створити функцію яка обчислює та повертає площу циліндру 2ПRH
// стрілочним типом
let cilinderArea = (radius, height) => 2 * Math.PI * radius * height;
console.log(`Площа циліндра ${cilinderArea(5, 9)}`);

// Self-Invoking Functions
(function (radius, height) {
    console.log(`Self-Invoking Function Проща циліндра ${2 * Math.PI * radius * height}`);
}(5, 9));


// - створити функцію яка приймає масив та виводить кожен його елемент
// стрілочним типом
let nextArr1 = [100, '', 'lorem', 250, 'cool', 50, 168, true, 120, false, 345, 188];
let iterArr = arr => {
    for (let arrElement of arr) {
        console.log(arrElement);
    }
    console.log('========')
}
iterArr(nextArr1);

// Self-Invoking Functions
(function (arr) {
    for (let arrElement of arr) {
        console.log(arrElement);
    }
    console.log('========')
}(nextArr1))


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// стрілочним типом
let textInP = text => `<p>${text}</p>`
document.write(textInP('Ехал Грека через реку, Видит Грека – в реке рак. Сунул Грека руку в реку, Рак за руку Греку ЦАП !'));

// Self-Invoking Functions
(function (text) {
    document.write(`<p>${text}</p>`)
}('Раки сразу лезут в драки, Грустно в реках жить без драк. Раки злые, как собаки, Рад при виде Греки рак.'));


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// стрілочним типом
let listTag = text => `<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`

document.write(listTag('Текст li стрілочним типом'));

// Self-Invoking Functions
(function (text) {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}('Текст li Self-Invoking Functions'));


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// стрілочним типом
let listTagNumber = (text, NumberLi) => {
    let tmp = `<ul>`;
    for (let i = 0; i < NumberLi; i++) {
        tmp += `<li>${text}</li>`
    }
    return tmp + `</ul>`
}

document.write(listTagNumber(`li text`, 2));

// Self-Invoking Functions


(function (text, NumberLi) {
    let tmp = ``;
    for (let i = 0; i < NumberLi; i++) {
        tmp += `<li>${text}</li>`
    }
    document.write(`<ul>${tmp}</ul>`);
}(`li text`, 2))

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
//
// стрілочним типом
let arrElementToList = arr =>{
    let tmp = ``;
    for (let arrElement of arr) {
        tmp += `<li>${arrElement}</li>`
    }
    document.write(`<ul>${tmp}</ul>`);
}
arrElementToList(nextArr1);

// Self-Invoking Functions
(function (arr) {
    let tmp = ``;
    for (let arrElement of arr) {
        tmp += `<li>${arrElement}</li>`
    }
    document.write(`<ul>${tmp}</ul>`);
}(nextArr1))


// - створити функцію яка приймає масив об'єктів з наступними полями
// id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

// стрілочним типом
let fuBlock = arr =>  {
    for (let arrElement of arr) {
        document.write(`<div class="block" style="border: 1px solid greenyellow; border-radius: 10px; margin: 10px; padding: 10px"><div class="id">User id - ${arrElement.id}</div><div class="name">User name - ${arrElement.name}</div>div class="age">User age - ${arrElement.age}</div></div>`);
    }
}
fuBlock(usersWithId);


// Self-Invoking Functions
    (function (arr) {
        for (let arrElement of arr) {
            document.write(`<div class="block" style="border: 1px solid greenyellow; border-radius: 10px; margin: 10px; padding: 10px"><div class="id">User id - ${arrElement.id}</div><div class="name">User name - ${arrElement.name}</div>div class="age">User age - ${arrElement.age}</div></div>`);
        }

    }(usersWithId));