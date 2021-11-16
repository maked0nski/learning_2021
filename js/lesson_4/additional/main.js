// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, 
// якщо два аргументи - складає або конкатенує їх між собою.

function ConcatArg(arg1, arg2) {
    (typeof arg2 === 'undefined') ? console.log(arg1) : console.log(arg1 + arg2)
}

ConcatArg(1, 2)

//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з
// однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
//      [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
let arr1 = [1, 2, 3, 4, 5, 9]
let arr2 = [2, 3, 4, 5, 5]

// function CreateNewArrSummIndex(arr1, arr2) {
//     let newArr = []
//     if (arr1.length === arr2.length) {
//         for (let i = 0; i < arr1.length; i++) {
//             newArr.push(arr1[i] + arr2[i])
//         }
//     } else return "Тільки для масивів однакової довжини"
//
//     return newArr
// }


function CreateNewArrSummIndex(arr1, arr2) {
    if (arr1.length >= arr2.length) {
        return SummArrey(arr1, arr2)
    } else
        return SummArrey(arr2, arr1);
}

function SummArrey(arr1, arr2) {
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        if (i < arr2.length) {
            newArr.push(arr1[i] + arr2[i])
        } else newArr.push(arr1[i])
    }
    return newArr
}

console.log(CreateNewArrSummIndex(arr1, arr2))


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
let arrObject = [{name: 'Dima', age: 13}, {model: 'Camry'}]

function getKeyObject(arr) {
    let arrKey = []
    for (let arrElement of arr) {
        for (const key in arrElement) {
            arrKey.push(key)
        }
    }
    return arrKey
}

console.log(getKeyObject(arrObject));

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
function getValueObject(arr) {
    let arrKey = []
    for (let arrElement of arr) {
        for (const key in arrElement) {
            arrKey.push(arrElement[key])
        }
    }
    return arrKey
}

console.log(getValueObject(arrObject));
//
//
//     -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться
//     в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//

function muveEllement(arr, index) {
    let temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
    return arr
}

console.log(muveEllement([9, 8, 0, 4], 2));


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому
// порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0
//
// ]



    //  нижче повний ГОВНОКОД !!!
    // Але працює ))))
    // підскажи логіку, як оптимізувати


function SortZerroInArr(arr) {
    let zerro = 0;
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            temp.push(arr[i])
        } else zerro++
    }
    for (let i = 0; i < zerro; i++) {
        temp.push(0)
    }
    return temp
}

console.log(SortZerroInArr([0, 0, 1, 0]));
console.log(SortZerroInArr([0, 1, 2, 3, 4]));
console.log(SortZerroInArr([1, 0, 6, 0, 3]));