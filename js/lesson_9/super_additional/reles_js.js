//      - є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
//      Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//      Cтворити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content
//      з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//      Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let arrH2 = document.body.getElementsByTagName('h2')
let idContent = document.getElementById('content')
let ulTag = document.createElement('ul')
for (const h2Element of arrH2) {
    let liTag = document.createElement('li');
    liTag.innerText = h2Element.innerText;
    ulTag.append(liTag)
}
idContent.append(ulTag)


//
//
//      -Є масив котрий характеризує правила.
//      Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//      При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//      Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

rules.forEach((value) => {
    let wrapElement = document.getElementById('wrap')

    let itemDiv = document.createElement('div');
    wrapElement.append(itemDiv)

    let titleDiv = document.createElement('h2');
    titleDiv.innerText = value.title;
    itemDiv.append(titleDiv)

    let bodyDiv = document.createElement('p');
    bodyDiv.innerText = value.body
    itemDiv.append(bodyDiv)

    // document.body.append(wrapElement)
})