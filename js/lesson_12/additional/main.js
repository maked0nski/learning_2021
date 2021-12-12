// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let usersWrap = document.createElement('div');
        usersWrap.id = 'usersWrap'
        users.forEach(user => {
            let block = document.createElement('div')
            block.classList = 'block'
            let id = document.createElement('div')
            id.innerText = user.id;
            let name = document.createElement('div')
            name.innerText = user.name;
            let username = document.createElement('div')
            username.innerText = user.username
            let phone = document.createElement('div')
            phone.innerHTML = `<a href="tel:${user.phone}">${user.phone}</a>`
            let website = document.createElement('div')
            website.innerHTML = `<a href="${user.website}">${user.website}</a>`
            let email = document.createElement('div')
            email.innerHTML = `<a href="mailto:${user.email}">${user.email}</a>`;
            let address = document.createElement('div')
            address.innerText = `City - ${user.address.city}, street ${user.address.street}, suite - ${user.address.suite}`;
            let company = document.createElement('div')
            company.innerText = `Work: company name- ${user.company.name}, catchPhrase- ${user.company.catchPhrase}`;

            let buttonPost = document.createElement('button')
            buttonPost.innerHTML = 'пости поточного юзера'
            buttonPost.onclick = () => {

                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(posts => {
                        let postWrap = document.createElement('div');
                        postWrap.id = 'postWrap';
                        let bntX = document.createElement('button')
                        bntX.id = 'close'
                        bntX.innerText = 'Закрити'
                        bntX.onclick = () => postWrap.remove()
                        postWrap.append(bntX)

                        posts.forEach((post) => {
                            if (post.userId === user.id) {
                                let postBlock = document.createElement('div');
                                postBlock.classList = 'block'
                                let userId = document.createElement('div')
                                userId.innerText = post.userId;
                                let postId = document.createElement('div')
                                postId.innerText = post.id;
                                let postTitle = document.createElement('div')
                                postTitle.innerText = post.title;
                                let postBody = document.createElement('div')
                                postBody.innerText = post.body;
                                let commentButton = document.createElement('button');
                                commentButton.innerText = 'всі коментарі поточного поста'

                                commentButton.onclick = () => {
                                    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                        .then(response => response.json())
                                        .then(comments => {
                                            // document.getElementById(postWrap).remove()
                                            postWrap.innerText='';
                                            let bntX = document.createElement('button')
                                            bntX.id = 'close'
                                            bntX.innerText = 'Закрити'
                                            bntX.onclick = () => postWrap.remove()
                                            postWrap.append(bntX)
                                            comments.forEach(comment =>{
                                                let commentBlock = document.createElement('div');
                                                commentBlock.classList = 'block'
                                                let numberPostId = document.createElement('div');
                                                numberPostId.innerText = `ID Повідомлення № ${comment.postId}`;

                                                let numberPost = document.createElement('div');
                                                numberPost.innerText = `Комментарій № ${comment.id}`;

                                                let userName = document.createElement('div');
                                                userName.innerText = `Ім'я - ${comment.name}`;

                                                let email = document.createElement('div');
                                                email.innerHTML = `<a href="mailto:${comment.email}">${comment.email}</a>`;

                                                let body = document.createElement('div');
                                                body.innerHTML = `<span>Текст:</span> ${comment.body}`;

                                                commentBlock.append(numberPostId, numberPost, userName, email, body)
                                                postWrap.append(commentBlock)
                                            })

                                        })
                                }

                                postBlock.append(userId, postId, postTitle, postBody, commentButton)
                                postWrap.append(postBlock)
                            }
                        })

                        document.body.append(postWrap)
                    })
            }

            block.append(id, name, username, phone, website, email, address, company, buttonPost)
            usersWrap.append(block)
        })


        document.body.append(usersWrap);


    })