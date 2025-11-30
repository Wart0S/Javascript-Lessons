let yas = 15;
let mezuniyet = "Lise";

if (yas >= 18 && (mezuniyet == "Lise" || mezuniyet == "Üniversite")){
    console.log("Ehliyet Şartlarını Karşıladığın İçin Ehliyet Alabilirsin.");
    
}else if(yas < 18){
    console.log("Ehliyet İçin Yaşınız Yetmiyor");
    
}

else{
    console.log("Ehliyet Şartlarını Karşılayamadığın İçin Ehliyet Alamassınız.");

}