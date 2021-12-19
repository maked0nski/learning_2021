// TODO HW
//
// Зробити свій розпорядок дня.
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// Напиклад.
// Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
// І так далі

function timeOut(min=1000, max=3000) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let vivacity = 0
let food = 2
let money = 100;

function wakeUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            vivacity += 100
            console.log(`Я виспався. Сил - ${vivacity}, Їжі - ${food}, грошей - ${money}`)
            resolve(vivacity)
        }, timeOut())
    })
}

function toWash(vivacity) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (vivacity) {
                vivacity -= 10;
                console.log(`My face is clear.  Сил - ${vivacity}, Їжі - ${food}, грошей - ${money}`)
                resolve(vivacity);
            } else reject(`You mast sleep.  Сил - ${vivacity}, Їжі - ${food}, грошей - ${money}`)
        }, timeOut())
    })
}

function haveBreakfast(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (food) {
                food--
                vivacity -= 10
                console.log(`Я наївся.  Сил - ${vivacity}, Їжі - ${food}, грошей - ${money} `)
                resolve(food)
            }
                reject(`Закінчилась їжа. Я голодний.  Сил - ${vivacity}, Їжі - ${food}, грошей - ${money}`)
        }, timeOut())
    })
}

function goWork(vivacity) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (vivacity > 40) {
                money += 400;
                console.log(`Я попрацював .  Сил - ${vivacity}, Їжі - ${food}, грошей - ${money}`);
                resolve(money)
            } else {
                console.log(`Не має сил працювати.  Сил - ${vivacity}, Їжі - ${food}, грошей - ${money}`);
                reject('ERORO TEXT !!!')
            }
        }, timeOut())
    })
}

function goToShop(money, vivacity) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (vivacity > 10 && money) {
                vivacity -= 50;
                money -= 10;
                food += 1;
                console.log(`Я прибдав їжу.  Сил - ${vivacity}, Їжі - ${food}, грошей - ${money}`)
                resolve(food);
            }
            reject(`Я сильно знесилениї для цього чи просто не маю грошей .  Сил - ${vivacity}, Їжі - ${food}, грошей - ${money}`)
        }, timeOut())
    })
}

async function myDay1() {
    try {
        const relaxation = await wakeUp();
        const clearn = await toWash(relaxation);
        let food1 = await haveBreakfast(food)
        let payment = await goWork(clearn);
        let foods = await goToShop(payment, vivacity)

    } catch (e) {
        console.log(e)
    }
}


// myDay1()



let money2 = 0
function myDay(awoke) {
    let cheerfulness = 100;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (awoke) {
                resolve(cheerfulness += 10)
                console.log('Прокинувся вчасно: 6:00. Молодець.')
            }else{
                console.log('Ти простав! тебе розстріляти мало!.')
                reject(cheerfulness -= 10)
            }
        }, timeOut())
    })
}

function brushTeeth(overslept){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (overslept > 100){
                console.log('Чистимо зуби, отримуємо позитивний настрій')
                resolve(overslept += 10)
            } else {
                console.log('Нема часу на чистку зубів. Я Проспав!')
                reject(overslept -= 10)
            }
        }, timeOut())
    })
}

function eat(cheerfulness){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (cheerfulness > 110){
                console.log('Нажерся, як свиня. Гусь товарищу не сытый')
                resolve(cheerfulness += 10)
            } else {
                console.log('Чого голодний? бо виспаний! Чого виспаний? Бо ПРОСПАВ!')
                reject(cheerfulness -= 50)
            }
        }, timeOut())
    })
}

function goToWork(cheerfulness) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cheerfulness >= 120){
                money2 += 1000;
                console.log('попрацювали та заробили грошненят')
                cheerfulness -= 10
                resolve([cheerfulness, money2])
            }else {
                console.log('Нема ні сил, ні бажання працювати')
                reject(cheerfulness -= 50)
            }
        }, timeOut())
    })
}

function goBear (cheerfulness, money2){
    return new  Promise((resolve, reject) => {
        setTimeout(()=>{
            if(cheerfulness > 100 && money2 > 500){
                console.log('Обожнюю холодне крафтове пиво ;) ');
                cheerfulness += 10;
                money2 -= 300;
                resolve([cheerfulness, money2])
            }else {
                console.log('No money2, no Bear! Да и сил нету');
                cheerfulness -= 10;
                console.log(cheerfulness)
                console.log(money2)
                reject ([cheerfulness, money2])
            }
        }, timeOut())
    })
}

function stripClub (cheerfulness, money2){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(cheerfulness > 100){
                console.log('Погнали к девочкам !!! ');
                cheerfulness += 20;
                money2 -= 500;
                resolve([cheerfulness, money2])
            } else {
                console.log('В твоем то состоянии ?? Смешно!!  ');
                console.log('Еще и обокрали !!! Денек просто ППЦ! ');
                cheerfulness = 10;
                money2 = 0;
                resolve([cheerfulness, money2])

            }
        }, timeOut());
    })
}

// myDay(true)
//     .then(value => {
//         console.log(`Твоє exp збільшилось до ${value}`)
//         console.log('*______________________________*')
//         return brushTeeth(value)
//     })
//     .then(brushTeeth =>{
//         console.log(`Твоє exp збільшилось до ${brushTeeth}`)
//         console.log('*______________________________*')
//         return eat(brushTeeth)
//     })
//     .then(eat => {
//         console.log(`Твоє exp збільшилось до ${eat}`)
//         console.log('*______________________________*')
//
//     })
//     .catch(reason => {
//         console.log('-------------------------------------------')
//         console.log('Wszystko popierdolone! Весь день на смарку.')
//         console.log('-------------------------------------------')
//     })
//     .finally(()=>{
//         console.log('-------------------------------------------')
//         console.log('-*- А варто було тыльки вчасно прокинутися -*-')
//         console.log('-------------------------------------------')
//
//     })

function printExp(exp){
    console.log(`Твоє exp збільшилось до ${exp}`)
    console.log('*______________________________*')
}
async function myDays(){
    try {
        let exp = await myDay(true);
        printExp(exp)

        let zub = await brushTeeth(exp);
        printExp(zub)

        let eats = await eat(zub);

        let work = await goToWork(eats);
        money2 = work[1]
        cheerfulness = work[0]
        printExp(cheerfulness)
        console.log(`Приємно коли в кишені шелестять ${money2} гривень`)
        console.log('*______________________________*')

        let bar = await goBear(cheerfulness, money2)
        console.log(`Бар повкртае ${bar}`)
        cheerfulness = bar[0]
        money2 = bar[1]
        printExp(cheerfulness)
        // console.log(`Після відпочинку твоє exp становить: ${cheerfulness}`)
        console.log(`Після бару в кишені залишилось ${money2} гривень`)
        console.log('*______________________________*')

        if (money2 > 700){
            let strip = await stripClub(cheerfulness, money2)
            cheerfulness = strip[0]
            money2 = strip[1]
            console.log(`Відвідавши стрибклуб exp становить: ${cheerfulness}`)
            console.log(`Після стрибклубу в кишені залишилось ${money2} гривень`)
            console.log('*______________________________*')

        }else {
            let work = await goToWork(eats);
            money2 = work[1]
            cheerfulness = work[0]
            console.log(`Твоє exp збільшилось до ${cheerfulness}`)
            console.log(`На дівчат грошей не вистачило, довелося йти на роботу. зараз в кишені ${money2} гривень`)
            console.log('*______________________________*')

            let strip = await stripClub(cheerfulness, money2)
            cheerfulness = strip[0]
            money2 = strip[1]
            console.log(`Відвідавши стрибклуб exp становить: ${cheerfulness}`)
            console.log(`Після стрибклубу в кишені залишилось ${money2} гривень`)
            console.log('*______________________________*')
        }

    }
    catch(e)
    {
        console.log('-------------------------------')
        console.log('Wszystko popierdolone! Весь день на смарку.')
        console.log('А варто було тільки вчасно прокинутися')
        console.log('-------------------------------')
    }
    finally {
        console.log('-------------------------------')
        console.info('-*- The End -*-')
        console.log('-------------------------------')
    }
}


// myDays()
