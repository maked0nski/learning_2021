// TODO
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
let paramString = document.location.search;
let searchParam = new URLSearchParams(paramString)
let post_id = searchParam.get('post_id')
let username = searchParam.get('username')

function creareTag(tag = 'div', innerText = undefined, id = undefined, clas = undefined, html = undefined) {
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
    if (html) {
        newTag.innerHTML = html
    }

    return newTag;
}

fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    .then(response => response.json())
    .then(post => {
        // console.log(post);
        let wraper = creareTag('div', undefined, 'wraper')
        let postWraper = creareTag('div', undefined, 'postWraper')
        let h1 = creareTag('h1', `Пост ID - ${post.id}  користувача "${username}" із id: ${post.userId}`)
        let postTitle = creareTag('div', undefined, undefined, 'postTitle', `<span> Title:  </span> ${post.title}`);
        let postBody = creareTag('div', undefined, undefined, 'postBody', `<span> Body:  </span> ${post.body}`);

        postWraper.append(h1, postTitle, postBody)

        fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`)
            .then(response => response.json())
            .then(comments => {
                let commentsWraper = creareTag('div', undefined, 'commentsWraper')
                comments.forEach(comment => {
                    let wraperComments = creareTag('div', undefined, undefined, 'wraperComments')
                    let commentId = creareTag('div', `ID : ${comment.id}`, undefined, 'commentId')
                    let commentName = creareTag('div', `Name : ${comment.name}`, undefined, 'commentTitle')
                    let commentEmail = creareTag('div', `Email : ${comment.email}`, undefined, 'commentBody')
                    let commentBody = creareTag('div', `Body : ${comment.body}`, undefined, 'commentUserId')

                    wraperComments.append(commentId, commentName, commentEmail, commentBody)
                    commentsWraper.append(wraperComments)
                })
               wraper.append(commentsWraper)
            })

        wraper.append(postWraper)
        document.body.append(wraper)
    })

