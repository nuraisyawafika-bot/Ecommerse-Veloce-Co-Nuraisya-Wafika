const productsContainer = document.getElementById('products-container');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const cartToggleBtn = document.getElementById('cart-toggle-btn');
const wishlistToggleBtn = document.getElementById('wishlist-toggle-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const closeWishlistBtn = document.getElementById('close-wishlist-btn');
const detailModal = document.getElementById('detail-modal');
const closeDetailModal = document.getElementById('close-detail-modal');
const detailProductBody = document.getElementById('detail-product-body');

// Helper Bintang
function generateStars(rating) {
    let stars = '';
    for(let i = 1; i <= 5; i++) {
        stars += i <= rating ? '★' : 'double-star-empty'; // Fallback text safely
    }
    return stars.replace(/double-star-empty/g, '☆');
}

// Render Utama
function renderProducts(filteredProducts) {
    productsContainer.innerHTML = "";
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 2rem;">Produk tidak ditemukan.</p>`;
        return;
    }
    
    filteredProducts.forEach(product => {
        const isWishlisted = wishlist.some(item => item.id === product.id);
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <button class="btn-wishlist ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${product.id}, this)">
                ${isWishlisted ? '❤️' : '🤍'}
            </button>
            <div>
                <img src="${product.img}" alt="${product.name}" class="product-img" onclick="showProductDetail(${product.id})">
                <div class="product-info">
                    <p class="product-category">${product.category}</p>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-rating">${generateStars(product.rating)}</div>
                    <p class="product-price">Rp ${product.price.toLocaleString('id-ID')}</p>
                </div>
            </div>
            <div style="padding: 0 1.2rem 1.2rem 1.2rem">
                <button class="btn-add-cart" onclick="addToCart(${product.id})">Tambah Ke Keranjang</button>
            </div>
        `;
        productsContainer.appendChild(card);
    });
}

function filterProducts() {
    const keyword = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    
    const result = products.filter(p => {
        const matchesKeyword = p.name.toLowerCase().includes(keyword);
        const matchesCategory = category === 'all' || p.category === category;
        return matchesKeyword && matchesCategory;
    });
    renderProducts(result);
}

searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);

// Modal Detail & Rating Interaktif
window.showProductDetail = function(id) {
    const product = products.find(p => p.id === id);
    detailProductBody.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <div>
            <p style="text-transform: uppercase; color: gray; font-size: 0.8rem; margin-bottom:0.2rem;">Kategori: ${product.category}</p>
            <h2 style="margin-bottom: 0.5rem; font-size:1.4rem;">${product.name}</h2>
            <div class="product-rating" style="font-size:1.2rem; cursor:pointer; margin-bottom:0.5rem;">
                <span onclick="rateProduct(${product.id}, 1)">${product.rating >= 1 ? '★' : '☆'}</span>
                <span onclick="rateProduct(${product.id}, 2)">${product.rating >= 2 ? '★' : '☆'}</span>
                <span onclick="rateProduct(${product.id}, 3)">${product.rating >= 3 ? '★' : '☆'}</span>
                <span onclick="rateProduct(${product.id}, 4)">${product.rating >= 4 ? '★' : '☆'}</span>
                <span onclick="rateProduct(${product.id}, 5)">${product.rating >= 5 ? '★' : '☆'}</span>
            </div>
            <h3 style="color: var(--accent-color); margin-bottom: 1rem;">Rp ${product.price.toLocaleString('id-ID')}</h3>
            <p style="line-height: 1.5; margin-bottom: 1.5rem; color: #475569; font-size:0.9rem;">${product.desc}</p>
            <button class="btn-add-cart" onclick="addToCart(${product.id}); detailModal.classList.remove('active');">Tambah Ke Keranjang</button>
        </div>
    `;
    detailModal.classList.add('active');
};

window.rateProduct = function(id, score) {
    const product = products.find(p => p.id === id);
    if(product) {
        product.rating = score;
        showProductDetail(id);
        filterProducts();
    }
};

closeDetailModal.addEventListener('click', () => detailModal.classList.remove('active'));

// Event Drawer Toggles
cartToggleBtn.addEventListener('click', () => {
    cartSidebar.classList.toggle('active');
    wishlistSidebar.classList.remove('active');
});
wishlistToggleBtn.addEventListener('click', () => {
    wishlistSidebar.classList.toggle('active');
    cartSidebar.classList.remove('active');
});
closeCartBtn.addEventListener('click', () => cartSidebar.classList.remove('active'));
closeWishlistBtn.addEventListener('click', () => wishlistSidebar.classList.remove('active'));

window.addEventListener('click', (e) => {
    if (e.target === checkoutModal) checkoutModal.classList.remove('active');
    if (e.target === detailModal) detailModal.classList.remove('active');
});

// Jalankan sistem saat file selesai dimuat
renderProducts(products);
if(typeof updateCartUI === 'function') updateCartUI();
if(typeof updateWishlistUI === 'function') updateWishlistUI();