// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Car(model, manufacture, year, maxSpeed, power) {
    this.model = model;
    this.manufacture = manufacture;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.power = power;
    this.drive = function () {
        return `їдемо зі швидкістю ${this.maxSpeed}км на годину`
    }
    this.info = function () {
        for (let elementKey in this) {
            // console.log(typeof this[elementKey])
            if (typeof this[elementKey] !== 'function') console.log(`${elementKey} - ${this[elementKey]}`)
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed
    }
    this.changeYear = function (newValue) {
        this.year = newValue
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }

}

let car1 = new Car('Astra j', 'Opel', 2012, 250, 1.7)
console.log(car1)
console.log(car1.drive())
car1.info()

car1.addDriver('Sasha')
console.log(car1);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, 
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars {
    constructor(model, manufacture, year, maxSpeed, power) {
        this.model = model;
        this.manufacture = manufacture;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.power = power;
    }

    drive() {
        return `їдемо зі швидкістю ${this.maxSpeed}км на годину`
    };

    info() {
        for (let elementKey in this) {
            if (typeof this[elementKey] !== 'function') console.log(`${elementKey} - ${this[elementKey]}`)
        }
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed
    };

    changeYear(newValue) {
        this.year = newValue
    };

    addDriver(driver) {
        this.driver = driver
    };
}

let car2 = new Cars('Opel Astra j', 'Germany', 2012, 250, 1.7)
console.log(car2)
console.log(car2.drive())
car2.info()

car2.addDriver('Sasha')
console.log(car2);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, leg) {
        this.name = name;
        this.age = age;
        this.leg = leg;
    }
}

let cinderellasArr = [
    new Cinderella('Ira', 25, 35),
    new Cinderella('Inna', 21, 36),
    new Cinderella('Vika', 18, 37),
    new Cinderella('Lena', 23, 38),
    new Cinderella('Vira', 25, 39),
    new Cinderella('Olia', 35, 40),
    new Cinderella('Natalia', 30, 41),
    new Cinderella('Katia', 32, 42),
    new Cinderella('Masha', 28, 43),
    new Cinderella('Kira', 22, 44)
];
console.log(cinderellasArr)
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
        constructor(name, age, shoes) {
        this.name = name;
        this.age = age;
        this.shoes = shoes;
    }
}
let prince= new Prince('Sasha', 41, 44)
console.log(prince)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderellaElement of cinderellasArr) {
     if (cinderellaElement.leg === prince.shoes) console.log(`${cinderellaElement.name} повинна бути з принцем `)
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function findCinderella(girlsArr, princ) {
    console.log(girlsArr.find(value => value.leg === princ.shoes));
}

findCinderella(cinderellasArr, prince)