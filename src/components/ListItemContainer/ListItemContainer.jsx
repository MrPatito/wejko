import React from "react";
import Item from "../Item/Item";
import { products } from "../../mock/products";
const ListItemContainer = ({ setItems, items }) => {
  return (
    <div className="contenedor">
      {products.map((product) => (
        <Item
          setItems={setItems}
          items={items}
          key={product.id}
          title={product.nombre}
          text={product.descripcion}
          img={product.img}
        />
      ))}
    </div>
  );
};

export default ListItemContainer;
