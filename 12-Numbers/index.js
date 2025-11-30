const username = "Eren";
const yas = 25;

let result;

result = 25;
result = Number("25");
result = parseInt("25");
result = parseFloat("25.3");
result = isNaN("32");      //Numara İse False Verir.
result = isNaN("32fea")    //Numara Değil İse True Verir.

let number = 120.359130

result = number.toPrecision(7);
result = number.toFixed(2);
result = Math.round(43.2);  //Yuvarlıyor
result = Math.ceil(3.1);   //Her Zaman Bir Sonraki Sayıya Yuvarlıyor
result = Math.floor(54.31293913919);
result = Math.pow(4, 2);   //Sayının Karesini Alma İşlemi
result = Math.pow(5, 3);   //Sayının Küpünü Alma İşlemi
result = Math.sqrt(25);   //Sayının Karakökünü Alma İşlemi
result = Math.abs(-241041);  //Sayının Mutlak Değerini Alma İşlemi
result = Math.max(10,5,231,64,8973,32,64523,1431,21);  //En Büyük Sayıyı Bulma İşlemi
result = Math.min(10,5,231,64,8973,32,64523,1431,21);  //En Küçük Sayıyı Bulma İşlemi

console.log(result);
