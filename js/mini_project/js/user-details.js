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

let paramsString = document.location.search;
let searchParams = new URLSearchParams(paramsString);
let user_id = searchParams.get("user_id");

// let wraper = creareTag('div', undefined, 'wraper')
// let h1 = creareTag('h1', `Повна інформація про користувача Id - ${user_id}`)

let wraper = document.createElement('div');
wraper.id = 'wraper';
let h1 = document.createElement('h1');
h1.innerText = `Повна інформація про користувача Id - ${user_id}`;

wraper.append(h1);

fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)
    .then(response => response.json())
    .then(user => {
        // let wrapUserInfo = creareTag('div', undefined, 'wrapUsers');
        let wrapUserInfo = document.createElement('div');
        wrapUserInfo.id = 'wrapUsers';


        // let userId = creareTag('div', `User id: ${user.id}`, undefined, 'userID');
        let userId = document.createElement('div');
        userId.id = 'userID';
        userId.innerText = `User id: ${user.id}`;

        // let name = creareTag('div', `Name: ${user.name}`, undefined, 'name');
        let name = document.createElement('div');
        name.classList = 'name';
        name.innerText = `Name: ${user.name}`;

        // let username = creareTag('div', `User name: ${user.username}`, undefined, 'username');
        let username = document.createElement('div');
        username.classList = 'username';
        username.innerText = `User name: ${user.username}`;


        // let phone_a = creareTag('a', `Tel: ${user.phone}`);
        let phone_a = document.createElement('a');
        phone_a.innerText = `Tel: ${user.phone}`;
        phone_a.href = `Tel:${user.phone}`;


        // let phone = creareTag('div', undefined, undefined, 'phone');
        let phone = document.createElement('div');
        phone.classList = 'phone';
        phone.append(phone_a);

        // let email_a = creareTag('a', `E-mail: ${user.email}`);
        let email_a = document.createElement('a');
        email_a.innerText = `E-mail: ${user.email}`;
        email_a.href = `mail:${user.email}`;

        // let email = creareTag('div', undefined, undefined, 'email');
        let email = document.createElement('div');
        email.classList = 'email';
        email.append(email_a);

        // let website_a = creareTag('a', `www.${user.website}`);
        let website_a = document.createElement('a');
        website_a.innerText = `www.${user.website}`;
        website_a.href = `www.${user.website}`;

        // let website = creareTag('div', undefined, undefined, 'website');
        let website = document.createElement('div');
        website.classList = 'website';
        website.append(website_a);

        // let company = creareTag('div', `Company name: ${user.company.name}, Company catch phrase: ${user.company.catchPhrase}, Company bs: ${user.company.bs}`, undefined, 'company');
        let company = document.createElement('div');
        company.innerText = `Company name: ${user.company.name}, Company catch phrase: ${user.company.catchPhrase}, Company bs: ${user.company.bs}`;
        company.classList = 'company';



        // let addressBlock = creareTag('div', undefined, undefined, 'addressBlock');
        let addressBlock = document.createElement('div');
        addressBlock.classList = 'addressBlock';

        // let address_string = `City: ${user.address.city}, street: ${user.address.street}, suite:  ${user.address.suite}, zipcode: ${user.address.zipcode}`
        // let address = creareTag('div', address_string, undefined, 'address');
        let address = document.createElement('div');
        address.classList = 'address';
        address.innerText = `City: ${user.address.city}, street: ${user.address.street}, suite:  ${user.address.suite}, zipcode: ${user.address.zipcode}`;


        // let addressGeo = creareTag('div', undefined, undefined, 'addressGeo');
        let addressGeo = document.createElement('div');
        addressGeo.classList = 'addressGeo';

        // let mapP = creareTag('p', 'GEO координати каристувача:');
        let mapP = document.createElement('p');
        mapP.innerText = 'GEO координати каристувача:';

        // let mapDiv = creareTag('div', `lat = ${user.address.geo.lat}, lng = ${user.address.geo.lng}`, 'userMapGeo')
        let mapDiv = document.createElement('div');
        mapDiv.innerText = `lat = ${user.address.geo.lat}, lng = ${user.address.geo.lng}`;
        mapDiv.id = 'userMapGeo';

        addressGeo.append(mapP, mapDiv)
        addressBlock.append(address, addressGeo)

        // let btnPostUser = creareTag('button', 'Post of current user', 'postsUser');
        let btnPostUser = document.createElement('button');
        btnPostUser.innerText = 'Post of current user';
        btnPostUser.id = 'postsUser';


        btnPostUser.onclick = function () {

            fetch(`https://jsonplaceholder.typicode.com/users/${user_id}/posts`)
                .then(response => response.json())
                .then(posts => {

                    // let wrapTitlePost = creareTag('div', undefined, 'wrapTitlePost');
                    let wrapTitlePost = document.createElement('div');
                    wrapTitlePost.id = 'wrapTitlePost';

                    posts.forEach(post => {
                        // let wrapPost = creareTag('div', undefined, undefined, 'wrapPost');
                        let wrapPost = document.createElement('div');
                        wrapPost.classList = 'wrapPost';

                        // let titlePost = creareTag('div', `${post.title}`, undefined, 'titlePost');
                        let titlePost = document.createElement('div');
                        titlePost.classList = 'titlePost';
                        titlePost.innerText = `${post.title}`;

                        // let btnPostDetails = creareTag('button', 'Детальніше про даний пост');
                        let btnPostDetails = document.createElement('button');
                        btnPostDetails.innerText = 'Детальніше про даний пост';

                        btnPostDetails.onclick = () => window.location = `post-details.html?post_id=${post.id}&&username=${user.name}`;
                        wrapPost.append(titlePost, btnPostDetails)
                        wrapTitlePost.append(wrapPost);
                    })

                    wraper.append(wrapTitlePost);
                })
        }
        wrapUserInfo.append(userId, name, username, phone, email, website, company, addressBlock, btnPostUser);
        wraper.append(wrapUserInfo);
    })

document.body.append(wraper)

