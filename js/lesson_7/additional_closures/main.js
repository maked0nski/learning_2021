let nextKey = 1;

function UserCard() {
    this.key = (![1, 2, 3].includes(nextKey)) ? (console.error(`Введіть число в діапазоні від 1 до 3`)) : (nextKey++);

    this.balance = 100;
    this.transactionLimit = 100;
    this.historyLogs = [];

    this.getCardOptions = function () {
        return ({
            balance: this.balance,
            transactionLimit: this.transactionLimit,
            historyLogs: this.historyLogs,
            key: this.key
        })
    };

    function operationTime() {
        d = new Date();
        return [d.getMonth() + 1,
                d.getDate(),
                d.getFullYear()].join('/') + ' ' +
            [d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':')
    }

    function isNumber(arg) {
        return typeof arg === 'number'
    }

    function addHistioryLog(operationType, credits) {
        return (
            {
                operationType: operationType,
                credits: credits,
                operationTime: operationTime()
            }
        )
    }


//Ця функція отримує певну кількість грошей і заповнює баланc карти
    this.putCredits = function (money) {
        if (isNumber(money)) {
            this.historyLogs.push(addHistioryLog('Put Credits', money))
            return this.balance += money;
        } else console.error(`Вкажіть корректне число`)
    };


//Ця функція отримує певну кількість грошей і віднімає ці кошти з баланса карти (протилежний за дією від метода putCredits)
    this.takeCredits = function (money) {
        if (isNumber(money) && this.transactionLimit < money) {
            console.error(`Ваш кредитний ліміт тільки ${this.transactionLimit}грн. Нажаль Ви не можете зняти ${money}грн`)
        } else if (this.balance < money) {
            console.error(`На Вашому рахунку тільки ${this.balance}грн. Нажаль Ви не можете зняти ${money}грн`)
        } else {
            this.historyLogs.push(addHistioryLog('Take Credits', money))
            this.balance -= money;
        }
    };


//Ця функція приймає як аргумент число і встановлює його як ліміт транзакцій на картці
    this.setTransactionLimit = function (newLimit) {
        if (isNumber(newLimit)) {
            this.historyLogs.push(addHistioryLog('Transaction limit change', newLimit));
            this.transactionLimit = newLimit;
        }
    };


//Ця функція отримує два аргументи - кількість кредитів, які потрібно передати, та карту одержувача
    this.transferCredits = function (money, cardNumber) {
        let comision = money;
        this.takeCredits(comision += money * 0.5);
        cardNumber.putCredits(money)
    };


}


// const card3 = new UserCard();
// const card1 = new UserCard();
//
// // debugger
// card3.putCredits(150);
// card3.setTransactionLimit(5000);
// card3.takeCredits(100);
// card3.transferCredits(50, card1);
// console.log(card3.getCardOptions());
// console.log(card1.getCardOptions());

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = []
    };

    setCartInArr(arr) {
        this.cards.push(arr)
    }

    addCard() {
        if (this.cards.length < 3) {
            let newCard = new UserCard();
            this.setCartInArr(newCard)
            // let nameCard = `${this.name}Card${this.cards.length+1}`;
            // this.setCartInArr(`${this.name}Card${this.cards.length+1}`);
            return newCard
        } else {
            return console.error(`Ви не можете мати більше 3-х карт`)
        }
    };

    getCardByKey(number) {
        console.log(this.cards[number-1])
        if (this.cards[number-1] === undefined) {
            return console.error(`Ви не маєте карти під цим номером`)
        } else {
            return this.cards[number-1].getCardOptions()
        }
    }


}

let userBob = new UserAccount('Bob');
userBob.addCard()
let cart_1 = userBob.addCard()
let cart_2 = userBob.addCard()
console.log(cart_1.getCardOptions());
console.log(cart_2.getCardOptions());

let card1 = userBob.getCardByKey(1);
let card2 = userBob.getCardByKey(2);



card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
//
