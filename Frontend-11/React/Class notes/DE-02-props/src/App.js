import React from "react";
import Person from "./Person";

const App = () => {
  return (
    <div>
      <Person
        name="Ayse Yılmaz"
        img="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg"
        tel="555 55 55"
      />

      <Person
        name="Osman Kara"
        img="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"
        tel="555 33 55"
      />
    </div>
  );
};

export default App;
