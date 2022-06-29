var showList = []; //!boş bir array aç, en alttaki arama olayında datayı görebilmek için global e boş array açıp fetch ile gelen data yı bu boş array e attık


//!ilk ekrandaki resimleri api den çekiyoruz
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
  .then((resp) => resp.json())
  .then((dataa) => {
    showList = dataa;
    console.log(showList.meals);
    // setMeal(Object.values(showList)[0]);
    setMeal(showList.meals);
  });
//!browser a bastırma fonksiyonu
function setMeal(data) {
  let food = document.querySelector(".food"); //bütün satırlara ulaş
  console.log(data);
  food.innerHTML = ""; //harfle arama yapınca liste temizlenmeli seçilen ekrana basılmalı
  data.forEach((w) => {
    food.innerHTML += `
   <div class="col-md-3 p-4 m-4">
   <p>${w.strMeal}</p>
   <img class="malzeme" style=width:200px  src=${w.strMealThumb} class="card-img-top" >
   </div>`;
  });
}
//!arama inputunda arama yapma
document.getElementById("ara").oninput = (e) => {
  var text = e.target.value.toLowerCase();
  var data = showList.meals.filter((w) =>
    w.strMeal.toLowerCase().includes(text)
  );
  setMeal(data);
};
//!bayraklara tıklandığında o ülkeye (vatandaşlarına) ait yemekler api den çekilip browser a bastırma metoduna yollanıyor
const vatandas = [
  { turkey: "Turkish", canada: "Canadian", abd: "American", france: "French",india:"Indian" },
];
//! console.log(vatandas[0]);

//! console.log(Object.keys(vatandas[0]));
//! console.log(Object.values(vatandas[0]));

  for (let i in vatandas[0]){
   document.getElementById(i).onclick=()=>{
     //! console.log(vatandas[0][`${i}`]);  object in value larını verir, apiye bunu yolladım
     //! console.log(i); object in key lerini verir, html den bununla img getirdim

     fetch(
       `https://www.themealdb.com/api/json/v1/1/filter.php?a=${
         vatandas[0][`${i}`]
       }`
     )
       .then((resp) => resp.json())
       .then((dataa) => {
         showList = dataa;
         setMeal(showList.meals);
       });
   }
  }

 

 

