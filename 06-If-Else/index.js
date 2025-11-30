let isLoggedIn = false;
const name = "Eren";
const password = "12345";

if(name === "Eren") {
    if(password === "12345") {
        isLoggedIn = true;
        console.log("Hesaba Giriş Yaptınız");
    } else {
        console.log("Parola Yanlış");
    }
} else {
    console.log("Kullanıcı Adı Ve Şifre Yanlış");
}
