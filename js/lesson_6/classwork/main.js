//
// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let namesValidator = (name) => {
    if (name.indexOf('..') !== -1) {
        return name.split('..').join(' ')
    } else if (name.indexOf('---') !== -1) {
        return name.split('---').join(' ')
    } else if (name.indexOf('__') !== -1) {
        return name.split('__').join(' ')
    }
}
console.log(namesValidator(n1))
console.log(namesValidator(n2))
console.log(namesValidator(n3))

//
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomIntNumber = (min = 0, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
};
let createNumArr = (lengthArr, randMin, randMax) => {
    let arr = []
    for (let i = 0; i < lengthArr; i++) {
        arr.push(randomIntNumber(randMin, randMax));
    }
    return arr
}


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

let arrSorted = createNumArr(10).sort((a, b) => a - b);
console.log(arrSorted);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let ArrFiltred = createNumArr(10).filter(value => value % 2 === 0)
console.log(ArrFiltred);


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let ArrString = createNumArr(10).map(value => value.toString())
console.log(ArrString);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.

function sortNums(direction) {
    switch (direction) {
        case 'ascending':
            return createNumArr(10).sort((a, b) => a - b)
        case 'descending':
            return createNumArr(10).sort((a, b) => b - a)
        default :
            return 'Ошибка в direction'
    }
}

console.log(sortNums('ascending'))
console.log(sortNums('asceding'))
console.log(sortNums('descending'))
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration))
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5))
//
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
//

function cutString(str, n) {
    let tmp = []
    for (let i = 0; i < str.length; i += 3) {
        tmp.push(str.substr(i, n))
    }
    return tmp
}

console.log(cutString('наслаждение', 3));  // [нас,лаж,ден,ие]
document.writeln(cutString('наслаждение', 3))  // [нас,лаж,ден,ие]
