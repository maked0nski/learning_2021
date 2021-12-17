// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми,
// action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html,
// при переході на який відобразити
// на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та
// локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється
// конкретний обраний  товар



let h3 = document.createElement('h3')
h3.innerText = 'Форма додавання товару'

let forma = document.createElement('form');
forma.name = 'formaNewProduct';

document.body.append(h3, forma)




let btnSave = document.getElementById('btnSave')
btnSave.onclick = function (e)  {
    e.preventDefault();
    let forms = document.forms['formaNewProduct']
    let product = {
        idProduct: new Date().getTime(),
        nameProduct: forms.nameProduct.value,
        numberProduct: +forms.numberProduct.value,
        priceProduct: +forms.priceProduct.value,
        fotoProduct: forms.fotoProduct.value
    }
    let productArr = JSON.parse(localStorage.getItem('productArr'))  || [];
      productArr.push(product)
    localStorage.setItem('productArr', JSON.stringify(productArr))
   }