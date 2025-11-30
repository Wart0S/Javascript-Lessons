//! Fonkiyonlar Kendi Scope Alanlarına Sahiptirler


var kullanici = "global scope: Emin";

function isimYazdir() {
    var kullanici = "function scope: Beyza";
    console.log(kullanici);
}

if (true) {
    var kullanici = "if scope: Kenan";
    console.log(kullanici);
}

console.log(kullanici);
isimYazdir();
