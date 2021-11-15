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
    let tmp = a;
    tmp =(b < tmp) ? b : tmp
    console.log ((c < tmp) ? c : tmp)
}
let arrtest = [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,2,1],
    [3,1,2]
]
for (let ell of arrtest) {
    fuMin(ell[0],ell[1],ell[2])
}

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function fuMax(a, b, c) {
    let tmp = a;
    tmp =(b < tmp) ? tmp : b
    console.log ((c < tmp) ? tmp : c)
}
for (let ell of arrtest) {
    fuMax(ell[0],ell[1],ell[2])
}

// - створити функцію яка повертає найбільше число з масиву
function RandomMinMax(a = 1, b = 10) {
    return Math.floor(Math.random() * (b - a)) + a;
}
let arr=[]
let k;
while (arr.length < 90) {
    arr.push(RandomMinMax(1,500));
    k++
}

console.log(arr);

// function fuMaxArr (arr){
//     let arrMax = arr[0];
//     for (let i = 0; i < arr.length-1; i++) {
//         arrMax= (arr[i]<=arrMax) ? arrMax: arr[i]
//     }
//     return arrMax
// }
// function fuMaxArr (arr){
//       return Math.max.apply(null, arr)
// }


console.log(fuMaxArr(arr));
// - створити функцію яка повертає найменьше число з масиву

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
