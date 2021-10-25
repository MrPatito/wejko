import React from "react";
import Counter from "../Counter/Counter";

const Item = ({ text, title, img, items, setItems }) => {
  return (
    <div className="products">
      <div className="image">
        <img src={img} alt="algo paso" />
      </div>
      <div className="name">
        <h2>{title}</h2>
      </div>
      <div className="info">
        <p>{text}</p>
      </div>
      <Counter unitStock={3} setItems={setItems} items={items} />
    </div>
  );
};

export default Item;
