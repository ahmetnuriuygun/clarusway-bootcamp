import React, { useState } from "react";

const Hooks = () => {
  const [sayi, sayiDegistir] = useState(5);
  const [bilgi, setBilgi] = useState({
    isim: "john",
    email: "john@gmail.com",
    yas: 30,
  });

  // console.log(bilgi);
  const arttir = () => {
    sayiDegistir(sayi + 1);
  };

  const azalt = () => {
    sayiDegistir(sayi - 1);
  };

  // const temizle = () => {
  //  sayiDegistir(0)
  // }
  const degistir = () => {
    if (bilgi.isim === "john") {
      setBilgi({
        isim: "cem",
        email: "cem@gmail",
        yas: 45,
      })
    } else {
      setBilgi({
        isim: "john",
        email: "john@gmail.com",
        yas: 30,
      });
    }
  };

  return (
    <div className="container text-center mt-4">
      <h2>**********************************************************</h2>

      <h1>USESTATE</h1>
      <h2>COUNT:{sayi}</h2>
      <button className="btn btn-primary" onClick={arttir}>
        Arttir
      </button>
      <button className="btn btn-warning" onClick={azalt}>
        Azalt
      </button>
      <button className="btn btn-primary" onClick={() => sayiDegistir(0)}>
        Temizle
      </button>
      <h1>**********************************************************</h1>
      <div className="mt-4">
        <h2 className="text-danger">USESTATE WİTH OBJECT</h2>
        <h2>{bilgi.isim}</h2>
        <h5>{bilgi.email}</h5>
        <h5>{bilgi.yas}</h5>
        <button className="btn btn-primary" onClick={degistir}>
          Degistir
        </button>
      </div>
    </div>
  );
};

export default Hooks;
