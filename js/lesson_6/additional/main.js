// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :
// +данні до знака равлика(@),
// +наявність равлика,
// +крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// +функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)

// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
function findChar(str, char, from) {
    return (str.indexOf(char, from) !== -1) ? str.indexOf(char, from) : false;
}

function emailValidator(email) {
    let emailChar = findChar(email, '@', 2);
    let pointChar = findChar(email, '.', emailChar + 3)
    return (emailChar && pointChar) ? "Yor E-mail is Valid" : "Yor E-mail is NOT Valid"
}

console.log(emailValidator('someemail@gmail.com'));
console.log(emailValidator('s@omeemailgmail.com'));
console.log(emailValidator('someeMAIL@gmail.com'));
console.log(emailValidator('someeMAIL@i.ua'));
console.log(emailValidator('some.email@gmail.com'));


// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

//використовуючи метод sort()
let sortCoursesArray = coursesArray.sort((a, b) => b.modules.length - a.modules.length);
console.log(sortCoursesArray)

// Без метода sort(). сортировка пузирьком
const sortCoursesArray1 = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let flag = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j].modules.length < arr[j + 1].modules.length) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = true;
            }
        }
        if (!flag) break;
    }
    return arr;
};
console.log(sortCoursesArray1(coursesArray));


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch
// у рядку str.

let symb = "о", str = "Астрономия это наука о небесных объектах";

function count(str, stringsearch) {

    for (let i = 0, counter = 0, index = 0; i < str.length; i++) {
        if (str.indexOf(stringsearch, index) !== -1) {
            counter++;
            index = str.indexOf(stringsearch, index) + 1;
        } else return counter
    }
}

document.writeln(count(str, symb)) // 5

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
str = "Сила тяжести приложена к центру масс тела";

function cutString(string, number) {
    return  string.split(' ', number).join(' ');
}

document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

