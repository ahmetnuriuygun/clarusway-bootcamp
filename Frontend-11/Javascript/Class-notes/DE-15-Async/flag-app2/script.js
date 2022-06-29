
// getirCountry("canada")
// getirCountry("peru")
// getirCountry("turkey")
let dizi=["turkey","peru","canada"]
dizi.forEach((a)=>getirCountry(a))

async function getirCountry(name){

 try {
    //!try catch olunca hatayı yakalıyor,kod durmuyor, hatayı söyleyip çalışıyor
    

    //! url yi hatalı ver göster

    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
     console.log(res);
    //!  res.status != 200;
    if (!res.ok) {
      //! error handling
      document.querySelector(
        ".countries"
      ).innerHTML = `<h2 class='text-danger'>Something went wrong! ::${res.status}</h2>`;
    

       throw new Error("url de hata var");
      //!direk nerede hata olduğunu göstermek için (fetchCountry de sıkıntı var diyor), yoksa hatanın esas yerini göstermeyip altta country vs bulamayınca bulamıyorum error u yazıyor, try catch olunca hata msjı kodu sonlandırmadan error msjını veriyor
    }
    //* console.log(res);
    const data = await res.json();
    console.log(data);
    console.log(data[0]);
    ekranaBastır(data[0]);
    
    //!eğer url kontrolünden sonra hata varsa catch onu yakalıyor
  } catch (error) {
    console.log(error);
  }
}; 




const ekranaBastır=(country)=>{
  console.log(country);

  // const{capital,name,currencies,region,languages,flags}=country
  console.log(Object.values(country.languages));
  document.querySelector(
    ".countries"
  ).innerHTML += `<div class="card text-start w-50 shadow-lg bg-light">
      <img src=${country.flags.svg} class="card-img-top" alt="...">
      <div class="card-body">
         <h5 class="card-title">${country.name.common}</h5>
         <p class="card-text"></p>
      </div>
      <ul class="list-group list-group-flush">
         <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i>${
           country.capital
         } </li>
         <li class="list-group-item"><i class="fas fa-lg fa-comments"></i>${Object.values(
           country.languages
         )} </li>
         <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i> ${
           Object.values(country.currencies)[0].name
         }</li>
      </ul>
   </div>`;
  //! USD:------>usd nin value sini dizi yapar {name: 'United States dollar', symbol: '$'}-----
  //!!!! Object.values()öğeleri, nesnede bulunan numaralandırılabilir özellik değerleri olan bir dizi döndürür
}
