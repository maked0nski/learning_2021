// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);
let Strlength = str => {
    console.log(str.length);
}
Strlength('javascript is cool')


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let strToUppercase = str => {
    return str.toUpperCase()
};

console.log(strToUppercase('hello world'));
console.log(strToUppercase('lorem ipsum'));
console.log(strToUppercase('javascript is cool'));


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let strToLowerCase = str => {
    return str.toLowerCase()
};

console.log(strToLowerCase('HELLO WORLD'));
console.log(strToLowerCase('LOREM IPSUM'));
console.log(strToLowerCase('JAVASCRIPT IS COOL'));




// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let cleanString = str => {
    return str.trim()
}
console.log(cleanString(' dirty string   '));


//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
function stringToarray(str) {
    return str.split(' ');
}

let str = 'Каждый охотник желает знать';
let arr = stringToarray(str);
document.writeln(`<p>${arr}</p>`); // ['Каждый', 'охотник', 'желает', 'знать']


//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
function delete_characters(str, length) {
    return str.slice(0, length)
}

document.writeln(`<p>${delete_characters(str, 7)}</p>`); // Каждый


//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент
// і вставляє тире (-) між словами. При цьому всі символи рядка необхідно
// перевести у верхній регістр.
function insert_dash(str) {
    return str.replaceAll(' ', '-').toUpperCase();
}

let str1 = "HTML JavaScript PHP";
document.writeln(insert_dash(str1));



//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр
// першого символу рядка з нижнього регістру у верхній.
//
function firstLetterCapitalized(str) {
    return str.replace(str[0], strToUppercase(str[0]))
}
document.writeln(`<p>${firstLetterCapitalized('функцію приймає рядок як аргумент і перетворює регістр\n' +
    ' першого символу рядка з нижнього регістру у верхній')}</p>`);


//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне
// слово починається з великої літери.


//  щось воно занадто закручено вийшло? може э простіший варіант???
function capitalize(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(value => value.replace(value[0], value[0].toUpperCase()))
        .join(' ');
}
console.log(capitalize(str))