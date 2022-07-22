//? React, JSX kullanır.
//?  JSX'te, HTML öğelerini doğrudan JS'de kullanabiliriz

//! Components birleştirilmiş bir HTML,CSS,JS kodu döndürebilir..
//!Ancak, tek bir kapsayıcı (div, section, article, <> etc. gibi) öğesi döndürmesi gerekir.
//* JSX'te Styling çeşitli şekillerde gerçekleştirilebilir.
//* 1-) Inline-Styling kullanılabilir.
//* 2-) Styling, local veya global bir değişken olarak tanımlanabilir..
//* 3-) Styling external stylesheet (harici stil sayfası) olarak tanımlanabilir

//! NOTES:
//*styling için, property-value(object) yapısı kullanılır.
//* property name için camelCase yazı şekli, class tanımlamaları için className ismi kullanılır
//*Material UI, Styled Component, Sass, Bootstrap etc. gibi 3. part kütüphaneler de stil için kullanılabilir.

import React from "react";
import Clock from "../clock/Clock";
import img from "../img/indir.jpeg";

//!external
import "./Msg.css";

//!internal

const stylesA = {
  color: "green",
  fontFamily: "Tahoma",
  border: "1px solid red",
};
const Msg = () => {
  return (
    <div>
      <h2 style={{ color: "red" }}>hoşgeldin react</h2>

      <p style={stylesA}>burası JSX alanı</p>

      <img className="msg-img" src={img} alt="" />
      <img
        className="msg-img"
        width="200px"
        src="https://cdn.pixabay.com/photo/2020/11/22/19/19/louvre-5767708__340.jpg"
        alt=""
      />

      <Clock />
    </div>
  );
};

export default Msg;
