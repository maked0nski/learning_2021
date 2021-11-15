// - створити функцію яка обчислює та повертає площу прямокутника висотою
function AreaRectangle(a,b) {
    return `Площа прямокутника зі сторонами ${a} та ${b} за формулою S = a · b дорівнює ${a*b}`;
}
console.log(AreaRectangle(8, 9));


// - створити функцію яка обчислює та повертає площу кола
function AreaCircle(r) {
    return `Площа круга з радіусом ${r}  за формулою S = π r2 дорівнює ${Math.PI*r**2}`;
}
console.log(AreaCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру
function AreaCylinder(r, h) {
    return `Площа повної поверхні циліндра з радіусом основи ${r} та висотою ${h} дорівнює ${(2*Math.PI*Math.pow(r,2))+(2*Math.PI*r*h)}`;
}
console.log(AreaCylinder(5, 6));

// - створити функцію яка приймає масив та виводить кожен його елемент
let nextArr1 = [100, '', 'lorem', 250, 'cool', 50, 168, true, 120, false, 345, 188];
function iterArr(arr) {
    for (let arrElement of arr) {
        console.log(arrElement);
    }
}
iterArr(nextArr1)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function CreatePWithText(text) {
    return document.write(`<p>${text}</p>`)
}
let x = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis dolore molestias mollitia obcaecati possimus ut vitae, voluptatem! Aliquid cupiditate, doloremque explicabo facere obcaecati possimus quod sapiente tempore ullam veritatis.'
CreatePWithText(x)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function CreateUl_li(text){
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}
CreateUl_li('Текст li')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function CreateUl_li2(text, x){
    document.write(`<ul>`)
    for (let i = 0; i < x; i++) {
        document.write(`<li>${text} - ${i+1}</li>`)
    }
    document.write(`</ul>`)
}
CreateUl_li2('Текст li', 5)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
function CreateList(arr) {
    document.write(`<ul>`)

    for (let arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}
CreateList(nextArr1)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];


function blockUser(arr) {
    for (let arrElement of arr) {
        document.write('<div class="block" style="border: 1px solid red; border-radius: 10px; margin: 10px; padding: 10px">')
        document.write(`<div class="id">User id - ${arrElement.id}</div>`)
        document.write(`<div class="name">User name - ${arrElement.name}</div>`)
        document.write(`<div class="age">User age - ${arrElement.age}</div>`)
        document.write('</div>')
    }
}

blockUser(usersWithId);