let customer1 = {
    ad: "Enes",
    soyad: "Yılmaz",
    yas: 19,
    sehir: "Ankara",
    products: {
        phone: "(555) 555 5555",
    }
};

let customer2 = {
    ad: "Nisa",
    soyad: "Işık",
    yas: 19,
    sehir: "Samsun",
};

let customer3 = {
    ad: "Masal",
    soyad: "Gün",
    yas: 25,
    sehir: "Artvin",
};

let customer4 = {
    ad: "Akif",
    soyad: "Çolak",
    yas: 34,
    sehir: "Çanakkale",
};


let musteriler =[
    customer1,
    customer2,
    customer3,
    customer4
]

let urunler =[
    {
        "urunadı": "Huawei",
        "fiyatı": 100
    },

    {
        "urunadı": "Apple",
        "fiyatı": 300
    },

    {
        "urunadı": "Samsung",
        "fiyatı": 200
    },
]

console.log(urunler[2].fiyatı);
