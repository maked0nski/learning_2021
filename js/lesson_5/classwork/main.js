let randomMinMax = (randMin = 1, randMax = 10) => {
    return Math.floor(Math.random() * (randMax - randMin)) + randMin;
}

let createNumArr = (lengthArr, randMin, randMax) => {
    let arr = []
    let k = 0;
    while (arr.length < lengthArr) {
        arr.push(randomMinMax(randMin, randMax));
        k++
    }
    return arr
}






// Всі функції повинні бути описані стрілочним типом, та selfinvoke!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// стрілочним типом
let minNubner = (a, b, c) => {
    // let minNum = a > b ? b < c ? b : c : a < c ? a : c;
    let minNum = (b < a) ? b : a;
    console.log((c < minNum) ? c : minNum);
}
minNubner(9, 8, 33);

// Self-Invoking Functions
(function (a, b, c) {
    console.log(a > b ? b < c ? b : c : a < c ? a : c); // я сам з цього прозрів )) і знаю що не підтримуємий код і за таке по пальцях )
    // let minNum = (b < a) ? b : a;
    // console.log((c < minNum) ? c : minNum);
}(1, 8, 2));


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// стрілочним типом
let maxNumber = (a, b, c) => {
    let maxNum = (b <= a) ? a : b;
    return (c <= maxNum) ? maxNum : c
}
console.log(maxNumber(33, 8, 33));


// Self-Invoking Functions
(function (a, b, c) {
    let maxNum = (b <= a) ? a : b;
    console.log((c <= maxNum) ? maxNum : c);
}(33, 8, 33))


// - створити функцію яка повертає найбільше число з масиву

// стрілочним типом
let maxArrElement = arr => {
    maxElement = arr[0];
    for (let arrElement of arr) {
        maxElement = (maxElement <= arrElement) ? arrElement : maxElement;
    }
    return maxElement
}
let testArr = createNumArr(15, 1, 500)
console.log(testArr)
console.log(maxArrElement(testArr));

// Self-Invoking Functions
(function (arr) {
    maxElement = arr[0];
    for (let arrElement of arr) {
        maxElement = (maxElement <= arrElement) ? arrElement : maxElement
    }
    console.log(maxElement);
}(testArr))


// - створити функцію яка повертає найменьше число з масиву
// стрілочним типом
let minNumArr = arr => {
    minElement = arr[0];
    for (let arrElement of arr) {
        minElement = (minElement < arrElement) ? minElement : arrElement;
    }
    return minElement
}
console.log(minNumArr(testArr));
// Self-Invoking Functions

(function (arr) {
    minElement = arr[0];
    for (let arrElement of arr) {
        minElement = (minElement < arrElement) ? minElement : arrElement;
    }
    console.log(minElement);
}(testArr))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
// стрілочним типом
let sumElementArr = arr => {
    let sumElement = 0;
    for (let arrElement of arr) {
        sumElement += arrElement;
    }
    return sumElement
}
console.log(sumElementArr(testArr));
// Self-Invoking Functions

(function (arr) {
    let sumElement = 0;
    for (let arrElement of arr) {
        sumElement += arrElement;
    }
    console.log(sumElement);
}(testArr))


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// стрілочним типом
let arithmeticMean1 = arr => {
    return (sumElementArr(arr) / arr.length)
}
let arithmeticMean2 = arr => {
    let sumElement = 0;
    for (let arrElement of arr) {
        sumElement += arrElement;
    }
    return sumElement / arr.length
}
console.log(arithmeticMean1(testArr));
console.log(arithmeticMean2(testArr));
// Self-Invoking Functions
(function (arr) {
    console.log(sumElementArr(arr) / arr.length);

}(testArr));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// стрілочним типом
let minMaxNumbArr = arr => {
    let maxElement = arr[0];
    let minElement = arr[0];
    for (let arrElement of arr) {
        minElement = (minElement < arrElement) ? minElement : arrElement;
        maxElement = (maxElement > arrElement) ? maxElement : arrElement;
    }
    console.log(maxElement)
    return minElement;
}
console.log(minMaxNumbArr(testArr));


// Self-Invoking Functions
(function (arr) {
    let maxElement = arr[0];
    let minElement = arr[0];
    for (let arrElement of arr) {
        minElement = (minElement < arrElement) ? minElement : arrElement;
        maxElement = (maxElement > arrElement) ? maxElement : arrElement;
    }
    console.log(maxElement)
    return minElement;
}(testArr));




// - створити функцію яка заповнює масив рандомними числами
// стрілочним типом
let randomArr = length => {
    let tmpArr =[]
    for (let i = 0; i < length; i++) {
        tmpArr.push(Math.floor(Math.random()*10));
    }
    return tmpArr
}
console.log(randomArr(90));


// Self-Invoking Functions
let aRr = (function (lenght) {
    let tmpArr = [];
    for (let i = 0; i < lenght; i++) {
        tmpArr.push(Math.round(Math.random() * 10));
    }
    return tmpArr
}(5));

console.log(aRr)

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// стрілочним типом
let random = () => {
    return (Math.round(Math.random() * 100));
}
console.log(random());

// Self-Invoking Functions
(function () {
    console.log(Math.round(Math.random() * 100))
}());




// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// стрілочним типом
let newArrey = (min, max, lenght) => {
    let tmpArr = [];
    for (let i = 0; i < lenght; i++) {
        tmpArr.push(Math.round(Math.random() * (max - min) + min));
    }
    return tmpArr;
};
console.log(newArrey(5, 600, 12));

// Self-Invoking Functions
(function (min, max, lenght) {
    let tmpArr = [];
    for (let i = 0; i < lenght; i++) {
        tmpArr.push(Math.round(Math.random() * (max - min) + min));
    }
    console.log(tmpArr);
}(5, 100, 15))




// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// стрілочним типом
// Self-Invoking Functions
let reversArr = arr => {
    tmpArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        tmpArr.push(arr[i]);
    }
    return tmpArr;
}
console.log(reversArr(newArrey(5, 600, 12)));


// Self-Invoking Functions
(function (arr) {
    tmpArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        tmpArr.push(arr[i]);
    }
    console.log(tmpArr);
}(newArrey(5, 600, 12)))



