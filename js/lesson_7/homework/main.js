// - Створити функцію конструктор для об'єктів User з
// полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// class User {
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }

let objectArr = [];
objectArr.push(new User(1, 'Sasha', 'Sanin', 'sanin@email.com', '+3850054848'));
objectArr.push(new User(2, 'Паша', 'Чпок', 'chpok@email.com', '+3852364547'));
objectArr.push(new User(3, 'Коля', 'Глаженый', 'tefal@email.com', '+3850583568'));
objectArr.push(new User(4, 'Лыда', 'Носков', 'soks@email.com', '+385683737378'));
objectArr.push(new User(5, 'Вася', 'Носов', 'nous@email.com', '+3859365434'));
objectArr.push(new User(6, 'Юра', 'Клизмович', 'adndala@email.com', '+382733783'));
objectArr.push(new User(7, 'Ира', 'Кокосова', 'koksova@email.com', '+3850364343'));
objectArr.push(new User(8, 'Джон', 'Сноу', 'snow@email.com', '+38505428734'));
objectArr.push(new User(9, 'Роберт', 'Saninа', 'rob.Sanina@email.com', '+385452038554'));
objectArr.push(new User(10, 'Робертина', 'Робертовна', 'derebasova@email.com', '+38543378534'));
console.log(objectArr);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//

console.log(objectArr.filter(value => value.id % 2 === 0));


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
objectArr.sort((a, b) => a.id - b.id)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)


class Client extends User {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clientArr = []

// - Взяти масив (Client [] з попереднього завдання).
clientArr.push(new Client(1, 'Sasha', 'Sanin', 'sanin@email.com', '+3850054848', ['молоко', 'сало', 'хліб', 'яйця', 'лижі', 'снігоступи']));
clientArr.push(new Client(2, 'Паша', 'Чпок', 'chpok@email.com', '+3852364547', ['молоко', 'сало', 'хліб', 'яйця', 'лижі', 'снігоступи', 'лимон', 'telefon']));
clientArr.push(new Client(3, 'Коля', 'Глаженый', 'tefal@email.com', '+3850583568', ['молоко', 'хліб', 'яйця', 'лижі', 'снігоступи']));
clientArr.push(new Client(4, 'Лыда', 'Носков', 'soks@email.com', '+385683737378', ['сало', 'хліб', 'яйця', 'лижі', 'снігоступи', 'лимон', 'telefon']));
clientArr.push(new Client(5, 'Вася', 'Носов', 'nous@email.com', '+3859365434', ['молоко', 'сало', 'лижі', 'снігоступи', 'лимон', 'telefon']));
clientArr.push(new Client(6, 'Юра', 'Клизмович', 'adndala@email.com', '+382733783', ['молоко', 'сало', 'хліб', 'яйця', 'снігоступи', 'лимон', 'telefon']));
clientArr.push(new Client(7, 'Ира', 'Кокосова', 'koksova@email.com', '+3850364343', ['молоко', 'сало', 'хліб', 'яйця', 'лижі', 'снігоступи', 'лимон']));
clientArr.push(new Client(8, 'Джон', 'Сноу', 'snow@email.com', '+38505428734', ['молоко', 'сало', 'хліб', 'яйця', 'снігоступи', 'лимон', 'telefon']));
clientArr.push(new Client(9, 'Роберт', 'Saninа', 'rob.Sanina@email.com', '+385452038554', ['молоко', 'хліб', 'яйця', 'лижі', 'снігоступи', 'telefon']));
clientArr.push(new Client(10, 'Робертина', 'Робертовна', 'derebasova@email.com', '+38543378534', ['сало', 'хліб', 'яйця', 'лижі', 'лимон', 'telefon']));

console.log(clientArr)
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clientArr.sort((a, b) => a.order.length - b.order.length));
