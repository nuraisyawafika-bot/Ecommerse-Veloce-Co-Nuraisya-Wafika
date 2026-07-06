# ⌚ Veloce Co. - Premium E-Commerce Platform ✨

Aplikasi *front-end* web e-commerce premium berbasis web responsive yang dirancang khusus untuk katalog jam tangan eksklusif. Proyek ini dikembangkan secara modular untuk memastikan struktur kode bersih, rapi, dan siap diintegrasikan dengan sistem backend maupun platform *live hosting* seperti GitHub Pages.

---

## 💼 I. Ikhtisar Bisnis (Business Overview)

### 🏢 1. Profil Bisnis & Proposisi Nilai
* **Nama Bisnis:** Veloce Co.
* **Deskripsi Bisnis:** Platform e-commerce ritel modern yang mengurasi dan menyediakan jam tangan mewah, kasual-sport, dan klasik orisinal dari berbagai merek global ternama dengan jaminan garansi internasional.
* **Proposisi Nilai (Value Proposition):** 
    * *Authenticity Guaranteed:* Jaminan 100% keaslian produk dengan sertifikasi resmi.
    * *Seamless Premium Experience:* Antarmuka pengguna yang mewah, minimalis, cepat, dan responsif.
    * *Secure Sandbox Transaction:* Simulasi gerbang pembayaran terenkripsi untuk membangun kepercayaan pelanggan sebelum bertransaksi.

### 🎯 2. Target Pasar & Segmentasi Pelanggan
* **Segmentasi Demografis:** Pria dan wanita berusia 21–55 tahun, berpenghasilan menengah ke atas (profesional, eksekutif, pengusaha, kolektor).
* **Segmentasi Geografis:** Area urban dan sub-urban besar di Indonesia (Jabodetabek, Surabaya, Bandung, Medan, dll).
* **Segmentasi Psikografis:** Individu yang menghargai ketepatan waktu, status sosial, estetika mode tingkat tinggi, serta menganggap jam tangan sebagai investasi penampilan sekaligus instrumen fungsional.

### 📊 3. Analisis Pasar & Lanskap Pesaing
* **Analisis Pasar Singkat:** Pasar jam tangan premium di Indonesia terus berkembang seiring dengan meningkatnya kesadaran terhadap gaya hidup mewah dan kebutuhan representasi profesional. Penjualan digital menjadi saluran krusial untuk menjangkau konsumen di luar kota-kota utama.
* **Analisis Pesaing:**
    * *Pesaing Langsung:* Jamtangan.com (Maju Mandiri) – Kuat di pasar *mass-market* dengan diskon besar tetapi UI kurang terasa eksklusif.
    * *Pesaing Tidak Langsung:* Chrono24 – Platform global pasar sekunder yang besar, namun memiliki kendala pada biaya pengiriman internasional, pajak bea cukai, serta kerumitan verifikasi lokal.
    * *Posisi Veloce Co.:* Mengisi celah (*gap*) dengan menawarkan UI/UX ritel yang mewah layaknya butik fisik, kurasi produk terfokus, dan pengalaman transaksi lokal yang mulus.

### 📦 4. Strategi Manajemen Produk & Katalog
Katalog dikelola secara modular pada file data terpisah (`js/products.js`), terbagi dalam 3 kategori utama:
1. **Luxury:** Jam tangan mekanis/automatic premium berlapis material berharga (contoh: *Veloce Chrono Gold*, *Rolex Air-King*).
2. **Sport:** Jam tangan dengan durabilitas tinggi, fitur taktis, atau integrasi pintar (contoh: *Fossil Machine*, *Apex Smart Sport Pro*).
3. **Classic:** Desain minimalis, tipis, abadi dengan strap kulit premium (contoh: *Classic Heritage Minimalist*).

*Strategi Visual & Deskripsi:* Setiap produk disajikan dengan foto resolusi tinggi berlatar belakang estetis (*lifestyle asset*) dan dilengkapi deskripsi produk yang menonjolkan keunggulan material (seperti *sapphire crystal*, kulit Italia, *carbon fiber*) untuk memicu keinginan membeli (*impulse buying*).

### 💰 5. Model Bisnis & Aliran Pendapatan
* **Model Bisnis:** B2C (Business-to-Consumer) Ritel Online Direct. Veloce Co. membeli stok langsung dari distributor resmi (*authorized distributor*) dalam volume besar untuk mendapatkan harga grosir, lalu menjualnya kembali ke konsumen akhir via platform digital.
* **Aliran Pendapatan (Revenue Streams):**
    * Keuntungan margin langsung dari penjualan unit jam tangan (*Core Product Sales*).
    * Penjualan layanan bernilai tambah (*Value-Added Services*) seperti perpanjangan masa garansi kustom (*extended warranty*) dan paket kotak hadiah premium (*exclusive gift wrapping*).

### 🏷️ 6. Strategi Harga, Promosi, dan Diskon
* **Strategi Harga:** Menggunakan *Value-Based Pricing* untuk lini Luxury (menetapkan harga tinggi sesuai persepsi prestise produk) dan *Competitive Pricing* untuk lini Sport dan Classic.
* **Strategi Promosi & Diskon:**
    * *Scarcity & Urgency Strategy:* Menampilkan tag eksklusif dan jumlah stok terbatas pada detail produk.
    * *Seasonal Campaign:* Pemberian potongan harga atau voucer pengiriman gratis pada periode hari belanja nasional atau hari raya besar yang dikalkulasi otomatis pada *State Management* aplikasi.

### 💳 7. Proses Checkout & Simulasi Payment Gateway
* **Gerbang Pembayaran:** Terintegrasi dengan **Simulasi Sandbox Midtrans API**.
* **Alur Kerja Transaksi:**
    1. Pengguna memilih produk dan meninjau pesanan di komponen `js/cart.js`.
    2. Tombol checkout memicu modal formulir pengiriman di `js/checkout.js`.
    3. Saat formulir dikirim (*submit*), sistem memicu `.loading-overlay` yang menyimulasikan proses jabat tangan (*handshake*) protokol token Midtrans SNAP selama 3 detik.
    4. Setelah simulasi otentikasi selesai, aplikasi mengosongkan status keranjang secara aman di `localStorage` dan menampilkan notifikasi sukses beserta petunjuk instruksi transfer bayar Virtual Account/QRIS.

### 🔒 8. Rencana SEO, Keamanan, dan Pemeliharaan
* **Rencana SEO (Search Engine Optimization):**
    * Penerapan tag meta semantik (Title, Description, Keywords) yang dioptimasi untuk kata kunci "Jam Tangan Mewah Jakarta", "Premium Watch Indonesia".
    * Penyediaan kerangka data terstruktur *Open Graph* untuk optimasi tampilan pratinjau tautan ketika dibagikan ke media sosial.
* **Rencana Keamanan:**
    * Penggunaan enkripsi SSL/HTTPS pada hosting produksi (GitHub Pages secara bawaan sudah menyediakan SSL).
    * Sanitasi input formulir pada sisi klien untuk mencegah injeksi teks skrip dasar.
    * Pemisahan *State Logic* internal agar data transaksi jangka pendek tidak mudah dimanipulasi dari konsol browser luar.
* **Rencana Pemeliharaan (Maintenance):**
    * Pembersihan berkala berkas sampah memori pada `Web Storage API / LocalStorage`.
    * Pemberian pembaruan basis data array produk di `products.js` secara teratur tanpa mengganggu jalannya struktur DOM inti halaman web.

### 📊 9. Penggunaan Data Analitik untuk Pengambilan Keputusan
* **Integrasi Tracking:** Platform mengintegrasikan cuplikan kode pelacakan *Google Analytics* tag dummy (`G-DUMMY12345`) di dalam `index.html`.
* **Metrik Keputusan Bisnis:**
    * *Data Pencarian & Filter:* Menganalisis kata kunci yang sering diketik konsumen di kolom pencarian untuk menentukan tren produk apa yang harus ditambah ketersediaan stoknya.
    * *Conversion Rate & Cart Abandonment:* Memantau perbandingan jumlah pengguna yang memasukkan produk ke keranjang belanja dengan jumlah pengguna yang menyelesaikan formulir checkout guna mengevaluasi efektivitas harga atau alur antarmuka aplikasi.
    * *User Engagement (Wishlist Data):* Memanfaatkan data kuantitas produk favorit di wishlist untuk merancang program promo/diskon yang disasarkan secara spesifik pada produk dengan minat tinggi tersebut.

---

## 🛠️ II. Penjelasan Teknis & Arsitektur Kode

### 📂 Struktur Repositori (GitHub Root Structure)
Semua file diletakkan pada tingkat terluar (*root*) tanpa dibungkus folder induk tambahan agar jalur (*path*) pemanggilan file relatif pada GitHub Pages dapat terintegrasi dengan sempurna:

```text
📦 veloce-ecommerce (GitHub Repository Root)
 ├── 📄 index.html              # Kerangka utama halaman (DOM Layout) & Integrasi Analytics Tag
 ├── 📄 README.md               # Dokumentasi, analisis bisnis, dan rencana operasional proyek
 ├── 📂 css/                    
 │   └── 📄 styles.css          # Desain tata letak grid, tema warna, & arsitektur animasi
 ├── 📂 js/                     
 │   ├── 📄 products.js         # Array basis data produk lokal (Mock Data Katalog)
 │   ├── 📄 cart.js             # Logika operasional & sinkronisasi Keranjang Belanja
 │   ├── 📄 wishlist.js         # Logika operasional & sinkronisasi Daftar Keinginan
 │   ├── 📄 checkout.js         # Manajemen form order & simulasi pemuatan transaksi Sandbox
 │   └── 📄 app.js              # Otak aplikasi, penanganan Event Listener, fitur pencarian, & filter
 └── 📂 assets/                 
     └── 📂 images/             # Folder penyimpanan aset gambar produk dan latar belakang secara lokal
```

---

## 💻 III. Teknologi yang Digunakan

* **HTML5:** Digunakan untuk menyusun struktur semantik halaman web yang SEO-friendly.
* **CSS3 (Modern Layout):** 
    * *CSS Variables:* Mempermudah pengelolaan palet warna global.
    * *Flexbox & CSS Grid:* Diimplementasikan untuk membangun sistem grid katalog produk otomatis (*auto-fill*) dan komponen navigasi adaptif.
    * *Media Queries:* Untuk optimasi tampilan responsif layar seluler.
* **Vanilla JavaScript (ES6+):** Digunakan secara modular untuk menangani logika aplikasi, manipulasi DOM, manajemen status (*State Management*), serta integrasi penyimpanan lokal (*Web Storage API / LocalStorage*).
* **Google Fonts:** Menggunakan *font family* Poppins untuk menunjang tipografi antarmuka yang modern, bersih, dan eksklusif.

---

## 👤 IV. Pengembang (Developer Profile)

* **Nama Pengembang:** Nuraisya Wafika Hasanah
* **Tujuan Proyek:** Proyek ini dikembangkan bertujuan untuk mempraktikkan keterampilan pengembangan web *front-end* dan desain UI/UX, menguji fungsionalitas tata letak responsif pada studi kasus *e-commerce* retail, serta membangun kerangka aplikasi web modular yang bersih dan siap di-host melalui GitHub Pages.
