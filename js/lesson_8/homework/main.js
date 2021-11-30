// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName
// або document.getElementsByTagName :


// -- отримує текст з параграфа з id "content"
let textIDContent = document.getElementById('content').innerText;


// -- отримує текст з блоку з id "rules"
let textIDRules = document.getElementById('rules').innerText;
console.log(textIDRules)


// -- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById('content').innerText = "замініть текст параграфа з id 'content' на будь-який інший"


// -- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById('rules').innerText = "замініть текст параграфа з id 'rules' на будь-який інший"



// -- змініть кожному елементу   колір фону на червоний
function allEllementRec(tag) {
    tag.classList.add('redBackgroundColor')
    if (tag.children.length) {
        for (const element of tag.children) {
            allEllementRec(element);
        }
    }
}
allEllementRec(document.body);


// -- змініть кожному елементу колір тексту на синій
let AllElement = document.body.children;
for (const AllElementElement of AllElement) {
    AllElementElement.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let RulesClassList = document.getElementById('rules').classList



// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let ArrFcRules = document.getElementsByClassName('fc_rules');
console.log(ArrFcRules);
for (const arrFcRule of ArrFcRules) {
    arrFcRule.classList.add('redTextColor')
}
