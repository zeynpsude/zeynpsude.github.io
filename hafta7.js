// Elemanlara Erişim
const temaButonu = document.getElementById('temaButonu');
const form = document.getElementById('etkinlikFormu');
const sonucAlani = document.getElementById('sonucAlani');

// 1. Etkileşim: Tema Değiştirme [cite: 57]
temaButonu.addEventListener('click', function() {
    // Body sınıflarını değiştir [cite: 28]
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
    
    // Navbar rengini de güncelle
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('navbar-light');
    navbar.classList.toggle('bg-light');
    navbar.classList.toggle('navbar-dark');
    navbar.classList.toggle('bg-dark');

    // Buton metnini güncelle
    if (document.body.classList.contains('bg-dark')) {
        temaButonu.textContent = "Aydınlık Temaya Geç";
        temaButonu.classList.replace('btn-warning', 'btn-light');
    } else {
        temaButonu.textContent = "Koyu Temaya Geç";
        temaButonu.classList.replace('btn-light', 'btn-warning');
    }
});

// 2. Etkileşim: Form Verilerinden Özet Üretme [cite: 44]
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Sayfa yenilenmesini engelle 

    // Form değerlerini .value ile al [cite: 25]
    const adSoyad = document.getElementById('adSoyad').value.trim();
    const email = document.getElementById('email').value.trim();
    const bolum = document.getElementById('bolum').value.trim();
    const sinif = document.getElementById('sinif').value;
    const mesaj = document.getElementById('mesaj').value.trim();
    const onay = document.getElementById('onay').checked;

    // Koşul kullanarak eksik alan kontrolü yapma [cite: 26, 55]
    if (!adSoyad || !email || !bolum || !sinif || !onay) {
        alert("Lütfen zorunlu alanları doldurun ve onay kutusunu işaretleyin!");
        return;
    }

    // Başarılı durumda sonuç alanına yeni içerik basma [cite: 27, 56]
    sonucAlani.innerHTML = `
        <div class="card border-success shadow-sm rounded-4 p-4">
            <h4 class="text-success fw-bold">Başvuru Özeti Oluşturuldu!</h4>
            <hr>
            <div class="row">
                <div class="col-sm-6"><strong>Ad Soyad:</strong> ${adSoyad}</div>
                <div class="col-sm-6"><strong>E-posta:</strong> ${email}</div>
                <div class="col-sm-6 mt-2"><strong>Bölüm:</strong> ${bolum}</div>
                <div class="col-sm-6 mt-2"><strong>Sınıf:</strong> ${sinif}</div>
                <div class="col-12 mt-3 text-muted small italic"><strong>Mesaj:</strong> ${mesaj || 'Mesaj bırakılmadı.'}</div>
            </div>
        </div>
    `;
});