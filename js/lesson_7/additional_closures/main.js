function userCard(number) {
    // let keyArr = [];    //TODO
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    this.key = (function (number) {
        // if (keyArr.indexOf(number) !== -1) return console.error(`Ця карта вже існує`)
        if (number < 0 && number > 3) return console.error(`Введіть число в діапазоні від 1 до 3`)
        return number
    }(number));
    this.balance = balance;
    this.transactionLimit = transactionLimit;
    this.historyLogs = historyLogs;



    this.getCardOptions = function () {
        return {
            balance: this.balance,
            transactionLimit: this.transactionLimit,
            historyLogs: this.historyLogs,
            key: this.key
        }
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


// const card3 = new userCard(3);
// const card1 = new userCard(2);
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


    addCard() {
        if (this.cards.length > 2) return console.error(`Ви не можете мати більше 3-х карт`)
        let cardName = userCard(this.cards.length + 1).getCardOptions()
        console.log(cardName.getCardOptions());
        this.cards.push(cardName);
        console.log(this.cards)
    };

    getCardByKey(number) {
        if (this.cards.indexOf(number) === -1) {
            return console.error(`Ви не маєте карти під цим номером`)
        } else {
            return this.cards[number-1]
        }
    }


}

let user = new UserAccount('Bob');
user.addCard()
user.addCard()
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);
console.log(card1.getCardOptions());

