// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
let Arr = Array.from({length: 10}, () => Math.floor(Math.random() * 40));
// Скласти результат цих чисел в змінній result.
let result = 0;
for (const number of Arr) {
    result += number
}
// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// let book ={
//     name: 'Азбука',
//     pages: 32,
//     genre: 'наука'
// }
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
// let book ={
//     name: 'Азбука',
//     pages: 32,
//     genre: 'наука',
//     autor: 'Незнайка'
// }

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
let book = [
    {
        name: '451° по Фаренгейту',
        pages: 40,
        genre: 'Проза',
        autor: 'Рэй Брэдбери'
    },
    {
        name: 'Хроники Раздолбая',
        pages: 86,
        genre: 'Проза',
        autor: 'Санаев Павел'
    },
    {
        name: 'Мастер и Маргарита',
        pages: 103,
        genre: 'Мистика',
        autor: 'Михаил Булгаков'
    },
    {
        name: 'Волк с Уол',
        pages: 103,
        genre: 'Мистика',
        autor: 'Михаил Булгаков'
    }
]
// Вивести кожну книгу як окремий об'єкт
// console.log(book[0]);
// console.log(book[1]);
// console.log(book[2]);
// console.log(book[3]);
// for (const bookElement of book) {
//     console.log(bookElement);
// }
// for (const bookKey in book) {
//     console.log(book[bookKey]);
// }


// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = height * width
console.log(`площа прямокутника = ${s}`);
let task5 = document.createElement('div')
task5.innerText = `Площа прямокутника = ${s}м2`;
document.body.appendChild(task5);


// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let v = Math.PI * Math.pow(dC / 2, 2) * heightC;
console.log(`Об'єм циліндра = ${v}`);
let task6 = document.createElement('div')
task6.innerText = `Oб'єм циліндра = ${v}`;
document.body.appendChild(task6);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n,2)+m**2)
let task7 = document.createElement('div')
task7.innerText = `Гіпотенуза k за теоремою Піфагора = ${k}`;
document.body.appendChild(task7);