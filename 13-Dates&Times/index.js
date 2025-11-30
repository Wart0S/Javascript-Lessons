let tarih = new Date();

let result;

//! Get Methods

result = tarih.getDate();   // Gün Bilgisi
result = tarih.getDay();  //Hangi Günde Olduğu Bilgisi Örnek= 0-Pazar, 1-Pazartesi, 2-Salı, 3-Çarşamba
result = tarih.getFullYear(); //Güncel Yıl Bilgisi
result = tarih.getHours();   //Saat Bilgisi
result = tarih.getMinutes(); //Dakika Bilgisi
result = tarih.getSeconds(); //Saniye Bilgisi
result = tarih.getTime();  //Milisaniye Bilgisi


//! Set Methods
tarih.setFullYear(2030);  //Yıl Değiştirme
tarih.setMonth(3);  //Ay Değiştirme
tarih.setDate(15);  //Gün Değiştirme

result = tarih;


//! Birth Day
let dogumtarihi = new Date(2003,5,11);    //Yukarıda Tarihi 2030 Yaptık Ona Göre Sonuç Veriyor
result = tarih.getFullYear() - dogumtarihi.getFullYear();




console.log(result);

