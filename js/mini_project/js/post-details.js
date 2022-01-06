// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//


let paramString = document.location.search;
let searchParam = new URLSearchParams(paramString);
let post_id = searchParam.get('post_id');
let username = searchParam.get('username');


fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    .then(response => response.json())
    .then(post => {

        let wraper = document.createElement('div');
        wraper.id = 'wraper';


        let h1 = document.createElement('h1');
        h1.innerText = `Пост ID - ${post.id}  користувача "${username}" із id: ${post.userId}`;


        let postWraper = document.createElement('div');
        postWraper.id = 'postWraper';


        let postTitle = document.createElement('div');
        postTitle.classList = 'postTitle';
        postTitle.innerHTML = `<span> Title:  </span> ${post.title}`;


        let postBody = document.createElement('div');
        postBody.classList = 'postBody';
        postBody.innerHTML = `<span> Body:  </span> ${post.body}`;


        postWraper.append(h1, postTitle, postBody);

        fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`)
            .then(response => response.json())
            .then(comments => {

                let commentsWraper = document.createElement('div');
                commentsWraper.id = 'commentsWraper';


                comments.forEach(comment => {
                    let wraperComments = document.createElement('div');
                    wraperComments.classList = 'wraperComments';


                    let commentId = document.createElement('div');
                    commentId.classList = 'commentId';
                    commentId.innerText = `ID : ${comment.id}`;


                    let commentName = document.createElement('div');
                    commentName.classList = 'commentName';
                    commentName.innerText = `Name : ${comment.name}`;


                    let commentEmail = document.createElement('div');
                    let commentEmail_a = document.createElement('a');
                    commentEmail.classList = 'commentEmail';
                    commentEmail_a.innerText = `${comment.email}`;
                    commentEmail_a.href = `mail:${comment.email}`;
                    commentEmail.append(commentEmail_a)


                    let commentBody = document.createElement('div');
                    commentBody.classList = 'commentBody';
                    commentBody.innerText = `Body : ${comment.body}`;

                    wraperComments.append(commentId, commentName, commentEmail, commentBody);
                    commentsWraper.append(wraperComments);
                })
                wraper.append(commentsWraper);
            })

        wraper.append(postWraper);
        document.body.append(wraper);
    })

