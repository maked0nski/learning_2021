// // - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// //     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// //     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// //
//
// document.body.onclick = function (ev) {
//     console.log(`Ви вибрали елемент з тегом ${ev.target.localName}, id: ${ev.target.id}, список класов: ${ev.target.classList.value}, Ширина*Висота блока : ${ev.target.offsetWidth}px * ${ev.target.offsetHeight}px`)
// }


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в
//     форматі висота*ширина
//

// document.body.onclick = function (ev) {
//     let pop = document.createElement('div');
//     pop.id = 'popUp'
//     let popContent = document.createElement('div');
//     pop.append(popContent);
//     pop.style.width = '100%';
//     pop.style.minHeight = '100%';
//     pop.style.backgroundColor = 'rgba(0,0,0,0.5)';
//     pop.style.overflow = 'hidden';
//     pop.style.position = 'fixed';
//     pop.style.top = '0px';
//     popContent.style.margin = '40px auto 0px auto';
//     popContent.style.width = '250px';
//     popContent.style.minHeight = '50px';
//     popContent.style.padding = '10px';
//     popContent.style.backgroundColor = '#c5c5c5';
//     popContent.style.borderRadius = '5px';
//     popContent.innerHTML = `Ви вибрали елемент з тегом ${ev.target.localName},</br> id: ${ev.target.id},</br> список класов: ${ev.target.classList.value},</br> Розміри блока : ${ev.target.offsetWidth}px * ${ev.target.offsetHeight}px`;
//     document.body.append(pop)
//   }


// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать
// как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ



let element = document.forms.userList.elements;
let statusChek = {status: 0, age: 0, city: 0}

function filterArr() {
    let newArr = [];
    if (statusChek.status) {
        newArr = usersWithAddress.filter(value => {
            return !value.status
        })
    }
    if (newArr.length) {
        if (statusChek.age) {
            newArr = newArr.filter(value => {
                return value.age >= 29
            })
        }
    } else if (statusChek.age) {
        newArr = usersWithAddress.filter(value => {
            return value.age >= 29
        })
    }
    if (newArr.length) {
        if (statusChek.city) {
            newArr = newArr.filter(value => {
                return value.address.city === 'Kyiv'
            })
        }
    } else if (statusChek.city) {
        newArr = usersWithAddress.filter(value => {
            return value.address.city === 'Kyiv'
        })
    }

    if (newArr.length) {
        return newArr
    } else return usersWithAddress
}


function statusCheker() {
    let x = document.forms.userList.elements;
    for (const Key in statusChek) {
        statusChek[Key] = x[Key].checked
    }
}

let formId = document.getElementById('userList')
formId.addEventListener('change', ()=>{
    statusCheker()
    console.log(filterArr());
})


//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан



