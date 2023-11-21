let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total =document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
total.addEventListener('click', ()=>{
    alert('bsa7a w ra7a');
})
let products = [
    {
        id: 1,
        name: 'PC Gamer MSI',
        image: '1.png',
        price : 11500
    },
    {
        id: 2,
        name: 'MacBook Pro',
        image: '2.png',
        price : 24999
    },
    {
        id: 3,
        name: 'PC Gamer ROG',
        image: '3.png',
        price : 9999
    },
    {
        id: 4,
        name: 'Souris Logitech',
        image: '4.png',
        price : 199
    },
    {
        id: 5,
        name: 'USB SanDisk',
        image: '5.png',
        price : 99
    },
    {
        id: 6,
        name: 'Imprimante HP',
        image: '6.png',
        price : 649
    },
    {
        id: 7,
        name: 'Iphone 14',
        image: '7.png',
        price : 8999
    },
    {
        id: 8,
        name: 'Huawei P30 Pro',
        image: '8.png',
        price : 2350
    },
    {
        id: 9,
        name: 'Oppo F21',
        image: '9.png',
        price : 2499
    },
];
let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()} DH</div>
            <button onclick="addToCart(${key})">Ajouter au panier</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if (listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCart();
}
function reloadCart(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice += value.price;
        count += value.quantity;

        if (value != null){
            newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.price.toLocaleString()} DH</div>
                <div>${value.quantity}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `
            listCard.appendChild(newDiv);
        }
    })
    total.innerHTML = `Total : ${totalPrice.toLocaleString()} DH`;
    quantity.innerText = count;

}
function changeQuantity(key, quantity){
    if (quantity==0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCart();
}