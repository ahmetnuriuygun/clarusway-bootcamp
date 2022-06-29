//* ======================================================
//*                    OOPS- Object Constructor (ES5)
//* ======================================================

//*Object Constructor 
//* Javascript is a prototype-based language.
//* Tüm JavaScript nesneleri, bir prototipten (ilk örnek)özellikleri ve yöntemleri devralır (inherit)
//* Object prototipi, prototip miras zincirinin en üstündedir.(Hz. Adem)
//* For example, Date and Array objects,   Object prototype den devralır

//* Object Constructor
//! Book ismi büyük harfle,constructor old biz tarafından anlaşılsın. anne karnında bebek var doğarsa değeri olur (üstte constructor anne karnındaki bebek, altta book1 oluşturmak=bebeğin doğması)

function Book(titlE,authoR, yeaR) {
this.author = authoR;

this.year=yeaR

this.ferhat=function(){
 return `${this.title} ${this.year} yılında ${this.author} yazmıştır `;}
this.title = titlE;

}
//? new keyword ü  Book Constructor ı parametrelerle çağırır.
//? Constructor, Book object in bir örneğini kalıbını oluşturur.
//? Constructor daki tüm variables ve functions, oluşturulan her  single örneğe (instance) eklenir

const book1= new Book("the brothers karamazov","Dostyevski", 1835)
console.log(book1);
 const book2= new Book("kaşagı","ömer seyfettin", 1935)
 console.log(book2.ferhat());
 console.log(book1.title);

 //? oluşturulan instances object e yeni özellik veya function ekleyebiliriz
//? Ama bunlar sadece ilgili instance a bağlı.book1 e eklediysek sadece onu bağlar
//? Constructor dan  oluşturulan diğer instance lar bu yeni özellikleri içermez.
book1.price=100;
book1.getirBaslik=function(){
 return this.title
}

console.log(book1);
console.log(book2);

//!kalıp ta prototype alanına ulaşmak için alttaki gibi bir syntax kullanılır
//*Book un prototype alanına yeni bir parametre ekledik ama bellekte yer kaplamaz, ihtiyaç olunca child lar kullanır
Book.prototype.tür="novel";
Book.prototype.getirYil=function(){
 return new Date().getFullYear()-this.year
}
//*prototype book2 de yer kaplamadı ama çağırınca geldi
console.log(book2.getirYil());
console.log(book2);
console.log(book2.tür);
//*book2 nin (Book atasının prototype inden gelen parametresini değiştirdik)
book2.tür="story"
console.log(book2.tür);

//! instance(child larda) prototype e ulaşmak için __proto__ yazılır
book1.__proto__.tür="roman"
console.log(book1);



//!OKUL YÖNETİMİ HATIRLA
//?İNHERİTANCE


function Dergi(title,author,year,montH){
 //*parent object constructor ı çağırdım
 Book.call(this,title, author,year)
 //*kendimden parametre ekledim
 this.month=montH
}

//*Book object inden (kalıbından) türetilen Dergi kalıbına, Book un prototype alanındaki bilgiler (ES5 te) direk gelmez,gelmesini istiyorsak aalttaki kodu yazmalıyız
Dergi.prototype= Object.create(Book.prototype)

const dergi1=new Dergi("yaprak dokumu","Resat Nuri Güntekin",1900,"september")

console.log(dergi1);
console.log(dergi1.tür);
console.log(dergi1.getirYil());