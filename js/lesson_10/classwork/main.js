// - створити 2 форми  по 2 інпути в кожній. ствоирити
// кнопку при кліку на яку считується та виводиться на
// консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб уникнути
// перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та
// інпутам всі необхідні атрибути.

function getFormData() {
    for (const form of document.forms) {
        for (const formElement of form.elements) {
            console.log(formElement.value);
        }
    }
}


//
// - Створити 3 инпута та кнопку. Один визначає кількість
// рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується
//     і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

function createTable() {
    let tableDiv = document.createElement('table');
    tableDiv.setAttribute("border", "1px");
    tableDiv.id = 'table'
    let rows = +document.forms.tables.elements.row.value
    let columns = +document.forms.tables.elements.column.value
    let text = document.forms.tables.elements.text.value;
    for (let row = 0; row < rows; row++) {
        let tr = document.createElement('tr');
        for (let column = 0; column < columns; column++) {
            let td = document.createElement('td');
            td.innerText = text;
            tr.append(td)
        }
        tableDiv.append(tr)
    }
    document.body.append(tableDiv)
}


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
let mat = ['khv', 'ilhv', 'igij']

function checkMat() {
    let str = document.forms.checkMat.elements.stroka.value;
    let arr = str.split(' ')
    let divRezult = document.getElementById('divRezult')
    document.body.append(divRezult)
    for (const arrElement of arr) {
        if (mat.indexOf(arrElement) !== -1) {
            divRezult.innerText = 'Обнаружен матюк'
            divRezult.style.color = 'red'
        } else {
            divRezult.innerText = 'Матюк не  обнаружен'
            divRezult.style.color = 'green'
        }
    }
}


//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


//






