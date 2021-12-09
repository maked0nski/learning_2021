let favoriteList = JSON.parse(localStorage.getItem('favorites'))
let wrap = document.createElement('div');
for (const favoriteItem of favoriteList) {
    let blockFavorite = document.createElement('div');
    let element = document.createElement('div');
    let button = document.createElement('button')
    element.innerText = JSON.stringify(favoriteItem)
    button.innerText = `Розлюбити`
    button.onclick = function () {
        for (let i = 0; i < favoriteList.length; i++) {
            target = JSON.parse(element.innerText)
            if (favoriteList[i].name === target.name && favoriteList[i].age === target.age && favoriteList[i].status === target.status) {
                favoriteList.splice(i,1)
                localStorage.setItem('favorites', JSON.stringify(favoriteList) )
                location.reload()
            }
        }
    }

    blockFavorite.append(element);
    blockFavorite.append(button);
    wrap.append(blockFavorite)
}
document.body.append(wrap)