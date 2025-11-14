/*

Öğrenci Bilgileri

1-Hakan Yilmaz
Doğum Tarihi: 2001
Bilgisayar Notları: 40, 50, 96

2-Eylül Işik
Doğum Tarihi: 2005
Bilgisayar Notları: 50,70,44

2-Rana Gün
Doğum Tarihi: 2004
Bilgisayar Notları: 10,42,92


Geçer Not: 50

Programın Şartları:
1-Öğrenceilerin Yaşlarını Hesaplayınız
2-Öğrencilerin Ders Ortalamalarını Hesaplayınız
3-Öğrencilerin Dersten Geçip Geçmediğini Hesaplayınız



*/



// 1) Yaş Hesaplama

let yil = new Date().getFullYear();
let geçme_notu = 50;

let ogrenci1 = "Hakan Yilmaz"
let ogrenci1_dt = 2001
let ogrenci1_yas = yil - ogrenci1_dt;





let ogrenci2= "Eylül Işik"
let ogrenci2_dt = 2005
let ogrenci2_yas = yil - ogrenci2_dt




let ogrenci3= "Rana Gün"
let ogrenci3_dt = 2004
let ogrenci3_yas = yil - ogrenci3_dt

// console.log(ogrenci1_yas);



// 2) Ders Ortalama Hesaplama

let ogrenci1_dersnot1 = 40;
let ogrenci1_dersnot2 = 50;
let ogrenci1_dersnot3 = 96;
let ogrenci1_dersnotortalama = (parseInt(ogrenci1_dersnot1 + ogrenci1_dersnot2 + ogrenci1_dersnot3) / 3);



let ogrenci2_dersnot1 = 50;
let ogrenci2_dersnot2 = 70;
let ogrenci2_dersnot3 = 44;
let ogrenci2_dersnotortalama = (parseInt(ogrenci2_dersnot1 + ogrenci2_dersnot2 + ogrenci2_dersnot3) / 3);


let ogrenci3_dersnot1 = 10;
let ogrenci3_dersnot2 = 42;
let ogrenci3_dersnot3 = 92;
let ogrenci3_dersnotortalama = (parseInt(ogrenci3_dersnot1 + ogrenci3_dersnot2 + ogrenci3_dersnot3) / 3);


// console.log(ogrenci3_dersnotortalama);



// 3) Ders Durumunu Hesaplayınız

let ogrenci1_dersdurum = ogrenci1_dersnotortalama > geçme_notu;   //true

let ogrenci2_dersdurum = ogrenci2_dersnotortalama > geçme_notu;   //ture

let ogrenci3_dersdurum = ogrenci3_dersnotortalama > geçme_notu;   //false

console.log(ogrenci1_dersdurum);

console.log(ogrenci2_dersdurum);

console.log(ogrenci3_dersdurum);

