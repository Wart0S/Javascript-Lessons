let url = "https://www.youtube.com";
let youtube = "YouTube";
let deneme = "Merhaba Dünya";

let result;

// 1) Karakter Sayısı Bulma
result = url.length;
result = youtube.length;

// console.log(result);


// 2) Kaç Karakterden Oluşuyor
result = youtube.split(" ").length; //.length eklersek kaç karakter olduğunu gösterir.
result = deneme.split(" ");
result = url.split(".");

// console.log(result);


// 3) Başlangıç Kontrol
result = deneme.startsWith("Merhaba"); //Başlangıç Kelimeyi Kontrol Eder /True
result = deneme.startsWith("Dünya"); //Başlangıç Kelimeyi Kontrol Eder /False
result = deneme.startsWith("Merh"); //Başlangıç Kelimeyi Kontrol Eder /True

// console.log(result);


// 4) Kelime Kontrol

// console.log(deneme.indexOf("Dünya"));

// 5) Url Ve Değişken Birleştir

let newurl = `${url}/${youtube}`
console.log(newurl);
