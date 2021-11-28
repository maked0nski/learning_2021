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
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
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

class Attrs {
    constructor(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }
}

class TagDescription {
    constructor(titleOfTag, action, titleOfAttr1, actionOfAtt1, titleOfAttr2, actionOfAttr2, titleOfAttr3, actionOfAttr3) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs1 = new Attrs(titleOfAttr1, actionOfAtt1);
        this.attrs2 = new Attrs(titleOfAttr2, actionOfAttr2);
        this.attrs3 = new Attrs(titleOfAttr3, actionOfAttr3);
    }
}

let tagA = new TagDescription(
    'a',
    'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.',
    'href',
    'Задает адрес документа, на который следует перейти.',
    'title',
    'Добавляет всплывающую подсказку к тексту ссылки.',
    'download',
    'Предлагает скачать указанный по ссылке файл.'
)

let tagDiv = new TagDescription(
    'div',
    'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    'align',
    'Задает выравнивание содержимого тега <div>.',
    'title',
    'Добавляет всплывающую подсказку к содержимому.',
    'hidden',
    'Скрывает содержимое элемента от просмотра.',
)


let tagH1 = new TagDescription(
    'h1',
    'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным.',
    'align',
    'Определяет выравнивание заголовка.',
    'spellcheck',
    'Указывает браузеру проверять или нет правописание и грамматику в тексте.',
    'accesskey',
    'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'
)
let tagSpan = new TagDescription(
    'span',
    'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.',
    'class',
    'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.',
    'dir',
    'Задает направление и отображение текста — слева направо или справа налево.',
    'lang',
    'Браузер использует значение параметра для правильного отображения некоторых национальных символов.'
)
let tagInput = new TagDescription(
    'input',
    'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. ',
    'accept',
    'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.',
    'form',
    'Связывает поле с формой по её идентификатору.',
    'name',
    'Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать.'
)
let tagForm = new TagDescription(
    'form',
    'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.',
    'autocomplete',
    'Включает автозаполнение полей формы.',
    'name',
    'Имя формы.',
    'novalidate',
    'Отменяет встроенную проверку данных формы на корректность ввода.'
)
let tagOption = new TagDescription(
    'option',
    'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей.',
    'disabled',
    'Заблокировать для доступа элемент списка.',
    'selected',
    'Заранее устанавливает определенный пункт списка выделенным.',
    'value',
    'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'
)
let tagSelect = new TagDescription(
    'select',
    'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка.',
    'autofocus',
    'Устанавливает, что список получает фокус после загрузки страницы.',
    'multiple',
    'Позволяет одновременно выбирать сразу несколько элементов списка.',
    'required',
    'Список обязателен для выбора перед отправкой формы.'
)

console.log(tagA,tagDiv,tagSpan,tagH1,tagSelect,tagInput,tagForm,tagOption)