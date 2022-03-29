if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', start)
} else {
    start()
}

function start() {
    var removePro = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removePro.length; i++) {
        var button = removePro[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addProduct = document.getElementsByClassName('products-button')
    for (var i = 0; i < addProduct.length; i++) {
        var button = addProduct[i]
        button.addEventListener('click', addProOnCart)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', finishShop)
}

function finishShop() {
    alert('Alışverişiniz için teşekkürler..')
    var cartItems = document.getElementsByClassName('cart-pro')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateShop()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateShop()
}

function quantityChanged(event) {
    var input = event.target
    if ( input.value <= 0) {
        input.value = 1
    }
    updateShop()
}

function addProOnCart(event) {
    var button = event.target
    var shoProduct = button.parentElement.parentElement
    var head = shoProduct.getElementsByClassName('products-head')[0].innerText
    var price = shoProduct.getElementsByClassName('products-price')[0].innerText
    var imageSrc = shoProduct.getElementsByClassName('products-photo')[0].src
    addItemToCart(head, price, imageSrc)
    updateShop()
    
}

function addItemToCart(head, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-pro')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == head) {
            alert('Zaten eklenilmiş ürün')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${head}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">Kaldır</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateShop() {
    var cartItemContainer = document.getElementsByClassName('cart-pro')[0]
    var cartInfo = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartInfo.length; i++) {
        var cartRow = cartInfo[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var ItemCount = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('TL', ''))
        var quantity = ItemCount.value
        total = total + (price * quantity)
    }
    
    document.getElementsByClassName('cart-total-price')[0].innerText = total + 'TL'
}