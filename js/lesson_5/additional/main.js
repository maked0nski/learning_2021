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