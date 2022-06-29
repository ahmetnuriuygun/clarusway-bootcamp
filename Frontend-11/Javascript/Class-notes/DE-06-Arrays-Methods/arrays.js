// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

//! 1.Yöntem (Array Literal) - Tercih edilen yöntem
const yaslar = [30, 54, 22, 18, 5];
console.log(yaslar);
console.log(yaslar.length);

//! 2.Yöntem (Array Constructor)
const cars = new Array("BMW", "Mercedes", "Volvo");
console.log(cars);

const numbers = new Array(3, 2, 0);
console.log(numbers);

//10 elemanlı boş bir array tanımlama

const sayilar1=new Array(10)
console.log(sayilar1);

sayilar1[4]=123;
console.log(sayilar1);


//!hata, const keyword ü ile tanımlanmış bir diziye tamamiyle bir atama yapılamaz, içinde tek tek değişikliğe izin veriyor.
// yaslar=[1,2,3,4,5];
// console.log(yaslar);

const dogum=1980;

const isimler=[

"Ferhat", "Nurbaki","Enes", 2022-dogum, "Salih",true, 4.5, yaslar
]

console.log(isimler);

//*dizinin elemanlarına yazma (indisleme)

isimler[6]=false;
console.log(isimler);

//*nested erişim
console.log( isimler[7][1]);
console.log( isimler[isimler.length-1][1]);


// ?=========================================================
// ?                DİZİYİ DEĞİŞTİREN METODLAR (mutator)
// ?=========================================================
//*pop() dizinin son elemanını siler ve yazdırırsak sildiği elemanı döndürür
const meyveler = ["Elma","Erik","Armut","Muz","Kivi"]

const silinen=   meyveler.pop();

console.log(meyveler , "sildiğim eleman" , silinen);

//*shift() dizinin ilk elemanını siler ve yazdırırsak onu döndürür
const sil2= meyveler.shift();

console.log(meyveler, sil2);

//*push() dizinin sonuna eleman ekler , ve yazdırırsak dizinin güncel eleman sayısına döndürür

 const sayi= meyveler.push("Çilek","Kavun", "karpuz");

console.log(meyveler ,sayi);

//*unshift() dizinin başına eleman ekler ve dizi sayısını döndürür

meyveler.unshift("Ayva");
console.log(meyveler);

//*reverse() dizinin tamamını ters çevirir

meyveler.reverse();

console.log(meyveler);

const yeni = meyveler[4].split("").reverse();

console.log(meyveler);
console.log(yeni);

//*sort() , string ifadelerde alfabetik sıralar(ascıı değerlerine göre)
//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları yer değişirerek sıralama işlemini gerçleştirir.
const number=[3,5,1,10,22,55,77,231];
  number.sort();
console.log(number);

number.sort((a,b)=>a-b);

console.log(number);

meyveler.sort();
console.log(meyveler);
meyveler.reverse()

console.log(meyveler);



// ['Çilek', 'karpuz', 'Muz', 'Kavun', 'Erik', 'Ayva', 'Armut']


//*1.parametre dizinin index ini belirtir
// 2. parametre olan 1=indexteki elemanı siler yerine 3. parametreyi yerleştirir, 0= elemanı silmeden sağa kaydırıp yerine yeni elemanı koyar
meyveler.splice(1, 0,  "Mango")
console.log(meyveler);
meyveler.splice(4, 1,  "Ananas")
// meyveler[4]="ananas"
console.log(meyveler);

//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI (diziyi değiştirmezler)
//? ===========================================================
const sayilar = [3, 5, 2, "2", "üc", 2, "bes", 5];

//* includes()
//*-----------------------------------------------------------
console.log(sayilar.includes("5")); //false
console.log(sayilar.includes(5)); //true

//* indexOf(),  lastIndexOf();
//*-----------------------------------------------------------

//* ilk eslesen indeksi dondurur.
const ikiIndeks = sayilar.indexOf(2);
console.log("2'nin  ilk indeksi:", ikiIndeks); //2
console.log( sayilar.indexOf(2,3));//5
console.log("5'nin son indeksi:", sayilar.lastIndexOf(5)); //7



//*örnek
// const sayilar = [3, 5, 2, "2", "üc", 2, "bes", 5];

//* kullanıcıdan sayı isteyin. girilen sayının hem string hem number hali sayılar dizisinde var mı araştır, varsa index ini döndür

console.log("***********");
//  const aString= prompt("lütfen bir sayı giriniz");

//  const aNumber=  +(aString);

// let bulunduMu=false;


// if(sayilar.includes(aString)){
// console.log("aradığınız string in indexi:", sayilar.indexOf(aString) );
// bulunduMu=true;}

// if(sayilar.includes(aNumber)){
// console.log("aradığınız number ın indexi :" ,sayilar.indexOf(aNumber));
// bulunduMu=true;}


// if(bulunduMu==false)
// console.log("aradığınız sayı bulunamadı");

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.join(" ")=>virgül+boşluk sil boşluklarla ayır
//* split(" ")=>string i boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orijinal diziyi değiştirmez
 // const sayilar = [3, 5, 2, "2", "üc", 2, "bes", 5];


   console.log( sayilar.join(" "))
   console.log(sayilar);


   //*dizinin 2 indexli elemanını tersten yazdır
  //  const meyveler = ['Çilek', 'Mango', 'karpuz', 'Muz', 'Ananas', 'Erik', 'Ayva', 'Armut']

  console.log( meyveler[2].split("").reverse().join(""))


//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

const stringSayilar2 = sayilar1.toString();
console.log(stringSayilar2);

//* slice()
//*-----------------------------------------------------------

const arabalar = ["bmw", "mercedes", "audi", "ferrari", "anadol"];
const sliced1 = arabalar.slice(2);
console.log(sliced1);

const sliced2 = arabalar.slice(1, 3); // start: inclusive, stop :exclusive
console.log(sliced2);
//!diziyi kopyalamak için 1. yol
const arabalarCopy = arabalar.slice();
console.log(arabalarCopy);
console.log(arabalar);


//* concat()
//*-----------------------------------------------------------
const yazilar = ["a", "b", "ad", "soyad", "yas"];
const rakamlar = [3, 5, 1, 4, 7];
const birlesik = yazilar.concat(
  true,
  rakamlar,
  false,
  ["a", "b", "c"],
  [["x", "y", "z"]]
);
console.log(birlesik);





