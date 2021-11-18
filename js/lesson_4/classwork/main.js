// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function fu1(a, b, c) {
//     if (a > b) {
//         if (b > c) {
//             console.log(c)
//         } else console.log(b)
//     } else if (a < c) {
//         console.log(a)
//     } else {
//         console.log(c)
//     }
// }


function fuMin(a, b, c) {
    // let tmp = a;
    // tmp = (b < tmp) ? b : tmp
    // console.log((c < tmp) ? c : tmp)

    let tmp = (b < a) ? b : a
    console.log((c < tmp) ? c : tmp)
}

let arrtest = [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 2, 1],
    [3, 1, 2]
]
for (let ell of arrtest) {
    fuMin(ell[0], ell[1], ell[2])
}

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function fuMax(a, b, c) {
    let tmp = a;
    tmp = (b < tmp) ? tmp : b
    console.log((c < tmp) ? tmp : c)
}

for (let ell of arrtest) {
    fuMax(ell[0], ell[1], ell[2])
}

// - створити функцію яка повертає найбільше число з масиву


let arr = CreateNumArr(90, 0, 500)


console.log(arr);

function fuMaxArr(arr) {
    let arrMax = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arrMax = (arr[i] <= arrMax) ? arrMax : arr[i]
    }
    return arrMax
}

// orr
//
// function fuMaxArr (arr){
//       return Math.max.apply(null, arr)
// }

console.log(fuMaxArr(arr));


// - створити функцію яка повертає найменьше число з масиву
function MinEllArr(arr) {
    let min = arr[0];
    for (let arrElement of arr) {
        min = min >= arrElement ? arrElement : min;
    }
    return min
}

MinEllArr(arr)


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
function SummEllArr(arr) {
    let SummEll = 0;
    for (let arrElement of arr) {
        if (typeof arrElement === 'number') {
            SummEll += arrElement
        } else {
            console.log('В масиве не только цифры')
            break;
        }
    }
    return SummEll
}

console.log(SummEllArr(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function SerArifmEllArr(arr) {
    let SummEll = 0;
    for (let arrElement of arr) {
        if (typeof arrElement === 'number') {
            SummEll += arrElement
        } else {
            console.log('В масиве не только цифры')
            break;
        }
    }
    return SummEll / (arr.length)
}

console.log(SerArifmEllArr(arr));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше 
// (Math використовувати заборонено);

function MinMaxEllArr(arr) {
    let mixEll = arr[0];
    let maxEll = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            maxEll = (maxEll <= arr[i]) ? arr[i] : maxEll;
            mixEll = (mixEll > arr[i]) ? arr[i] : mixEll;
        } else {
            console.log('В масиве не только цифры')
            break;
        }
    }
    console.log(`Найбільше число в масиві ${maxEll}`);
    return mixEll
}

MinMaxEllArr(arr);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function randomNumber() {
    return Math.round(Math.random() * 100)
}
function CreateArr(lengthArr) {
    let arr = []
    for (let i = 0; i < lengthArr; i++) {
        arr.push(randomNumber())
    }
    return arr
}

console.log(CreateArr(10));




// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function RandomMinMax(randMin = 1, randMax = 10) {
    return Math.floor(Math.random() * (randMax - randMin)) + randMin;
}

function CreateNumArr(lengthArr, randMin, randMax) {
    let arr = []
    let k = 0;
    while (arr.length < lengthArr) {
        arr.push(RandomMinMax(randMin, randMax));
        k++
    }
    return arr
}

CreateNumArr(15, 1, 500)


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function ReversArr(arr) {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}

console.log(ReversArr(arr));