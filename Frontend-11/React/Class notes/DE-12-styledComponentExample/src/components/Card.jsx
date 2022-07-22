import React from 'react'
import CardSSS from './styles/CardSSS';
import data from "../data.js"
import { ImageSSS } from './styles/HeaderSSS';
const Card = () => {
  return (
    <>
      {data.map((item) => {
        return (
          <CardSSS key={item.id} odd={item.id % 2 && "row-reverse"}>
            <div>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
            <div>
              <ImageSSS src={`./images/${item.image}`} />
            </div>
          </CardSSS>
        );
      })}
    </>
  );
}

export default Card