four.style.display = 'block';

const  ARRAY_USERS = 'ARRAY_USERS';
let tempUser = {};
const content = document.getElementById('content4')
const form1 = document.forms.MyForms;


form1.save.onclick = ev => {
    // ev.preventDefault();
    let person = {...tempUser};
    tempUser= {};
    for (let i = 0; i < form1.children.length; i++) {
        const form1Element = form1.children[i];
        if (form1Element.name && form1Element.type !== 'submit') {
            person[form1Element.name] = form1Element.value;
        }
    }
    if (!person.id){
        person.id = new Date().getTime()
    }

    console.log(person);
    saveUser(person)
}

getDataFromLS()

function saveUser(user) {
    if(localStorage.hasOwnProperty(ARRAY_USERS)){
        const arrayUsers = JSON.parse(localStorage.getItem(ARRAY_USERS));
        const  find = arrayUsers.find(value => value.id === user.id);
        if (find) {

            const  filter = arrayUsers.filter(value => value.id !== user.id)
            filter.push(user)

            localStorage.setItem(ARRAY_USERS, JSON.stringify(filter));

        }else {
            arrayUsers.push(user);
            localStorage.setItem(ARRAY_USERS, JSON.stringify(arrayUsers));
        }



    } else {
        localStorage.setItem(ARRAY_USERS, JSON.stringify([user]))
    }
}

function getDataFromLS(){
    if (localStorage.hasOwnProperty(ARRAY_USERS)){
        const arrUser = JSON.parse(localStorage.getItem(ARRAY_USERS));
        for (const user  of arrUser) {
            content.appendChild(createDivPerson(user))

        }
    }
}

function createDivPerson(user){
    const main = document.createElement('div');
    let flag = true;
    for(const  key in user){
        if(flag){
            const h3 = document.createElement('h3');
            h3.innerText = key + ' : ' + user[key];
            main.appendChild(h3);
            flag = false;
        }else{
            const p = document.createElement('p');
            p.innerText = key + ' : ' + user[key];
            main.appendChild(p);

        }
    }
    main.style = 'width : 300px; border: red 1px solid; float : left';
    const b1 = document.createElement('button');
    const b2 = document.createElement('button');

    b1.innerText = 'Edit';
    b2.innerText = 'Delete';
    b1.onclick = function (){
        editUser(user.id);
    }
    b2.onclick = function (){
        deleteUser(user.id);
    }


    main.appendChild(b1)
    main.appendChild(b2)
    return main

}

function deleteUser(id){
    const parse = JSON.parse(localStorage.getItem(ARRAY_USERS));
    const  filter =  parse.filter(user => user.id !== id);
    localStorage.setItem(ARRAY_USERS, JSON.stringify(filter));
    location.reload();
}

function  editUser(id){
    const parse = JSON.parse(localStorage.getItem(ARRAY_USERS));
    const  user =  parse.find(user => user.id === id);
    for (let i = 0; i < form1.children.length; i++) {
        const form1Element = form1.children[i];
        if (form1Element.name && form1Element.type !== 'submit') {
            for (const key in user) {
                if (form1Element.name === key){
                    form1Element.value = user[key];
                }
            }
        }
    }
    tempUser = user;

}