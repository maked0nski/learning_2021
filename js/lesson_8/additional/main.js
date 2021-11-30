// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив.
// масив вивести в консоль

let classArr = []
function allEllementRec(tag) {
    if (tag.children.length) {
        for (const element of tag.children) {
            allEllementRec(element);
        }
    }
    if(tag.classList.length){
        for (const tagElement of tag.classList) {
            classArr.push(tagElement)
        }
    }
}
allEllementRec(document.body);


console.log(classArr)