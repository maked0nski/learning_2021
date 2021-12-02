// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let firstDiv = document.createElement('div');
firstDiv.className = 'wrap, collapse, alpha, beta';
firstDiv.style = 'background-color: lightgrey; color: green; font-size : 22px';
firstDiv.innerText = `Тестовий Текст Для Тесту Тексту`
document.body.append(firstDiv)
document.body.append(firstDiv.cloneNode(true))

//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
let classMenuColl = document.getElementsByClassName('menu')
for (const arrElement of ['Main', 'Products', 'About us', 'Contacts']) {
    let element = document.createElement('li');
    element.innerText = arrElement;
    classMenuColl[0].append(element);
}


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let blockDiv = document.createElement('div')
    blockDiv.innerText = `Ви освоїте курс ${coursesAndDurationArrayElement.title} всього за ${coursesAndDurationArrayElement.monthDuration} місяці`;
    document.body.appendChild(blockDiv)
}


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let blockDiv = document.createElement('div')
    blockDiv.classList = 'item';

    let blockH1 = document.createElement('h1')
    blockH1.classList = 'heading';
    blockH1.innerText = coursesAndDurationArrayElement.title

    let blockP = document.createElement('p')
    blockP.classList = 'description';
    blockP.innerText = coursesAndDurationArrayElement.monthDuration

    blockDiv.append(blockH1);
    blockDiv.append(blockP);

    document.body.appendChild(blockDiv)
}