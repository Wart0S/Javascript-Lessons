const isim = "Enes";
const soyisim = "Yılmaz";
const yas = 19;
const sehir = "İstanbul";
const meslek = "Software Developer";

const bio = "Adım " + isim + 
            " Soyadım " + soyisim + 
            " Yaşım " + yas + 
              " " + sehir + "'da Yaşıyorum " +
             meslek ;


// !Backtick
const newbio = `Benim Adım ${isim} Soyadım ${soyisim}. ${sehir}'da Yaşıyorum. ${yas} Yaşındayım. ${meslek} Olarak Çalışıyorum.`;

console.log(newbio);
