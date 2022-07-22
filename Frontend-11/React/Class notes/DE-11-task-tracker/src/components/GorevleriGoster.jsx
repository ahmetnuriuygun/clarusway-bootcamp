import React from "react";
import { FaTimesCircle } from "react-icons/fa";
//!https://react-icons.github.io/react-icons
const GorevleriGoster = ({ gorevler, setGorevler }) => {
  const deleteGorev = (id) => {
    setGorevler(gorevler.filter((i) => i.id !== id));
  };

  return (
    <div>
      {gorevler.map((x) => {
        const { id, text, day, bitti } = x;

        return (
          <div
            className={bitti ? "done" : "gorev"}
            key={id}
            onDoubleClick={() =>
              setGorevler(
                gorevler.map((i) =>
                  i.id === id ? { ...i, bitti: !i.bitti } : i
                )
              )
            }
          >
            <h3>
              {text}
              <FaTimesCircle
                style={{ color: "red" }}
                onClick={() => deleteGorev(id)}
              />
            </h3>
            <h6>{day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;
