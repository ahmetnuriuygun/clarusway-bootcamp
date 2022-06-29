// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRİNG METHODS******");

//!klasik yöntem ile tanımlanan bir String primitive dir (ilkel)

const str1="clarusway";
const str2="hello ";
const str3="world";
 console.log(str2 + str3, typeof (str2 + str3));

 //!String constructor ile tanımlanan String non-primitive dir 

 const str4=new String("yeni bir string") ;
 console.log(str4, typeof str4);//object


//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! nesnelerine dönüştürür. Bu sayede, String nesnelerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur.Ayrıca 2 tür arasında çevrim yapmakta mümkündür.

// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================

const s1=" hello ";
const s2="world";
const s3=s1.concat(s2);
console.log(s3.concat(" Clarusway", s1));
console.log(s1);//hello

// *=========================================================
// *               charAt() 
// *=========================================================
//? Stringler için Escape karakterleri
 //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences

const s4 = "primitive \n veri tiplerinin \n property ve\nya metodu olmaz.";
console.log(s4);
  console.log( s4.charAt(5)); //t
  console.log( s4.charAt());// içi boşsa ilk harfi döndürür
  console.log(s4.charAt(s4.length-2));//z

// *=========================================================
// *       includes()        
// *=========================================================

const kelime="to be, or not to be, that is the question.";

console.log( kelime.includes("TO be")); //false
console.log( kelime.includes("to be")); //true
console.log( kelime.includes("quest")); //true
console.log( kelime.includes("")); //true
console.log( kelime.includes("to be",15)); //false
console.log( kelime.includes("or",7)); //true

// *=========================================================
// *       indexOf() , lastIndexOf()       
// *=========================================================

console.log( kelime.indexOf("or")); //7
console.log( kelime.indexOf("this")); //-1
console.log(kelime.indexOf("TO be")); //-1 
console.log(kelime.indexOf("be")); //3
console.log(kelime.indexOf("be",4)); //17
console.log(kelime.lastIndexOf("be")); //17


// *=========================================================
// *       startsWith(), endsWith()      
// *=========================================================


const kelime2="Salına salına sinsice!";

console.log(kelime2.startsWith("sa"));//false
console.log(kelime2.startsWith("Sa"));//true
console.log(kelime2.startsWith("sa",7));//true
console.log(kelime2.endsWith("!"));//true

// *=========================================================
// *    replace(search for, replaceWith)     immutable 
// *=========================================================

let oku="Oku Baban gibi, saf olma!"
console.log(oku);
let oku2 = oku.replace("saf olma", "akıllı ol");
console.log( oku2  );
console.log(oku);

// detaylı değiştirme için regex kullanılabilir.i= insensitive, küçük büyük harfe duyarsız
  console.log(oku.replace(/SAF/i, "fakir"));


//* ----------------------------------------------------------
//*  slice(beginIndex(dahil), endIndex(dahil değil))
//*  substring(beginIndex, endIndex)
//*  substr (depreceted)
//* (First character is 0).----------------------------------------------------------
const veysel = "Uzun ince bir yoldayım yürüyorum gündüz gece..";
console.log(veysel.slice(5));
console.log(veysel.slice(5,9));//ince

console.log(veysel.substring(17,30));
 
console.log(veysel.slice(-10)); //son 10. harften itibaren al saymaya 1 den başlıyoruz

console.log(veysel.slice(-10,-9));//d

//* ----------------------------------------------------------
//* split(sep , limit ) =>ikisi de optional
//* split(" ")=>boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orjinal diziyi değiştirmez----------------------------------------------------------
const tarkan= "Gel gündüzle gece olalım";

 console.log(tarkan.split("e"))//bütün e leri siler, yeni bir dizide virgül ve boşlukla ayırarak elemanlar oluşturur 
 console.log(tarkan.split(" "))// bütün kelimeleri virgülle ayırır
 console.log(tarkan.split(""))//bütün harfleri virgül ve boşlukla ayırarak bir dizi elde eder
console.log(tarkan.split(" " , 2));// 2 elemanı al
 console.log( tarkan.split("e", 2));

 console.log( tarkan.split());//tek elemanlı diziye çevirdi


 //* ----------------------------------------------------------
//* trim();
//* ----------------------------------------------------------

const ramazan="    Hoşgeldin Ya Şehr-i Ramazan      "
console.log(ramazan);
console.log( ramazan.trim())
console.log(ramazan);









