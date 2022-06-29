//* ======================================================
//*             OOP - Classes (ES6)
//* ======================================================

//? Classes  objects oluşturmak için template (şablondur).
//? JS deki Classes   prototypes üzerine kuruludur, but aynı zamanda ES5 syntax ından farklı bazı syntax and semantics e sahiptir .
//? Aslında  class keyword ü  ES6 da tanıtılmıştır, but is syntactical sugar, JavaScript  prototype-based dir.


class Book{
//*ana yapıyı oluşturduk
constructor(kitapAdi, yazar, yil){
 this.kitapAdi = kitapAdi;
 this.yazar = yazar;
 this.yil = yil;
 this.ferhat=function(){return `${this.kitapAdi} ${this.yil} yılında ${this.yazar} yazmıştır `; }
}
//*bu alt süslüye yazdıklarımız direk kalıbın prototype alanına gider (ES6 ile biz belirtmeden)
getirYil(){
 return new Date().getFullYear()-this.yil
}
}
//*Book kalıbından (class ından) instance (object-nesne ) oluşturma
const book1=new Book("safahat", "M.Akif Ersoy",1910)
const book2=new Book("safahat2", "M.Akif Ersoy",1920)
const book3=new Book("safahat3", "M.Akif Ersoy",1930)
const book4=new Book("safahat4", "M.Akif Ersoy",1940)
const book5=new Book("safahat5", "M.Akif Ersoy",1950)
console.log(book1,book2,book3,book4,book5);
console.log(book2);
console.log(book1.getirYil());
console.log(book1.ferhat());


//?INHERİTANCE
//* Book object inden Dergi objesine kalıp getirdik
class Dergi extends Book {
//*Dergi object inde kullanacağım parametreler (hem atadan gelen hem kendisinden)
constructor(kitapAdi,yazar,yil,month) {
 //*atadan gelenler(super) super yazdığımız an ES6 sayesinde atanın prototype ide direk gelmiş oldu(bu file ın son satırında çağırdık)
super(kitapAdi,yazar,yil)
//*kendisinde oluşanlar
this.month=month
}

}
const dergi1=new Dergi("time","adam sandler",1920,"aralik")
const dergi2=new Dergi("time","adam sandler",1920,"aralik")
console.log(dergi1,dergi2);
console.log(dergi1.getirYil());




