let productArr = JSON.parse(localStorage.getItem('productArr')) || [];
let h1 = document.createElement('h1')
h1.innerText = 'Перелік наявних товарів'
let btnRemoveAll = document.createElement('button')
btnRemoveAll.innerText = 'Видалити все'
btnRemoveAll.onclick = function () {

}
let wrap = document.createElement('div')
wrap.id = 'wrap'

document.body.append(h1,btnRemoveAll, wrap)
productArr.forEach(value => {
    let wrapEllement = document.createElement('div');
    wrapEllement.id = 'wrapEllement'
    let detalInfo = document.createElement('div')
    let nameProduct = document.createElement('h3')
    nameProduct.innerText = value.nameProduct
    let numberProduct = document.createElement('p')
    numberProduct.innerText = `Кількість - ${value.numberProduct}шт.`;
    let priceProduct = document.createElement('p')
    priceProduct.innerText = `Ціна - ${value.priceProduct}грн.`;
    let fotoProduct = document.createElement('img')
    fotoProduct.src = value.fotoProduct;
    fotoProduct.alt = value.nameProduct;
    let btnRemoveElement = document.createElement('button')
    btnRemoveElement.innerText = 'Видалити'
    btnRemoveElement.onclick = function () {
        deleteProduct(value.idProduct)
    }


    detalInfo.append(nameProduct, numberProduct, priceProduct, btnRemoveElement)
    wrapEllement.append( fotoProduct, detalInfo)
    wrap.append(wrapEllement)
})

function deleteProduct(id){
    // const parse = JSON.parse(localStorage.getItem(ARRAY_USERS));
    const  filter =  productArr.filter(product => product.idProduct !== id);
    localStorage.setItem('productArr', JSON.stringify(filter));
    location.reload();
}
