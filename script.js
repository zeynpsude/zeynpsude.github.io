function hesapla() {
    // Inputlardan değerleri alalım
    let ad = document.getElementById("adSoyad").value;
    let vize = parseFloat(document.getElementById("vizeNotu").value);
    let final = parseFloat(document.getElementById("finalNotu").value);

    // Basit bir hata kontrolü
    if (isNaN(vize) || isNaN(final) || ad === "") {
        alert("Lütfen tüm alanları geçerli değerlerle doldurun.");
        return;
    }

    // Ortalama hesaplama (%40 vize, %60 final)
    let ortalama = (vize * 0.4) + (final * 0.6);

    // Harf notu belirleme
    let harf = "";
    if (ortalama >= 90) harf = "AA";
    else if (ortalama >= 80) harf = "BA";
    else if (ortalama >= 70) harf = "BB";
    else if (ortalama >= 60) harf = "CB";
    else if (ortalama >= 50) harf = "CC";
    else if (ortalama >= 40) harf = "DC";
    else harf = "FF";

    // Durum belirleme (50 ve üzeri geçti)
    let durum = ortalama >= 50 ? "Geçti" : "Kaldı";

    // Sonuçları ekrana yazdırma
    document.getElementById("resAdSoyad").innerText = ad;
    document.getElementById("resOrtalama").innerText = ortalama.toFixed(2);
    document.getElementById("resHarf").innerText = harf;
    document.getElementById("resDurum").innerText = durum;

    // Sonuç kutusunu görünür yap
    document.getElementById("sonucKutusu").style.display = "block";
}