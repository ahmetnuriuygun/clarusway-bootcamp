// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************
// for(let i=1; i<=10; i++){

//  console.log("MERHABA" , i );
// }

// //* 1 den N e kadar olan tamsayıların toplamını bulan kodu yazınız

// const n =   +prompt("N için kullanılacak sayıyı giriniz");
// let sayi=0;
// for (let i=1; i <= n ; i++) {

//  sayi=sayi+i;
//  // console.log(sayi);
// }
// console.log(sayi);

//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// const sayi=   +prompt("ASAL kontrolü için bir sayı giriniz");
// let asal ="evet";

// for(let i=2; i < sayi; i++) {

// if(sayi % i==0 ) {
//  asal="hayır"; break}

// }
// console.log(asal=="evet"?"asal sayıdır " :"asal sayı değildir");

//******************** WHILE ******************
//Ornek1: WHİLE İÇİN 0-100 arasında bir not giriniz, aksi durumlarda error msjı verip, tekrar not isteyiniz

// let nots=  +prompt("WHİLE İÇİN 0-100 ARASI SAYI GİRİNİZ")
// while (nots<0 || nots >100)
// {console.error("not 0-100 arasında olmalıdır") 
//  nots= +prompt("WHİLE İÇİN 0-100 ARASI SAYI GİRİNİZ");
// }

// console.log("girdiğiniz sayı 0-100 arasındadır");

//******************** DO-WHILE ******************
// let notlar;
// do {
//  notlar = +prompt("DO-WHİLE İÇİN 0-100 ARASI SAYI GİRİNİZ");
//  alert(notlar);

// } while (notlar < 0 || notlar > 100);


// console.log("girdiğiniz not", notlar);

//? ORNEK2: klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.
let grade;

do {
 grade= prompt("Lütfen 2. örnek için 1-100 arası sayı girin ")
 // console.log(grade);
} while (grade!="q");

console.log( grade);

//? : Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.