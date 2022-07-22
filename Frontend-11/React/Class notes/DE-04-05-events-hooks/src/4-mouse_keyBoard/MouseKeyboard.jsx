import React, {useState} from 'react'
import {FaReact}   from "react-icons/fa"
const MouseKeyboard = () => {
const[eksenX,setEksenX]=useState()
const[eksenY,setEksenY]=useState()

const mouse=(e)=>{


 //!pageX komutunu kullanırsanız, bulunduğunuz div in sol üst köşesini 0-0 kabul eder, ona göre konum bildirir
setEksenX(e.pageX)
setEksenY(e.pageY)
 
}

 const KeyDown = (e) => {
   console.log( e.type);
 };

 //keyUp
 const KeyUp = (e) => {
   console.log( e.type);
   console.log( e.keyCode);
  
 };

  return (
    <div className="container text-center mt-4 d-flex  flex-column align-items-center">
      <h2 className="text-danger">MOUSE EVENTS</h2>
      <p>X ve Y </p>
      <p className="text-danger fw-bold">
        {" "}
        {eksenX} {eksenY}
      </p>
      <div
        id="coord"
        className="bg-success text-light w-50 p-4 "
        onMouseMove={mouse}
      >
        KOORDİNATLAR <FaReact />
      </div>
      <h2 className="text-danger">KEYBOARD EVENTS</h2>
      <input type="text" onKeyUp={KeyUp} onKeyDown={KeyDown} />
    </div>
  );
}

export default MouseKeyboard