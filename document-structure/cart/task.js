let products = document.querySelector('.products');
let cartProducts = document.querySelector('.cart__products');

products.addEventListener('click', function(event) {
 let value = event.target.closest('.product').querySelector('.product__quantity-value');
 
 if (event.target.closest('.product__quantity-control')) {
  if (event.target.innerText == '-' && value.innerText >= 2 ) {
   value.innerText = Number.parseInt(value.innerText) - 1;
  } else if (event.target.innerText == '+') {
   value.innerText = Number.parseInt(value.innerText) + 1;
  }
 } 
 if (event.target.closest('.product__add')) {
  let basket = Array.from(document.querySelectorAll('.cart__product'));
  let cart = event.target.closest('.product');
  let productId = cart.dataset.id;
  let productImg = cart.querySelector('.product__image').src;
  let productCount = cart.querySelector('.product__quantity-value').innerText;

  if (basket.some(elem => elem.dataset.id == productId)) {
   let elem = basket.find(elem => elem.dataset.id == productId);
   elem.querySelector('.cart__product-count').innerText = Number(elem.querySelector('.cart__product-count').innerText) + +productCount;
  } else {
   cartProducts.insertAdjacentHTML(
    'afterbegin',
    `<div class="cart__product" data-id="${productId}">
       <img class="cart__product-image" src="${productImg}">
       <div class="cart__product-count">${productCount}</div>
     </div>`
   )
  }
 }
})