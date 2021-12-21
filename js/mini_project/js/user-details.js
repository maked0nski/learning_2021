// TODO

// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.

function creareTag(tag = 'div', innerText = undefined, id = undefined, clas = undefined) {
    let newTag = document.createElement(tag);
    if (innerText) {
        newTag.innerText = innerText;
    }
    if (id) {
        newTag.id = id;
    }
    if (clas) {
        newTag.classList = clas
    }

    return newTag;
}

// function getUserPosts(USER_ID) {
//     fetch(`https://jsonplaceholder.typicode.com/users/${USER_ID}/posts`)
//         .then(response => response.json())
//         .then(posts => {
//             console.log(posts)
//             let wrapTitlePost = creareTag('div', undefined, 'wrapTitlePost')
//             posts.forEach(post => {
//                 let titlePost = creareTag('div', `${post.title}`, undefined, 'titlePost')
//                 let btnPostDetails = creareTag('button', 'Детальніше про даний пост')
//                 btnPostDetails.onclick = () => window.location = `post-details.html?user_id=${post.id}`
//                 wrapTitlePost.append(titlePost, btnPostDetails)
//             })
//             document.body.append(wrapTitlePost)
//         })
// }

let paramsString = document.location.search;
let searchParams = new URLSearchParams(paramsString);
let user_id = searchParams.get("user_id");

let wraper = creareTag('div', undefined, 'wraper')
let h1 = creareTag('h1', `Повна інформація про користувача Id - ${user_id}`)


wraper.append(h1)

fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)
    .then(response => response.json())
    .then(user => {
        let wrapUserInfo = creareTag('div', undefined, 'wrapUsers');

        console.log(user)

        let userId = creareTag('div', `User id: ${user.id}`, undefined, 'userID');
        let name = creareTag('div', `Name: ${user.name}`, undefined, 'name');
        let username = creareTag('div', `User name: ${user.username}`, undefined, 'username');

        let phone_a = creareTag('a', `Tel: ${user.phone}`);
        phone_a.href = `Tel:${user.phone}`
        let phone = creareTag('div', undefined, undefined, 'phone');
        phone.append(phone_a)

        let email_a = creareTag('a', `E-mail: ${user.email}`);
        email_a.href = `mail:${user.email}`
        let email = creareTag('div', undefined, undefined, 'email');
        email.append(email_a)

        let website_a = creareTag('a', `www.${user.website}`);
        website_a.href = `www.${user.website}`
        let website = creareTag('div', undefined, undefined, 'website');
        website.append(website_a)

        let company = creareTag('div', `Company name: ${user.company.name}, Company catch phrase: ${user.company.catchPhrase}, Company bs: ${user.company.bs}`, undefined, 'company');

        let addressBlock = creareTag('div', undefined, undefined, 'addressBlock');
        let address_string = `City: ${user.address.city}, street: ${user.address.street}, suite:  ${user.address.suite}, zipcode: ${user.address.zipcode}`
        let address = creareTag('div', address_string, undefined, 'address');

        let addressGeo = creareTag('div', undefined, undefined, 'addressGeo');
        let mapP = creareTag('p', 'GEO координати каристувача');
        let mapDiv = creareTag('div', `lat = ${user.address.geo.lat}, lng = ${user.address.geo.lng}`, 'userMapGeo')

        addressGeo.append(mapP, mapDiv)
        addressBlock.append(address, addressGeo)

        let btnPostUser = creareTag('button', 'Post of current user', 'postsUser');
        btnPostUser.onclick = function () {

            fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/posts`)
                .then(response => response.json())
                .then(posts => {

                    let wrapTitlePost = creareTag('div', undefined, 'wrapTitlePost');

                    posts.forEach(post => {
                        let titlePost = creareTag('div', `${post.title}`, undefined, 'titlePost');
                        let btnPostDetails = creareTag('button', 'Детальніше про даний пост');

                        btnPostDetails.onclick = () => window.location = `post-details.html?post_id=${post.id}&&username=${user.name}`;
                        wrapTitlePost.append(titlePost, btnPostDetails);
                    })

                    document.body.append(wrapTitlePost);
                })
        }
        wrapUserInfo.append(userId, name, username, phone, email, website, company, addressBlock, btnPostUser);
        wraper.append(wrapUserInfo);
    })

document.body.append(wraper)

