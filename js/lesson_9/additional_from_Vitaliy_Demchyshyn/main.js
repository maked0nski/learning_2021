// создать функцию которая принимает массив чисел и возвращает
// массив только с уникальными ( не повторяющимися ) числами
//
// Пример:
//     unique([0, 3, 0, 7, 1, 5, 1, 3, 5, 2]) -> [2, 7]
// unique([1,2,3,4,2,5,1]) -> [ 3, 4, 5 ]

// let arr = [0, 3, 0, 7, 1, 5, 1, 3, 5, 2];
let arr = [1, 2, 3, 4, 2, 5, 1];


function uniqueArray1( arr ) {
    debugger

    var newArr = {};

    arr.forEach( function(v) {
        newArr[v+ '::' + typeof v] = v;
    });

    return Object.keys(newArr).map(function(v){
        return newArr[v];
    });
}



function UniqueArray(arr) {
    let newArr = [];
    arr.forEach(value => {
        if (arr.indexOf(value) === arr.lastIndexOf(value)) {
            newArr.push(value)
        }
    })
    return newArr;
}

console.log(uniqueArray1(arr))
console.log(UniqueArray(arr))