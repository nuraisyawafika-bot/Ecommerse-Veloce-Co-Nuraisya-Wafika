let wishlist = JSON.parse(localStorage.getItem('VELOCE_WISHLIST')) || [];

const wishlistSidebar = document.getElementById('wishlist-sidebar');
const wishlistItemsContainer = document.getElementById('wishlist-items-container');
const wishlistCount = document.getElementById('wishlist-count');

function updateWishlistUI() {
    wishlistItemsContainer.innerHTML = "";
    wishlistCount.innerText = wishlist.length;

    if (wishlist.length === 0) {
        wishlistItemsContainer.innerHTML = `<p style="text-align:center; color:gray; padding-top:2rem;">Wishlist kosong.</p>`;
        return;
    }

    wishlist.forEach(item => {
        const wItem = document.createElement('div');
        wItem.classList.add('cart-item');
        wItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-detail" style="flex:1;">
                <h4>${item.name}</h4>
                <p style="color:var(--accent-color); font-weight:600; font-size:0.85rem;">Rp ${item.price.toLocaleString('id-ID')}</p>
                <button class="btn-add-cart" style="padding:0.3rem; font-size:0.8rem; margin-top:0.5rem;" onclick="addToCart(${item.id})">Pindahkan ke Keranjang</button>
            </div>
            <button class="btn-remove-item" onclick="toggleWishlist(${item.id})">❌</button>
        `;
        wishlistItemsContainer.appendChild(wItem);
    });

    localStorage.setItem('VELOCE_WISHLIST', JSON.stringify(wishlist));
}

window.toggleWishlist = function(id, element = null) {
    const product = products.find(p => p.id === id);
    const index = wishlist.findIndex(item => item.id === id);

    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(product);
    }
    updateWishlistUI();
    if(typeof filterProducts === 'function') filterProducts(); 
};