// Burger Menu
const address = document.querySelector('.header__address');
const buttons = document.querySelector('.header__buttons');
const burger = document.querySelector('.header__burger');

burger.addEventListener('click', () => {
    address.classList.toggle('active');
    buttons.classList.toggle('active');
    burger.classList.toggle('active');
});

// Cart

const headerButton = document.querySelector('.header-cart');
const closeButton = document.querySelector('.cart-close');
const productButton = document.querySelectorAll('.products__item-button');
const cancelButton = document.querySelector('.cancel');
const productList = document.querySelector('.cart__middle-list');
let productPrice = 0;
const totalPrice = document.querySelector('.cart__bottom-total');
const cart = document.querySelector('.cart-modal');

headerButton.addEventListener('click', () => {
    console.log('the cart is opened!');
    cart.classList.add('opened');
});

closeButton.addEventListener('click', () => {
    console.log('the cart is closed!');
    cart.classList.remove('opened');
});

productButton.forEach(button => {
    button.addEventListener('click', () => {
        console.log('the cart is opened!');
        cart.classList.add('opened');

        // new Product
        const newProduct = document.createElement('li');
        const prprice = document.querySelector('.products__item-price');
        newProduct.innerHTML = `
        <h4 class="cart__middle-title">Ролл угорь стандарт</h4>
        <div class="cart__middle-add">
            <span class="cart__middle-price">${prprice.textContent}</span>
            <button class="minus">-</button>
            <span class="amount">1</span>
            <button class="plus">+</button>
        </div>`;
        productList.appendChild(newProduct);

        // plus button
        const plusButton = document.querySelectorAll('.plus');
        const minusButton = document.querySelectorAll('.minus');
        plusButton.forEach(plus => {
            plus.addEventListener('click', () => {
                let amount = document.querySelectorAll('.amount');
                let amountNumber = 1;
                let i = 0;
                let newAmount = amountNumber += 1;
                amount.forEach(amount => {
                    
                });
                productPrice.innerText = productPrice += parseInt(price.innerText, 10);
            });
        });

        // Product price 
        let price = document.querySelector('.cart__middle-price');
        let newPrice = productPrice += parseInt(price.innerText, 10);
        totalPrice.innerText = newPrice + '₽';
    });
});

cancelButton.addEventListener('click', () => {
    console.log('the cart is closed!');
    cart.classList.remove('opened');
});