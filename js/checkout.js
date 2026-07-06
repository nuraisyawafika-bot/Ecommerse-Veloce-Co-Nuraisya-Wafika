const checkoutBtn = document.getElementById('checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const closeCheckoutModal = document.getElementById('close-checkout-modal');
const orderForm = document.getElementById('order-form');
const loadingOverlay = document.getElementById('loading-overlay');

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Keranjang Anda masih kosong!");
        return;
    }
    checkoutModal.classList.add('active');
});

closeCheckoutModal.addEventListener('click', () => checkoutModal.classList.remove('active'));

orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('customer-name').value;
    const email = document.getElementById('customer-email').value;
    const payment = document.getElementById('payment-method').value;

    checkoutModal.classList.remove('active');
    loadingOverlay.classList.add('active');

    // Putaran loading selama 3 detik
    setTimeout(() => {
        loadingOverlay.classList.remove('active');
        alert(`💳 Transaksi Sukses!\n\nHalo ${name}, pesanan Anda berhasil terdaftar di sandbox Veloce Co.\nSilakan bayar menggunakan mekanisme instruksi simulasi ${payment.toUpperCase()}.\nKwitansi virtual dikirim ke: ${email}`);
        
        cart = [];
        if(typeof updateCartUI === 'function') updateCartUI();
        cartSidebar.classList.remove('active');
    }, 3000);
});