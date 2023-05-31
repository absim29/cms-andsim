if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemBtn = document.getElementsByClassName('remove')
    for (var i=0; i < removeCartItemBtn.length; i++) {
        var button = removeCartItemBtn[i]
        button.addEventListener('click', removeCartItem)
    }
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        total = price
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('product-title')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var image = shopItem.getElementsByClassName('img')[0].src
    addMovieToCart(image, title, price)
    updateCartTotal()
}

function addMovieToCart(image, title, price) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartRowContents = `
        <div class="cart-item cart-column">
        <img src="${movie.image}" alt="Cover image of the movie" class="cartimg"> 
        <span class="cart-item-title">${movie.title}</span>
        <button class="cta remove">X</button>
        </div>
        <span class="cart-price cart-column">${movie.price}</span>
    `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('remove')[0].addEventListener('click', removeCartItem)
}
