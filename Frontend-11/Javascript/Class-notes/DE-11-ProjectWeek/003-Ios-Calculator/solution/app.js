//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================

const numberButtons=  document.querySelectorAll(".num")
const operationButtons=  document.querySelectorAll(".operator")
const equalButtons=  document.querySelector(".equal")
const acButtons=  document.querySelector(".ac")
const pmButtons=  document.querySelector(".pm")
const percentButtons=  document.querySelector(".percent")
const üstEkran = document.querySelector(".previous-display");
const altEkran = document.querySelector(".current-display");


//?operator değişkenleri

let üstEkranYazi="";
let altEkranYazi="";
let işlem="";

//?eşittir yada percent e basıldıktan sonra yeni işleme yeni sayılar girmek için, tıklandı tıklanmadı boolean değişkeni hazırladık, eşittir (ve de percent) butonunda bu true yani tıklandı olacak
let esittirVeyaPercentPressed=false;

numberButtons.forEach((number)=>{
number.onclick=()=>{
ekranaHazirlik(number.textContent)
updateEkran();
}
})

const ekranaHazirlik=(num)=>{

//?kullanıcı 0 girerse, sonrasında 0 ve . dışında bir sayı girerse, ekranda girilen yeni sayı gözüksün

if(altEkranYazi=="0" && num !=="0" && num !==".")
{
 altEkranYazi=num
 return;
}
//?kullanıcı herhangi bir yerde . girmişken, tekrar nokta girmeye kalkarsa giremesin
if (num === "." && altEkranYazi.includes(".")) return;

//?kullanıcı 10 haneden sonra girmesin
if(altEkranYazi.length>9)
return;

//?kullanıcı ilk başta 0 girer ardından tekrar 0 girerse, girilmesin, tek 0 döndürsün
if(altEkranYazi==="0" && num ==="0")
return;

//?eşittir yada percent a basıldıktan sonra girilen number tek başına ekranda görünsün,çünkü yeni işlem başlıyor
if (esittirVeyaPercentPressed) {
 esittirVeyaPercentPressed=false
  altEkranYazi = num;
  return
}
//?bütün şartları başarı ile geçtiyse basılan numaraları arka arkaya ekle
altEkranYazi+=num
}

//?BURADA YAPILANLARI EKRANA BASTIRMA
const updateEkran=()=>{

 if(altEkranYazi.toString().length>9)

 {altEkranYazi= altEkranYazi.toString().slice(0,9)}

altEkran.textContent=altEkranYazi;

//?işlem girilince 
if(işlem!=null){
üstEkran.textContent= `${üstEkranYazi}  ${işlem}`
}
else{
 üstEkran.textContent="";
}
}

//?herhangi bir işleme tıklandığında
operationButtons.forEach((op)=>{
op.onclick=()=>{

  if(altEkranYazi==="") return
  //?eşittire basılmadan arka arkaya işleme basılırsa (alt ve üst ekran doluyken işleme basılmaya devam edilirse)
  if (altEkranYazi && üstEkranYazi)
   hesapla();

  işlem = op.textContent;
  üstEkranYazi = altEkranYazi;
  altEkranYazi = "";

  updateEkran();
}

})

//?eşittir butonuna tıklandığında
equalButtons.onclick = () => {
  hesapla();
  updateEkran();

  esittirVeyaPercentPressed=true;
};

const hesapla=()=>{
let sonuc;
switch (işlem) {
  case "+":
    sonuc = +üstEkranYazi + Number(altEkranYazi);
    break;
  case "-":
    sonuc = üstEkranYazi - altEkranYazi;
    break;
  case "x":
    sonuc = üstEkranYazi * altEkranYazi;
    break;
  case "÷":
    sonuc = üstEkranYazi / altEkranYazi;
    break;
  default:
    return;
}
altEkranYazi=sonuc;

üstEkranYazi="";
işlem="";

}
//?AC butonuna basıldığında
acButtons.addEventListener("click",()=>{

işlem="";
altEkranYazi="";
üstEkranYazi="";
updateEkran()

})


pmButtons.onclick=()=>{
if(!altEkranYazi) return

  altEkranYazi= altEkranYazi*-1
  updateEkran()
}

percentButtons.onclick=()=>{
if (!altEkranYazi) return;
altEkranYazi= altEkranYazi/100;
updateEkran()
esittirVeyaPercentPressed=true

}