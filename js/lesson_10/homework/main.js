// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".
//
function hidenBlock(id) {
    document.getElementById(id).classList.toggle("hiden")
}

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// function hidenBlock(id) {
//     document.getElementById(id).classList.toggle("hiden")
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
// чи меньше він ніж 18, та повідомити про це користувача
//
function verifyAge() {
    let x = +document.getElementById('inputAge').value
    let veryfiSpan = document.getElementById('verifyAgeSpan')
    if (x >= 18) {
        veryfiSpan.innerText = `Вам 18+`
        veryfiSpan.classList = 'green'
    } else {
        veryfiSpan.innerText = `Цей контент не для Вас. Пий молоко!`
        veryfiSpan.classList = 'red'
    }
}


// - Создайте меню, которое раскрывается/сворачивается при клике
//
let menuElement = document.getElementById('menu');
let titleElement = document.getElementById('menuTitle');

titleElement.onclick = function () {
    menuElement.classList.toggle('hiden');
};


//
// - Создать список комментариев , пример объекта коментария -
let comment = [
    {title: 'lorem1', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem2', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem3', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem4', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem5', body: 'lorem ipsum dolo sit ameti'},
]

//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let wrapDiv = document.createElement('div');
for (const commentElement of comment) {
    let commentElementDiv = document.createElement('div');
    let title = document.createElement('h3');
    let body = document.createElement('div');
    let btn = document.createElement('button');
    let hr = document.createElement('hr');
    title.innerText = commentElement.title;
    body.innerText = commentElement.body;
    btn.innerText = 'Приховати'
    btn.onclick = () => {
        body.classList.toggle('hiden');
    }

    commentElementDiv.append(title, body, btn, hr)
    wrapDiv.append(commentElementDiv)
}
document.body.append(wrapDiv)





