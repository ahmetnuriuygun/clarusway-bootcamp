import {useState} from "react";

const GorevEkle = ({ gorevler, setGorevler }) => {
 const [text,setText]=useState("")
 const [day,setDay]=useState("")
console.log(gorevler);
 
const [buton, setButon] = useState({
  renk: "red",
  yazi: "CLOSE ADD TASK BAR"
 });
 

const butonClick=()=>{

if(buton.renk==="red"){

setButon({
  renk: "purple",
  yazi: "SHOW ADD TASK BAR",
});
}else {
 setButon({
  renk: "red",
  yazi: "CLOSE ADD TASK BAR",
});}
}
const yapSubmit=(e)=> {
  e.preventDefault();

  const id= gorevler.length+1
 setGorevler([...gorevler,{ id: id, text:text, day: day, bitti:false} ]);

}
  return (
    <div>
      <header className="header">
        <h1>TASK TRACKER</h1>
        <button
          className="btn"
          style={{ backgroundColor: buton.renk }}
          onClick={butonClick}
        >
          {buton.yazi}
        </button>
      </header>
      {buton.renk === "red" && (
        <form onSubmit={yapSubmit}>
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
              id="text"
              type="text"
              name="text"
              value={gorevler.text}
              placeholder="Add Task"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type="date"
              name="day"
              value={gorevler.day}
              placeholder="Add Task"
              onChange={(e) => {
                setDay(e.target.value);
              }}
            />
          </div>
          <div>
            <button className="btn btn-submit" type="submit">
              SUBMİT
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default GorevEkle;
