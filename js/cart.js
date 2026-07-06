let cart = JSON.parse(localStorage.getItem('VELOCE_CART')) || [];

const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartCount = document.getElementById('cart-count');

function updateCartUI() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    let itemsQuantity = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        itemsQuantity += item.quantity;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-detail" style="flex:1;">
                <h4>${item.name}</h4>
                <p style="color:var(--accent-color); font-weight:600; font-size:0.85rem;">Rp ${item.price.toLocaleString('id-ID')}</p>
                <div class="cart-item-qty">
                    <button onclick="changeQty(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQty(${item.id}, ${item.quantity + 1})">+</button>
                    <button class="btn-remove-item" onclick="removeFromCart(${item.id})">Hapus</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartTotalPrice.innerText = `Rp ${total.toLocaleString('id-ID')}`;
    cartCount.innerText = itemsQuantity;
    localStorage.setItem('VELOCE_CART', JSON.stringify(cart));
}

window.addToCart = function(id) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    cartSidebar.classList.add('active'); 
    if(typeof wishlistSidebar !== 'undefined') wishlistSidebar.classList.remove('active');
};

window.changeQty = function(id, newQty) {
    if (newQty <= 0) {
        removeFromCart(id);
        return;
    }
    const item = cart.find(item => item.id === id);
    if (item) item.quantity = newQty;
    updateCartUI();
};

window.removeFromCart = function(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
};