3; // ? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.

//* Özellikle karmaşık hesaplamaların kodlamasını kolaylaştırmak için kullanılır.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack oveflow hatası alınabilir.
//ilk n terim toplamı

// mesela 5 için
const toplamlar=(n)=>{

if(n<1)

{return n} 
else
{return toplamlar(n-1)+ n }

}

console.log(toplamlar(5));







//* ORNEK: Girilen n. terime kadar Fibonacci sayılarının toplamını hesaplayarak yazdıran fonksiyonu recursive olarak kodlayınız.
console.log("************ 5- RECURSION *************");

//? FIBONACCI terimleri:  0, 1, 1, 2, 3, 5, 8, 13, 21, ...
//!fibonacci dizisindeki ilk n terim toplamını bulma fonksiyonu

const fibo= (n)=>{

 if (n<2)
{return n;}
else{
return fibo(n-1)+fibo(n-2)
}
}
fibo(5);

// mesela 5 için 

// fibo(5)=fibo(4)+fibo(3)
// fibo(4)=fibo(3)+fibo(2)
// fibo(3)=fibo(2)+fibo(1)
// fibo(2)=fibo(1)+fibo(0)
// fibo(1)=1
// fibo(0)=0


//!swap yöntemi
function fib(n) {
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {

    let c = a + b;
console.log("a",a);

console.log("b",b);

console.log("c",c);

    a = b;

    b = c;
console.log("sonuc",c);
  }
  return b;
}
console.log("sonuc",fib(7));




