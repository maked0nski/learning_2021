// function findNextSquare(sq) {
//     if (sq>=0 & Number.isInteger(Math.sqrt(sq))){
//         return (Math.sqrt(sq)+1)**2
//     }
//     return -1;
// }

function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 ? -1 : (Math.sqrt(sq) + 1)**2;
}

console.log(findNextSquare(121))
console.log(findNextSquare(625))
console.log(findNextSquare(319225))
console.log(findNextSquare(15241383936))
console.log(findNextSquare(155))
console.log(findNextSquare(342786627))


