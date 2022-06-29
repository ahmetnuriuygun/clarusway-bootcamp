// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");
//* Örnek1:
//*************************************************************/
const topla=(a,b)=>a+b;

 console.log(   topla(3,5));

 //* Örnek2:Us al
//****************************
const usAl=(t,u)=>t**u;

console.log(usAl(7,2));

//* Örnek3:Çift mi tek mi kontrol fonksiyon
//****************************

const ciftMi=(sayi)=> (sayi%2==0 ? "çift" : "tek" );

  console.log( ciftMi(18));
  console.log( ciftMi(17));


  //* Örnek4:Menu fonksiyon
  // ! ok(arrow) fonksiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmalıyız
//****************************

const menu=()=>{
console.log("===========================");
console.log("     JAVASCRİPT DERSİ      ");
console.log("===========================");
}

menu();


//* Örnek5: Bilgi Ver fonksiyonu
//********************************************************

const bilgiVer = (ad, soyad, dogum) =>
  //*1.yol
// {

  //return  `Adım: ${ad} , Soyadım: ${soyad} ve yasım: ${2022-dogum}`

  // }
  // console.log(bilgiVer("osman","kara",1979));

  //*2.yol
  `Adım: ${ad} , Soyadım: ${soyad} ve yasım: ${2022 - dogum}`;
  
  console.log(bilgiVer("osman", "kara", 1979));

  //* Örnek6:silindirin hacmini hesaplayan fonksiyon
//********************************************************
// const r= +prompt("yarıcap giriniz");
// const h= +prompt("yükseklik giriniz");

const hacimHesapla=(r,h)=> Math.PI*r*r*h   ;

 console.log(hacimHesapla(3, 5));

 console.log(Math.round(hacimHesapla(3, 5)));

 //*toFixed(x): virgülden sonra x adet sayıyı gösterir
 
 console.log(hacimHesapla(3, 5).toFixed(2));
