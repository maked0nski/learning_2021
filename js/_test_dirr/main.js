let arr2 =  [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const types of arr2){
    let box = document.createElement('div')
    for (const ftypes in  types){
        console.log(types[ftypes])
        document.body.appendChild(box)
        box.innerText = types[ftypes];
    }
}