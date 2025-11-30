let number1 = 10;
let number2 = 32;
let number3 = 41;
let result;

// 1) Aritmatik Operatörler
// +, -, *, /, %, ++, --

result = number1 + number3;
result = number1 - number2
result = number3 * number2
result = number1 / number2
result = number3 % number2
result = number2++;   //   32+1 = 33 
result = number2--;   //   33-1 = 32

//console.log(result);



// 2) Atama Operatörler
result = number1;
result += number2
result -= number2
result *= number2
result /= number2
result %= number2

// console.log(result);



// 3) Karşılaştırma Operatörler
// == , !=, ===, >, <, >=, <=,
result = number1 == number2;  //false
result = 10 == 10;  //true
result = 10 === "10"; //false
result = "33" === "33" //true

// console.log(result);






// 4) Mantıksal Operatörler
// &&: ve, ||: veya, !: tersi

// &&:   

//console.log(number1 === number2 && number1 > number2); //false

//console.log(number3 > number1 && number2 > number1); //true

// --------------------------------------------------------------------------


// ||:  Herhangi Birinde True Olması Yeterli 
                //false             //ture
//console.log(number1 > number3 || number3 == number3 );  //true


// ---------------------------------------------------------------------------

// !: Tersi, Değili
console.log(!(number1 > number2) && number2 > number1);
