import moment from "moment";
import {useState, useEffect} from "react"
//!!!!https://momentjs.com/

const Clock = () => {
  const [zaman, setZaman] = useState(moment());
  // console.log(zaman);

  //! componentDidMount=component ilk render edildiğinde []

  // useEffect(()=>{
  //  setInterval(() => {
  //   setZaman(moment());

  //   console.log("merhaba");
  // }, 1000)}, [])

  useEffect(() => {
 //! componentDidMount=component ilk render edildiğinde []
    const time = setInterval(() => {
      setZaman(moment());
      console.log("merhaba");
    }, 1000);
     //! componentWillUNmount=component değiştiğinde çalışan
   
    return () => {
     clearInterval(time);
      console.log("baska sayfaya gidince setInterval durdu");
    };
  }, []);

  return (
    <div>
      <div>
        {zaman.format("HH")}
        {zaman.format("ss") % 2 === 0 ? ":" : " "}
        {zaman.format("mm")}
        {zaman.format("ss") % 2 === 0 ? ":" : " "}
        {zaman.format("ss")}
      </div>
    </div>
  );
}

export default Clock