// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює класс тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
document.getElementById('main_header').id = 'mon-year'

// b) робить шириниу елементу ul 400px
document.getElementsByTagName('ul')[0].style.width = '400px'

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let classLinkList = document.getElementsByClassName('linkList');
for (const classLinkListElement of classLinkList) {
    classLinkListElement.style.width = '50%'
}

// d) отримує текст який зберігається в елементі з класом listElement2
let ArrListElement2 = document.getElementsByClassName('listElement2')
for (const classLinkListElement of ArrListElement2) {
    console.log(classLinkListElement.innerText);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
let arrLi = document.getElementsByTagName('li')
for (const arrLiElement of arrLi) {
    arrLiElement.style.backgroundColor = 'grey'
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let arrA = document.getElementsByTagName('a')
for (const arrAElement of arrA) {
    arrAElement.classList.add('anchor')
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
// let arrA = document.getElementsByTagName('a')
for (const arrAElement of arrA) {
    if (arrAElement.innerText.includes('link3')){
        arrAElement.style.fontSize = '40px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let arrA = document.getElementsByTagName('a')
for (const arrAElement of arrA) {
    arrAElement.classList.add(`element_${arrAElement.innerText.slice(0,arrAElement.innerText.length-1)}`)
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let clasSubHeader = document.getElementsByClassName('sub-header')
// for (const clasSubHeaderElement of clasSubHeader) {
//     clasSubHeaderElement.style.backgroundColor = prompt('Enter Color background')
// }

// // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// for (const clasSubHeaderElement of clasSubHeader) {
//     if (clasSubHeaderElement.innerText.includes('content 2 segment')){
//         clasSubHeaderElement.style.color = prompt('Enter Color text')
//     }
// }


// // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// for (let elementsByClassNameElement of document.getElementsByClassName('content_1')) {
//     elementsByClassNameElement.innerText = prompt('Enter new text')
// }


// l) отримати елементи p та змінити їм padding на 20px
let ArrP = document.getElementsByTagName('p')
for (const arrPElement of ArrP) {
    arrPElement.style.padding = '20px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
for (let elementsByClassNameElement of document.getElementsByClassName('text2')) {

    elementsByClassNameElement.innerText = 'sep-2021'
}
