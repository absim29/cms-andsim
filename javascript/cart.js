import {getMovie} from "./APIsingle.js";



const cart = JSON.parse(localStorage.getItem('CartInfo'));
console.log({cart});




function renderCart() {
    const movie = getMovie();
    const shopCart = JSON.stringify(localStorage.getItem('CartInfo'));
    
    localStorage.getItem('CartInfo', JSON.stringify(movie));

    const cartItems = document.querySelector(".contain-item-cart");
    
    cartItems.innerHTML = '';
    cartItems.innerHTML = 
    `<h1 class="product-title">Order Summary</h1>
        <div class="cart-row">
            <span class="cart-item cart-header cart-column">Movie</span>
            <span class="cart-price cart-header cart-column">Price</span>
        </div>
        <div class="cart-items">
            <div class="cart-row">
                <div class="cart-item cart-column">
                    <img src="${cart[0].image}" alt="Cover image of the movie" class="cartimg">  
                    <span class="cart-item-title">${cart[0].title}</span>
                    <button class="cta remove">X</button>
                </div>
                <span class="cart-price cart-column">${cart[0].price}</span>
            </div>
        </div>
        <div class="cart-total">
            <strong class="cart-total-title">Total</strong>
            <span class="cart-total-price">$39.97</span>
        </div>
        <a href="success.html" class="cta">CHECKOUT</a>`;
    
};

renderCart();



// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
//     ready()
// }

// function addMovieToCart(image, title, price) {
//     var cartRow = document.createElement('div')
//     cartRow.classList.add('cart-row')
//     var cartItems = document.getElementsByClassName('cart-items')[0]
//     var cartRowContents = `
//         <div class="cart-item cart-column">
//         <img src="${JSON.stringify.cart.image}" alt="Cover image of the movie" class="cartimg"> 
//         <span class="cart-item-title">${JSON.stringify.cart.title}</span>
//         <button class="cta remove">X</button>
//         </div>
//         <span class="cart-price cart-column">${JSON.stringify.cart.price}</span>
//     `
//     cartRow.innerHTML = cartRowContents
//     cartItems.append(cartRow)
//     cartRow.getElementsByClassName('remove')[0].addEventListener('click', removeCartItem)
// }


// function removeCartItem(event) {
//     var buttonClicked = event.target
//     buttonClicked.parentElement.parentElement.remove()
//     updateCartTotal()
// }


// function updateCartTotal() {
//     var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//     var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//     var total = 0
//     for (var i = 0; i < cartRows.length; i++) {
//         var cartRow = cartRows[i]
//         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
//         var price = parseFloat(priceElement.innerText.replace('$', ''))
//         total = price
//     }
//     document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
// }


// function ready() {
//     var removeCartItemBtn = document.getElementsByClassName('remove')
//     for (var i=0; i < removeCartItemBtn.length; i++) {
//         var button = removeCartItemBtn[i]
//         button.addEventListener('click', removeCartItem)
//     }
//     var addToCartButtons = document.getElementsByClassName('shop-item-button')
//     for (var i = 0; i < addToCartButtons.length; i++) {
//         var button = addToCartButtons[i]
//         button.addEventListener('click', addToCartClicked)
//     }
// }


// function addToCartClicked(event) {
//     var button = event.target
//     var shopItem = button.parentElement.parentElement
//     var title = shopItem.getElementsByClassName('product-title')[0].innerText
//     var price = shopItem.getElementsByClassName('price')[0].innerText
//     var image = shopItem.getElementsByClassName('img')[0].src
//     addMovieToCart(image, title, price)
//     updateCartTotal()
// }


