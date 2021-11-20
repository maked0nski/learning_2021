// - Дано натуральное число n. Выведите все числа от 1 до n.
let listNumbur = n => {
    for (let i = 0; i < n; i++) {
        // console.log(i+1)
    }
}
listNumbur(3);


(function (n) {
    for (let i = 0; i < n; i++) {
        // console.log(i+1)
    }
}(3))


// - Даны два целых числа A и В . Выведите все числа от A до B включительно,
// в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let listNum = (A, B) => {
    if (A < B) {
        for (let i = A; i < B + 1; i++) {
            console.log(i)
        }
    } else {
        for (let i = A; i > B - 1; i--) {
            console.log(i)
        }
    }
}
listNum(4, 1);
listNum(2, 5);









// Given: an array containing hashes of names
//
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
//
//     Example:
//
console.log(list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]));
// // returns 'Bart, Lisa & Maggie'
//
console.log(list([{name: 'Bart'}, {name: 'Lisa'}]));
// returns 'Bart & Lisa'

console.log(list([{name: 'Bart'}]));
// returns 'Bart'

console.log(list([]));
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

function list(names) {
    let tmpString = '';
    if (names.length > 1) {
        for (let i = 0; i < names.length-1; i++) {
            tmpString += (i !== names.length - 2) ? `${names[i].name}, `: `${names[i].name} & ${names[i+1].name}`;
        }
    } else if (names.length === 1) {
        tmpString = names[0].name
    } else tmpString = ''

        return  tmpString
}