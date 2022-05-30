// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const sucuk = 100;
const sakiz = 5;
const kola = 10;

let toplamFiyat = sucuk + sakiz + kola;
console.log(toplamFiyat);


// Bir arttır
toplamFiyat++
console.log(toplamFiyat);

// 10 arttır
toplamFiyat+=10;
console.log(toplamFiyat);//126

//? + operatörü String Concatination işlemi de yapar.
const ad = "ahmet";
const soyAd = "Can";
console.log(ad  + soyAd);

//* String Concatination bir number ve string toplama yapılırsa concatination yapar.
const s1 = 5;
  s2 = "3";
  console.log(s1+s2);

//*çıkarma yapar (string ve number da çıkarma işlemi uygulanırsa)

console.log(s1-s2);
console.log(s2-s1);
const s3="iki";

const sonuc = s2 - s3;
console.log(sonuc); //NaN not a number

const dogumTarihi=1979;
const isim="Ashley";

console.log(isim + " "+ (2022-dogumTarihi ) + " " +"yasındadır");

//!Template literals 

console.log(`${isim} ${2022-dogumTarihi} yasındadır`);


//*ARTIRMA- AZALTMA

let a=5;

 console.log(a++); 
console.log(a);
console.log(++a);
console.log(a);

console.log("*****************");
let b=5; 
 console.log(b--);
 console.log(b);
 console.log(--b);
 console.log(b);

 console.log("*****************");
 let d=--b;
 console.log(d);
 console.log(b);
 
 d=b--;
  
  console.log(b);

  console.log(d);
  
// d yi 5 arttır d=d+5;
  d+=5;
  console.log(d);





