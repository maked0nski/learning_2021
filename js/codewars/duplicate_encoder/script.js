let names, word = 'din';
console.log("(((")
let unique = '';
word = word.toLowerCase();
    for(let i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    console.log(unique) ;



// // let names = 'recede';
// // console.log("()()()")
// // let names = 'Success';
// // console.log(")())())")
// // console.log("))((")
// // let names = '(( @';
// let arr = names.toLowerCase().split('');
// let result = ''
//
// for (let i = 0; i < arr.length; i++) {
//     let k = arr[i]
//     delete arr[i]
//     if (arr.includes(k,0)){
//         arr[i] = k
//     }
// }
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]){
//         arr[i] = ')'
//     }else {
//         arr[i] = '('
//     }
//     result +=arr[i]
// }
//
// console.log(result)

