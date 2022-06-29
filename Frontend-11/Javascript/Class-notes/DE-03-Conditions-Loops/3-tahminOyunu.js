
//* Program 0*20 arasında rastgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

let hak=5;
let deneme=0;

const rastgele= Math.ceil(Math.random()*20);
console.log(rastgele);

while(hak>0){
const tahmin= +prompt("0-20 arasında bir sayı giriniz")
  hak--;

 deneme++;
  if (tahmin==rastgele) {

   console.log(`Tebrikler ${deneme} . denemede bildiniz 🥳`);
break;

}else if(tahmin<rastgele) {
 console.log(`Dikkat ${hak} hakkınız kaldı`);
 console.log("ARTTIR 📈");

}else {
console.log(`Dikkat ${hak} hakkınız kaldı`);
   console.log("AZALT📉");
  }}
if(hak==0)
  console.log("oyunu kaybettiniz");