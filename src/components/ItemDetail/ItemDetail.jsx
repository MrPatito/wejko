import React from "react";

import Counter from "../Counter/Counter";
import Info from "../Info/Info";

const ItemDetail = ({ img, title, setItems, items }) => {
  return (
    <div>
      <div className="products">
        <div className="image">
          <img src={img} alt="algo paso" />
        </div>
        <div className="name">
          <h2>{title}</h2>
        </div>
        <Info />
        <Counter unitStock={3} setItems={setItems} items={items} />
      </div>
    </div>
  );
};

export default ItemDetail;
