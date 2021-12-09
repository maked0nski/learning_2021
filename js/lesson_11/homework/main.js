// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let btn = document.getElementById('btn');
btn.onclick = () => {
    let user = {
        name: document.forms.test1.name.value,
        age: document.forms.test1.age.value
    }
    localStorage.setItem('user', JSON.stringify(user));
    console.log(user);
    location.reload();
}

dataUser = localStorage.getItem('user');
if (dataUser) {
    let div = document.createElement('div');
    let {name, age} = JSON.parse(dataUser);
    let p = document.createElement('p');
    let btn = document.createElement('button');
    btn.innerText = 'видалити цю інформацію';
    btn.id = 'deleteUser';
    p.innerText = `Я знав ${name}, що ти нажмеш кнопку. Тепер я знаю що твій вік - ${age}`;
    div.append(p);
    div.append(btn);
    first = document.getElementById('first')
    first.append(div);
}

deleteUser = document.getElementById('deleteUser');
if (deleteUser) {
    deleteUser.onclick = () => {
        localStorage.removeItem('user');
        location.reload();
    }
}


//
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

btnCar = document.getElementById('btnCar')
btnCar.onclick = (e) => {
    e.preventDefault();
    let model = document.forms.car.model.value;
    let type = document.forms.car.type.value;
    let volume = document.forms.car.volume.value;
    let arr = JSON.parse(localStorage.getItem('carList')) || [];
    arr.push({model, type, volume})
    localStorage.setItem('carList', JSON.stringify(arr))
}
