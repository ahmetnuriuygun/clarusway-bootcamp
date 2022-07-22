import React from 'react'

const Event = () => {
let baslik="MERHABA"
let count=5;
const tiklama=()=>{
 alert("buton tıklandı")
}

const temizle=(p)=>{
document.querySelector(".btn-primary").textContent = p;
}

//* yeni bir file da reactla çözümüne gidelim
const arttir=()=>{

count=count+1;
console.log(count);
document.querySelector("h2").textContent=count
}

 return (
    <div className="container text-center mt-4">
    
    <h1>INFO:{baslik}</h1>
    <button className="btn btn-info" onClick={tiklama} >Click</button>
    <button className="btn  btn-primary" onClick={()=>temizle("buton temizlendi")}>Clear</button>


    <h2 className="mt-4">COUNT:{count}</h2>
    <button className="btn btn-warning" onClick={arttir}>Arttir</button>
    
    </div>
  )
}

//?------------------------------------------------------------------
//? QUESTION:arttır  butonuna tıklandığında count 1 artmalı

//?-------------------------------------------------------------------
//! Konsolda güncellenen count u görebiliyoruz ancak web sayfasında görüntülenmiyor..
//* Beacause, REACT herhangi bir element i default olarak static sayar
//*DOM manipülasyonunu en aza indirmek için bunu yapar
//* Hangi elementin interactive olduğu konusunda React'e bilgi vermeliyiz.
//! REACT'i interactive elements hakkında bilgilendirmek için iki yöntem kullanıyoruz
//* 1. Statefull Classes. State-based inform (Class Components)
//* 2. Hooks (Functional Components)
//?--------------------------------------------------------------------
export default Event