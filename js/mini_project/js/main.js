// TODO
//
// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на
// страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
//
//

//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user, post, comment визуализировать, так, что бы
// было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)


// function creareTag(tag = 'div', innerText = undefined, id = undefined, clas = undefined) {
//     let newTag = document.createElement(tag);
//     if (innerText) {
//         newTag.innerText = innerText;
//     }
//     if (id) {
//         newTag.id = id;
//     }
//     if (clas) {
//         newTag.classList = clas
//     }
//
//     return newTag;
// }


// let wraper = creareTag('div', undefined, 'wraper')'
// let h1 = creareTag('h1', 'Список користувачів')

let wraper = document.createElement('div')
wraper.id = 'wraper'
let h1 = document.createElement('h1')
h1.innerText = 'Список користувачів'


wraper.append(h1)
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {

        // let wrapUsers = creareTag('div', undefined, 'wrapUsers')
        let wrapUsers = document.createElement('div')
        wrapUsers.id = 'wrapUsers'

        users.forEach(user => {
            // let wrapUser = creareTag('div', undefined, undefined, 'wrapUser')
            let wrapUser = document.createElement('div')
            wrapUser.classList = 'wrapUser'

            // let userId = creareTag('div', `User ID : ${user.id}`, undefined, 'userID')
            let userId = document.createElement('div')
            userId.innerText = `User ID : ${user.id}`
            userId.classList = 'userId'

            // let userName = creareTag('div', `User name : ${user.name}`, undefined, 'userName')
            let userName = document.createElement('div')
            userName.innerText = `User name : ${user.name}`
            userName.classList = 'userName'

            // let userButton = creareTag('button', 'Детальна інформація про користувача', 'userButton')
            let userButton = document.createElement('button')
            userButton.innerText = 'Детальна інформація про користувача'
            userButton.id = 'userButton'

            userButton.onclick = () => window.location = `user-details.html?user_id=${user.id}`
            wrapUser.append(userId, userName, userButton)
            wrapUsers.append(wrapUser)
        })

        wraper.append(wrapUsers)
    })

document.body.append(wraper)