// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні
// на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ
// всіх обраних на попередньому етапі.


let wrap = document.createElement('div');
for (const user of users) {
    let element = document.createElement('div');
    let button  = document.createElement('button')
    element.innerText = JSON.stringify(user)
    button.innerText = `Додати до улюблених`
    button.onclick = function (ev) {
        ev.preventDefault();
        let favoriteList = JSON.parse(localStorage.getItem('favorites')) ||  [];
        favoriteList.push(user);
        localStorage.setItem('favorites', JSON.stringify(favoriteList))
    }
    wrap.append(element);
    wrap.append(button);
}
document.body.append(wrap)
