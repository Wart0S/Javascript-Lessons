let prodacts = ["İphone","Samsung","Huawei","Xiaomi"];
let result;


result = prodacts;
// result = prodacts.toString();    //! Stringe Çevirme
// result = prodacts.join("/");     //! Ayırma
// result = prodacts.shift();       //! İlk Elemanı Siler
// result = prodacts.pop();         //! Son Elemanı Siler
// result = prodacts.push("Asus");  //! Dizinin Sonuna Eleman Ekler
// result = prodacts.unshift("Tecno"); //! Dizinin Başına Eleman Ekler  

//------------------------------------------------------------------------
//! Dizileri Birleştirme

let urunler1 = ["Tecno", "Apple"];
let urunler2 = ["Dell", "Casper"];
let urunler3 = ["Acer", "Huawei"];

// result = urunler1.concat(urunler2, urunler3);
// result = urunler1.splice(0, 0, urunler2); //! Ekleme İşlemi
// result = urunler1.splice(0, 0, "Elma"); //! Ekleme İşlemi
result = urunler1.splice(0, 2);  //! Silme İşlemi
//------------------------------------------------------------------------
console.log(result);
console.log(urunler1);

