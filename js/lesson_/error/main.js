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


// function sumNumb(number, sum = 0) {
//     debugger
//     let sumd ;
//
//     if (!(number % 10)) {
//         return sumd
//     }
//     sumNumb(, number % 10);
//
// }

// function sumNumb(number, sum = 0) {
//     if (number) return sum + sumNumb(Math.trunc(number / 10), number % 10)
//     return sum
// }

function sumNumb(number) {
    if (number === 0) return 0;
    return number % 10 + sumNumb(Math.trunc(number / 10))
}
console.log(sumNumb(1234));





//     let sum = number % 10;
//     console.log(sum)
//     if (number) {
//         sum += number % 10;
//         number = Math.trunc(number / 10);
//         return sum + sumNumb(Math.trunc(number / 10), number % 10)
//     }
//     return sum
// }







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


// console.log(sumNumb(985));

















