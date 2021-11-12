// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let task1 = document.createElement('div')
// task1.id =  "task1";
// document.body.appendChild(task1);
function createDev(tag, id, clas) {
    let element = document.createElement(tag);
    element.id = id;
    element.className = clas
    return element;
}

let task1 = createDev("div", "task1")
task1.className = 'block'

let task1_question = createDev('div');
task1_question.className = 'question'
task1_question.innerText = "Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години)."

let task1_input = createDev('input', 'task1_input');
task1_input.className = 'input'
task1_input.placeholder = "введи число від 0 до 59 включно";

let task1_button = createDev('button');
task1_button.className = 'btn'
task1_button.textContent = 'Перевірити'

let task1_answer = document.createElement('div');
task1_answer.className = 'answer'


task1.appendChild(task1_question);
task1.appendChild(task1_input);
task1.appendChild(task1_button)
task1.appendChild(task1_answer)

document.body.appendChild(task1);

task1_button.onclick = () => {
    let time = Number(document.getElementById('task1_input').value)
    if (time >= 0 & time <= 59) {
        let k = 60 / time;
        if (k > 4) {
            task1_answer.innerText = `Хвилини ${time} відноситься до I-ї чверті (від 0 - 14)`;
        } else if (k > 2) {
            task1_answer.innerText = `Хвилини ${time} відноситься до II-ї чверті (від 15 - 29)`;
        } else if (k > 60 / 45) {
            task1_answer.innerText = `Хвилини ${time} відноситься до III-ї чверті (від 30 - 44)`;
        } else {
            task1_answer.innerText = `Хвилини ${time} відноситься до IV-ї чверті (від 45 - 59)`;
        }
    } else {
        task1_answer.innerText = `Я ж просив ввести ціле число від 0 до 59`;
    }

}


//
//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// Перша декада починається з 1-го числа місяця; друга, відповідно, з 11-го числа: ну, і третя декада, цілком закономірно, почнеться 21 числа всі того ж місяця.
let task2 = createDev('div', 'task2');
task2.className = 'block'

let task2_question = createDev('dev');
task2_question.className = 'question'
task2_question.innerText = "У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю). Перша декада починається з 1-го числа місяця; друга, відповідно, з 11-го числа: ну, і третя декада, цілком закономірно, почнеться 21 числа всі того ж місяця."

let task2_input = createDev('input', 'task2_input');
task2_input.className = 'input'
task2_input.placeholder = 'Введіть число від 1 до 31 включно'

let task2_button = createDev('button', 'task2_button');
task2_button.className = 'btn'
task2_button.textContent = 'Перевыр';

let task2_answer = createDev('div')
task2_answer.className = 'answer'


task2.appendChild(task2_question);
task2.appendChild(task2_input);
task2.appendChild(task2_button)
task2.appendChild(task2_answer)

document.body.appendChild(task2);

task2_button.onclick = () => {
    let day = Number(document.getElementById('task2_input').value);
    if (0<day  & day<32) {
        if (day > 11 && day < 21) {
            task2_answer.innerText = `${day} день місяця відноситься до 2-ї декади`;
        } else if (day > 20) {
            task2_answer.innerText = `${day} день місяця відноситься до 3-ї декади`;
        } else {
            task2_answer.innerText = `${day} день місяця відноситься до 1-ї декади`;
        }
    } else {
        task2_answer.innerText = `Я ж просив ввести ціле число від 1 до 31`;
    }
}


// - У нас є змінна test не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
let test = false;
switch (test){
    case true:
        console.log('вірно');
        break;
    case false:
        console.log('Неправильно');
        break;
    default:
        'Ой, ви щось не те ввели'
}

(test) ? console.log('вірно') : console.log('Неправильно');

//
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
let a = -1;
(a != 0) ? console.log('вірно') : console.log('Невірно');
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
//
let dayNumber = 5;
switch (dayNumber){
    case 1:
        console.log('Твої дії заплановані на Понеділок');
        break;
    case 2:
        console.log('Твої дії заплановані на Вівторок');
        break;
    case 3:
        console.log('Твої дії заплановані на Середу');
        break;
    case 4:
        console.log('Твої дії заплановані на Четвер');
        break;
    case 5:
        console.log('Твої дії заплановані на Пятницю');
        break;
    case 6:
        console.log('Твої дії заплановані на Суботу');
        break;
    case 7:
        console.log('Твої дії заплановані на Неділю');
        break;

}
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
//

let year = new Date().getFullYear() ;
(year % 4 == 0) ? console.log(`${year} являється високосним роком`) : console.log(`${year} не являється високосним роком`);


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let js = prompt('Яка «офіційна» назва JavaScript?');
if (js=='ECMAScript'){
    console.log('Правильно!');
}else
    console.log('Не знаєте? ECMAScript!');
