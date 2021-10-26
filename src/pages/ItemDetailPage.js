import React from "react";
import { useParams } from "react-router-dom";

import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

const ItemDetailPage = () => {
  let { id } = useParams();
  return (
    <>
      <ItemDetailContainer id={id} />
    </>
  );
};

export default ItemDetailPage;
