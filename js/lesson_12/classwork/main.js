// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться
//     в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => {
        let divPosts = document.createElement('div');
        divPosts.id = 'wrapTask';
        response.forEach((arrElement) => {
            let {id, userId, title, body} = arrElement

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
            tagBodyPost.innerHTML = `<span>Text: </span>${body}`;

            let detalButton = document.createElement('button');
            detalButton.innerText = 'All comments user'
            detalButton.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)
                    .then(response => response.json())
                    .then(value => {
                        // clear(commentsBlock)
                        let commentsDiv = document.createElement('div')
                        commentsDiv.id = 'commentsBlock';
                        let bnt_Сlose = document.createElement('button')
                        bntСlose.id = 'close'
                        bntСlose.innerText = 'Закрити'
                        bntСlose.onclick = () => clear('commentsBlock')
                        commentsDiv.append(bntСlose)
                        value.forEach(value => {


                            let comment = document.createElement('div');
                            comment.classList = 'commentbl'
                            let numberPost = document.createElement('h3');
                            numberPost.id = 'numberPost'
                            numberPost.innerText = `Повідомлення № ${value.id}`;
                            let userName = document.createElement('div');
                            userName.classList = 'name'
                            userName.innerText = `Ім'я - ${value.name}`;
                            let email = document.createElement('div');
                            email.innerText = `E-mail - ${value.email}`;
                            let body = document.createElement('div');
                            body.classList = 'textBody'
                            body.innerHTML = `<span>Текст:</span> ${value.body}`;

                            comment.append(numberPost, userName, email, body)
                            commentsDiv.append(comment)


                        })
                        document.body.append(commentsDiv)

                    })
            }

            divBlock.append(p, tagTitle, tagBodyPost, detalButton)
            divPosts.append(divBlock)
        })
        document.body.append(divPosts)
    })


function clear(id) {
    if (document.getElementById(id)) {
        document.getElementById(id).remove()
    }
}