let meyve = ["Elma", "Armut", "Muz", "Portakal"];

// console.log(meyve);

for(let i = 0 ; i < meyve.length; i++){
    // console.log(meyve[i]);
}


// --------------------------------------------

//! 0'dan 100'e Kadar Sayıları Yazdır

for(let i = 0; i < 100; i++){
    // console.log(i);
    
}
// --------------------------------------------

//! Sayı Toplama
let sayilar = [13,12,56,78,432,674,341,16];

let toplam = 0;
for (let i = 0; i < sayilar.length; i++){
    // console.log(toplam = toplam + sayilar[i]);
    
}

// --------------------------------------------
//! Sayı Toplama

let sayilar1 = [13,12,56,78,432,674,341,16];
toplam = 0;
for(let i in sayilar1){
    // console.log(toplam = toplam + sayilar1[i]);
    
}

// --------------------------------------------

//! Direkt Sayıları Alma

let sayilar2 = [13,12,56,78,432,674,341,16];
let toplam1 = 0;
for(let i of sayilar2){
    // console.log(toplam += i);
    
}

// --------------------------------------------

let users = [
    {
        "id" : 1,
        "ad" : "Enes",
        "soyad" : "Yılmaz",
        "sehir" : "Çanakkale",
        "email" : "ornek@gmail.com",
        "yas" : 19
    },
    {
        "id" : 2,
        "ad" : "Kerem",
        "soyad" : "Yılmaz",
        "sehir" : "Çanakkale",
        "email" : "ornek2@gmail.com",
        "yas" : 32
    },
    {
        "id" : 3,
        "ad" : "Nisa",
        "soyad" : "Yılmaz",
        "sehir" : "Çanakkale",
        "email" : "ornek3@gmail.com",
        "yas" : 23
    }
]

// console.log(users[0]);
// console.log(users[0].email);
// console.log(users[2].ad);

for(let i = 0; i < users.length; i++){
    // console.log(users[i].ad);
    // console.log(users[i].sehir);
    //  console.log(users[i].yas);
    
}
