// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arrNum = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     1. перебрати його циклом while
let i = 0;
while (i < arrNum.length) {
    // console.log(arrNum[i]);        // Перебираю масив
    i++
}

//     2. перебрати його циклом for

for (let number of arrNum) {
    // console.log(number);        // Перебираю масив
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 1;
while (i < arrNum.length) {
    // console.log(arrNum[i]);
    i += 2;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 1; j < arrNum.length; j += 2) {
    // console.log(arrNum[j]);
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < arrNum.length) {
    if (arrNum[i] % 2 === 0) {
        // console.log(arrNum[i]);
    }
    i++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let number of arrNum) {
    if (number % 2 === 0) {
        // console.log(number)
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let j = 0; j < arrNum.length; j++) {
    if (arrNum[j] % 3 === 0) {
        // arrNum[j] = 'okten'
    }
}

// 8. вивести масив в зворотньому порядку.
i = arrNum.length;
while (i !== 0) {
    console.log(arrNum[i]);
    i--;
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

// 1 с заду на перед
document.write('<ul>')
for (let j = listOfItems.length - 1; j >= 0; j--) {
    document.write(`<li>${listOfItems[j]}</li>`)
}
document.write('</ul>')

// 2 с заду на перед


// <!--template 2.1-->
for (let j = simpsons.length - 1; j >= 0; j--) {
    document.write(`<div class="block">${simpsons[j].name} ${simpsons[j].surname} age-${simpsons[j].age} </br>${simpsons[j].info} </br> <img src='${simpsons[j].photo}' alt = '${simpsons[j].name}'/></div>`)
}
// <!--template 2.2-->
for (let j = simpsons.length - 1; j >= 0; j--) {
    document.write(`<div class="block">`);
    document.write(`<h2>${simpsons[j].name} ${simpsons[j].surname}. Age is - ${simpsons[j].age}</h2>`);
    document.write(`<p>${simpsons[j].info}</p>`);
    document.write(`<img src="${simpsons[j].photo}" alt="${simpsons[j].name}"/>`);
    document.write(`</div>`);
}


//     1. перебрати його циклом while    с заду на перед
i = arrNum.length - 1;
while (i >= 0) {
    console.log(arrNum[i]);        // Перебираю масив
    i--
}

//     2. перебрати його циклом for    с заду на перед

for (let s = arrNum.length - 1; s >= 0; s--) {
    console.log(arrNum[s]);        // Перебираю масив
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом    с заду на перед
i = arrNum.length - 1;
while (i >= 0) {
    if (i % 2 !== 0) {
        console.log(i)
    }
    i--;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом    с заду на перед
for (let j = arrNum.length - 1; j >= 0; j--) {
    if (j % 2 !== 0) {
        console.log(j)
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення    с заду на перед
i = arrNum.length-1;
while (i >=0) {
    if (arrNum[i] % 2 === 0) {
        console.log(arrNum[i]);
    }
    i--;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення    с заду на перед
let arrNumRevers = arrNum.reverse()
for (let number of arrNumRevers) {
    if (number % 2 === 0) {
        console.log(number)
    }
}
// // 7. замінити кожне число кратне 3 на слово "okten"    с заду на перед
for (let j = 0; j < arrNumRevers.length; j++) {
    if (arrNumRevers[j] % 3 === 0) {
        arrNum[j] = 'okten'
    }
}
console.log(arrNumRevers);





