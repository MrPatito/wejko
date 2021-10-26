import React from "react";
import { useState } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import { products } from "../../mock/products";

const ListDetailContainer = ({
  nombre,
  descripcion,
  img,
  id,
  setItems,
  items,
}) => {
  //   const [productito, setProductito] = useState(null);

  products.find((producto) => producto.id === id);

  //   console.log(product);

  return (
    <div className="contenedor">
      <ItemDetail
        setItems={setItems}
        items={items}
        key={id}
        title={nombre}
        text={descripcion}
        img={img}
      />
    </div>
  );
};

export default ListDetailContainer;
