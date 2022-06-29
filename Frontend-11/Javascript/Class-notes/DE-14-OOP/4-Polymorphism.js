//* ======================================================
//*     OOP - Inheritance and Polymorphism(ES6)
//* ======================================================

//? Extends keyword ü, parent class ın işlevselliğini child class a genişletmek (extend) için kullanılır..(INHERITANCE)

//* Polymorphism  object-oriented programming concept li bir programlama kavramıdır,bi variable ın, nesnenin, yada fonksiyonun,birden çok form alma özelliğini ifade eder

//* In the OOP, Polymorphism genellikle  Overloading and Overriding le gerçekleştirilir (overriding=aynı ada sahip iki işlev tanımlarsanız, tanımlanan sonuncusu önceden tanımlanmış sürümü geçersiz kılar ve işleve her çağrı yapıldığında, son tanımlanan işlev yürütülür.)(overloading=aşırı yükleme demektir, javascriptte böyle denmez, aynı adlarla fonksiyonu işlemek denir )


class Book {
  constructor(kitapAdi, yazar, yil) {
    this.kitapAdi = kitapAdi;
    this.yazar = yazar;
    this.yil = yil;
    
  }

  ferhat() {
     return `${this.kitapAdi} ${this.yil} yılında ${this.yazar} yazmıştır `;
  }


}


//!OVERRİDİNG
//* atadan gelen özellikler içerisinde modifiye edebiliriz, gereksiz gördüğümüz parametreleri çıkarmak, fonksiyona veri ekleyip çıkarmak gibi, bu örnekte normalde super yazınca direk gelen prototype alanındaki veriyi değiştirmek istedik, bu yüzden extra yazdık ve değiştirdik (override ettik)
class Dergi extends Book {
 constructor(kitapAdi, yazar, yil,month) {
  super(kitapAdi, yazar, yil)
  this.month=month;
 }
//*overriding edilen fonksiyon
ferhat() {
     return `${this.kitapAdi}  ${this.yazar} yazmıştır `;
}
}

const dergi1 = new Dergi("Stientific Essays", "Einstein", 1900, "September");
console.log(dergi1);
console.log(dergi1.ferhat());

