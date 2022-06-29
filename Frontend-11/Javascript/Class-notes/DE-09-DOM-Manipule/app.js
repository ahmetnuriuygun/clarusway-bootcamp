document.querySelector("h1").style.textAlign="center"

document.querySelector("h1").style.color="red"


let resim=document.querySelector(".resim");
let ses=document.querySelector(".ses");


//! ara butonu tıklandığında
document.querySelector(".on").onclick=()=>{
resim.src="./img/img.gif"

ses.play();

//sesin volume nü 0-1 arasında değer vererek ayarlayabiliriz
ses.volume=0.2;}

//!bağlat butonu tıklandığında
document.querySelector(".off").onclick=()=>{

 resim.src="./img/telbağla.gif"
 ses.pause();
}
//!konuş butonu tıklandığında
document.querySelector(".speak").onclick = () => {
  resim.src = "./img/telefon.gif";
  ses.pause();
};
//!mouse ile resmin üzerine gelindiğinde
resim.onmouseover=()=>{
 resim.src="./img/aslan1.jpeg"
}
//!mouse ile resmin üzerinden ayrıldığımızda 
// 2. kullanım şekli addEventListener
resim.addEventListener("mouseout", () => {resim.src = "./img/aslan2.jpeg";
});

//! klavyeden inputa veri girişi yapılırken tuştan elimizi çektiğimizde
const check=  document.querySelector(".checkbox");

const text= document.querySelector(".textbox");

text.onkeyup=()=>{
 if(check.checked)
 {    text.value=text.value.toUpperCase()
 
 } else {text.value = text.value.toLowerCase();

 }
}

//!ekle butonuna basıldığında inputa girilen değerler benim ul listeme eklensin

document.querySelector(".ekle").onclick=()=>{
  const liste = document.querySelector(".liste");
  const language = document.querySelector(".language");

  liste.innerHTML = liste.innerHTML + `<li>${language.value} </li>`;

  //*input girişi yapılıp eleman üstte listeye eklendikten sonra input temizlensin
  language.value = "";

//*UZUN YOL
  // yeni girilen satiri saklamak icin bir li olusturduk.
  // const yeniLi = document.createElement("li");
  // yeni li icin textnode olusturduk
  // const textNode = document.createTextNode(satir.value);
  //olusturdugumuz texnode'u yeni li'ye bagladik.
  // yeniLi.appendChild(textNode);
  // yeni eklenen satiri var olan listeye (ul) baglayalim.
  // liste.appendChild(yeniLi);
}

//!sil butonu tıklandığında

document.querySelector(".sil").onclick = ()=>{
const liste = document.querySelector(".liste");

liste.removeChild(liste.lastElementChild);//*listenin son elemanını sil
// liste.removeChild(liste.firstElementChild);//*listenin ilk elemanını sil

}

//! klavyedeki keyCode ları kullanarak kod yazma
document.querySelector(".language").onkeydown=(tuslar)=>{
  console.log(tuslar);

  //*eğer enter=13 tuşuna basıldıysa
  if (tuslar.keyCode === 13) {
    document.querySelector(".ekle").click();
  }

  //*eğer delete =46 tuşuna basılırsa sil butonu tetiklensin
  if (tuslar.keyCode === 46) {
    document.querySelector(".sil").click();
  }
}


//!listemin başına h1 tag i eklemek

// HTML'de input-div'in altına yeni bir H1 elemanı olusturalım.
const liste = document.querySelector(".liste"); //h1 eklemek için class=input-div yerine class=forH1 yapabilirsin
// const baslık = document.createElement("h1");
// baslık.className = "a";
// const yazi = document.createTextNode("Programlama Dilleri");
// baslık.appendChild(yazi);
// inputDiv.after(baslık); //input-div'in sonrasina h1'i ekliyoruz.

//!kısa yol

liste.innerHTML = `<h1 class="a"> ${"Programlama Dilleri"}</h1>` +liste.innerHTML;























