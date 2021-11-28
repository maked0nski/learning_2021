//     Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
//     При решении этой задачи нельзя использовать строки,
//     массивы ну и циклы
// Вам поможет Рекурсія)
//
// пример:
//     1234 -> 10
// 879 -> 24
// 11 -> 2

// function sumNumb(number, sum = 0) {
//     // debugger
//         sum += number - Math.trunc(number / 10) * 10;
//         number = Math.trunc(number / 10);
//     if (number !== 0) {
//         sumNumb(number, sum);
//     } else  return sum;
// }


function sumNumb(number, sum = 0) {

    if (number !== 0) {
        debugger
        sum += number - Math.trunc(number / 10) * 10;
        number = Math.trunc(number / 10);
        sumNumb(number, sum);

    } else return sum;
}

// console.log({})
// for (let number of [1,2,3,4,5]) {
//     if (!(number%2)){
//         continue
//     }
//     console.log(number++)
// }
//
//
// function sumNumb(number, sum = 0) {
//     while (number !== 0) {
//         sum += number - Math.trunc(number / 10) * 10;
//         number = Math.trunc(number / 10);
//         sumNumb(number, sum);
//     }
//     return sum;
// }


console.log(sumNumb(5542));