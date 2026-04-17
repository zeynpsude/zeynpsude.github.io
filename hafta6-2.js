function donustur() {
    const deger = parseFloat(document.getElementById("inputValue").value);
    const tip = document.getElementById("conversionType").value;
    const sonucBox = document.getElementById("resultBox");
    const sonucText = document.getElementById("resultValue");

    if (isNaN(deger)) {
        alert("Lütfen geçerli bir sayı giriniz.");
        return;
    }

    let sonuc = 0;

    switch (tip) {
        case "m-km":
            sonuc = deger / 1000;
            break;
        case "c-f":
            sonuc = (deger * 9/5) + 32;
            break;
        case "kg-gr":
            sonuc = deger * 1000;
            break;
        default:
            sonuc = 0;
    }

    // Sonucu biçimlendir (Binlik ayracı için yerel format kullanıldı)
    sonucText.innerText = sonuc.toLocaleString('tr-TR');
    
    // Sonuç kutusunu görünür yap
    sonucBox.style.display = "block";
}