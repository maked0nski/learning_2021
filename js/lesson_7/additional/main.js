// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//

// {
//     id: 1;
//     name: 'Leanne Graham';
//     username: 'Bret';
//     email: 'Sincere@april.biz';
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     };
//     phone: '1-770-736-8031 x56442';
//     website: 'hildegard.org';
//     company: {
//         name: 'Romaguera-Crona';
//         catchPhrase: 'Multi-layered client-server neural-net';
//         bs: 'harness real-time e-markets'
//     }
// }



// // підкажіть чи можна таким способом виконати це завдання, але в мене не вийшло додати при створенні let person5 =  new Person( 1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', adress ???, ) та решта вкладені
class Geo {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}
class Address {
    constructor(street, suite, city, zipcode, lat, lng) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = new Geo(lat, lng);
    }
}
class Company {
    constructor(companyName, catchPhrase, bs) {
        this.name = companyName;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}
class Person {
    constructor(id, name, username, email, street, suite, city, zipcode,lat, lng, phone, website, companyName, catchPhrase, bs ) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = new Address(street, suite, city, zipcode, lat, lng);
        this.phone = phone;
        this.website = website;
        this.company = new Company(companyName, catchPhrase, bs);
    }
}



//
// class Person {
//     constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, companyCatchPhrase, companyBs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {
//             street: street,
//             suite: suite,
//             city: city,
//             zipcode: zipcode,
//             geo: {lat: lat, lng: lng}
//         };
//         this.phone = phone;
//         this.website = website;
//         this.company = {
//             name: companyName,
//             catchPhrase: companyCatchPhrase,
//             bs: companyBs
//         };
//     }
// }
//
// let person1 = new Person(
//     1,
//     'Leanne Graham',
//     'Bret',
//     'Sincere@april.biz',
//     'Kulas Light',
//     'Apt. 556',
//     'Gwenborough',
//     '92998-3874',
//     '-37.3159',
//     '81.1496',
//     '1-770-736-8031 x56442',
//     'hildegard.org',
//     'Romaguera-Crona',
//     'Multi-layered client-server neural-net',
//     'harness real-time e-markets'
// )
//


let person1 = new Person(
    1,
    'Leanne Graham',
    'Bret',
    'Sincere@april.biz',
    'Kulas Light',
    'Apt. 556',
    'Gwenborough',
    '92998-3874',
    '-37.3159',
    '81.1496',
    '1-770-736-8031 x56442',
    'hildegard.org',
    'Romaguera-Crona',
    'Multi-layered client-server neural-net',
    'harness real-time e-markets'
)

console.log(person1)


//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// - назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//

// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }

// class TagDescription {
//     titleOfTag; action; attrs
//
// }