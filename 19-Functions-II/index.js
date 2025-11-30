//! Basit Toplama Fonksiyonu

// function sayilartoplami(a, b) {
//     let toplam = a + b;
//     console.log("Sayıların Toplamı:",toplam);
    
// }

// sayilartoplami(5, 10);
// sayilartoplami(545, 120);

//! Gelişmiş Toplama Fonksiyonu
let toplam = 0;
function sayilartoplami(...sayilar) {
    for(let sayi of sayilar) {
        toplam += sayi;
    }
}

sayilartoplami(5, 10, 15, 20, 25, 30, 35, 40,341,431,341,31,34,67,49,423,4234,234,234,23,42,34,234,234);
// console.log(toplam);


//! Yaş Hesaplama 
function yashesapla(dogumyili){
    let yil = new Date().getFullYear()
    console.log(yil - dogumyili);
    
}
yashesapla(2003);

