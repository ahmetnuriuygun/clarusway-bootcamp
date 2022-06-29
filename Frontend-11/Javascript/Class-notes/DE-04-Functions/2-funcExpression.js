// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");


//önce declaration
const tekCift=function(sayi){
 return sayi%2==1 ? "tektir" :"çifttir"

}
//sonra calling
console.log( tekCift(5));
console.log( tekCift(6));

//* Örnek2:en büyük sayıyı bul
//**********************************************************/
let büyükBul=function(x,y,z){

 let enBüyük;

 if(x>y && x>z )
 {enBüyük=x;}
else if(y>z && y>x)
{enBüyük=y;}
else {enBüyük=z;}
return enBüyük;
}
console.log("en büyük sayı" , büyükBul(3,5,9));

//* Örnek3: bir fonksiyon içerisinde başka bir fonksiyon çağırılabilir
//**********************************************************/

const topla= function(s1,s2){
 return s1+s2
}
 const cikar = function (s1, s2) {
   return s1 - s2;
 };
 const carp = function (s1, s2) {
   return s1 * s2;
 };
 const böl = function (s1, s2) {
   return s1 / s2;
 };

const hesapla=function (islem ,s1 ,s2) {
let sonuc;
if(islem=="+")
{sonuc=topla(s1,s2);
}
else if (islem=="-")
{sonuc=cikar(s1,s2);}
else if (islem=="*")
{sonuc=carp(s1,s2);}
else if(islem=="/")
{sonuc=böl(s1,s2);}

return sonuc;
}

alert(hesapla("*",3,5));

console.log(hesapla("/",8,4));
