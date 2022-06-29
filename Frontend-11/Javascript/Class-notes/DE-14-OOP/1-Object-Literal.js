//* ======================================================
//*                    (OOPS)
//* ======================================================

//*object literals
const book1 = {
 title:"The Brother Karamazov",
 author:"Dostyevski",
 year:"1880",
ferhat:function () {
  return `${this.title} ${this.year} yılında ${this.author} yazmıştır `
 }
};

console.log(book1.ferhat());

const book2 = {
  title: "Nutuk",
  author: "Atatürk",
  year: "1925",
  ferhat: function () {
    return `${this.title} ${this.year} yılında ${this.author} yazmıştır `;
  },
};

  //? object literals yöntemi ile fazla sayıda yeni  Object ler oluşturmak oldukça zahmetlidir, ayrıca programcılık yaklaşımı açısından da çok tekrar içerdiği için uygun değildir
  // DRY (Dont Repeat Yourself) Prensibi için uygun değildir
//? SOLUTION:  Object Constructor kullan (ES5 and ES6)