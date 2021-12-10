let pop =document.createElement('div');
pop.id = 'pop';
let task1= document.createElement('button');
task1.innerText = 'Розібрати пости';
task1.onclick = ()=>getPosts();
pop.append(task1);
let task2= document.createElement('button');
task2.innerText = 'Розібрати коменти';
task2.onclick = ()=>getComments();
pop.append(task1, task2);
document.body.append(pop);

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            clear()
                let divPosts = document.createElement('div');
                divPosts.id = 'wrapTask';

                json.forEach((value) => {
                    // console.log(value);
                    let {userId, id, title, body} = value;
                    let divBlock = document.createElement('div');
                    divBlock.classList = 'postBlock';
                    let p = document.createElement('p');
                    p.classList = 'pUserId';
                    p.innerText = `userId - ${userId}, id post - ${id}`
                    let tagTitle = document.createElement('h3');
                    tagTitle.classList = 'title';
                    tagTitle.innerHTML = `<h6>Title:</h6>${title}`
                    let tagBodyPost = document.createElement('div');
                    tagBodyPost.classList = 'bodyPost';
                    tagBodyPost.innerHTML = `<h6>Text:</h6>${body}`
                    divBlock.append(p,tagTitle,tagBodyPost)
                    divPosts.append(divBlock)
                })
                document.body.append(divPosts)
            }
        )
}

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ
// як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

function getComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(value =>{
            clear()
            let wrapTask = document.createElement('div')
            wrapTask.id = 'wrapTask'
            value.forEach((value)=> {
                let {postId, id, name, email,body} = value;
                let divBlock = document.createElement('div');
                divBlock.classList = 'postBlock';
                let h4 = document.createElement('h4');
                h4.classList = 'postId';
                h4.innerHTML = `User name - ${name} <br> id post - ${postId}, masage id - ${id}`
                let userEmail = document.createElement('p');
                userEmail.classList = 'email';
                userEmail.innerHTML = `User e-mail: ${email}`
                let tagBodyPost = document.createElement('div');
                tagBodyPost.classList = 'bodyPost';
                tagBodyPost.innerHTML = `<h6>Text:</h6>${body}`
                divBlock.append(h4,userEmail,tagBodyPost)
                wrapTask.append(divBlock)
            })
            document.body.append(wrapTask)
        })
}




function clear() {
    if(document.getElementById('wrapTask')){
        document.getElementById('wrapTask').remove()
    }
}