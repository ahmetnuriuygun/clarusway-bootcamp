// https://api.tvmaze.com/shows


let forAramaListe=[];

fetch("./tv-shows.json")
//!alttaki yorumu açarsan bunu kapat
 .then((res)=>res.json()

 )
// .then((res)=>{if(!res.ok)
// {throw new Error("hata var")
// document.querySelector(".card").innerHTML=`<h2>hata var ${res.status}</h2>`

 // } res.json()})
.then((datA)=>

{forAramaListe=datA
setTvShows(forAramaListe)

})
// .catch((osman)=>{console.log(osman);})



function setTvShows(data) {
// console.log(data);
let liste=document.querySelector(".tvShowList")

 liste.innerHTML="";


data.forEach((w)=>{
liste.innerHTML += ` 
<div class="col-md-3">   
<div class="card">
  <img src=${w.show.image ? w.show.image.medium:""} class="card-img-top" >
  <div class="card-body">
    <h5 class="card-title">${w.show.name}</h5>
    
    <a href=${w.show.url} class="btn btn-primary">Detaylar</a>
  </div>
</div></div>  `;

})
}


document.getElementById("search").oninput=(harf)=>{
// console.log(harf.target.value);

let data2= forAramaListe.filter((w)=>w.show.name.includes(harf.target.value))
console.log(data2);
setTvShows(data2)


 
}

