// создать функцию которая принимает массив чисел и возвращает
// массив только с уникальными ( не повторяющимися ) числами
//
// Пример:
//     unique([0, 3, 0, 7, 1, 5, 1, 3, 5, 2]) -> [2, 7]
// unique([1,2,3,4,2,5,1]) -> [ 3, 4, 5 ]

// let arr = [0, 3, 0, 7, 1, 5, 1, 3, 5, 2];
let arr = [1, 2, 3, 4, 2, 5, 1];


function uniqueArray1(arr) {

    let newArr = {};
    arr.forEach(function (v) {
        if (typeof newArr[v]=='undefined'){
            newArr[v] = +v
        }else newArr[v] = 'duble'
    });
    return Object.keys(newArr).filter(function (v) {
        if (newArr[v]!=='duble') {
            return newArr[v]
        }
    }
    // return Object.keys(newArr).map(function (v) {
    //     if (newArr[v]!=='duble') {
    //         return newArr[v]
    //     }
    // }
    );
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


// var data = [
//     {name: 'Joe', age: 20},
//     {name: 'Bill', age: 30},
//     {name: 'Kate', age: 23}
// ]
// // function getNames(data){
// //     for(i of data){
// //         console.log(i.name, i.age);
// //     }
// // }
// // getNames(data)
//
//
//
//
//
// //
// //
// //
// // // getNames(data) // should return ['Joe', 'Bill', 'Kate']
// //
// // function getNames(data){
// //     return data.map(function(item){return item.name});
// // }
// //
// // console.log(getNames(data));