import React from "react";
import { useState, useEffect } from "react";

import ListItemContainer from "../components/ListItemContainer/ListItemContainer";

const Productos = () => {
  const [items, setItems] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(!open);
    }, 2000);
  }, []);

  return <>{open && <ListItemContainer items={items} setItems={setItems} />}</>;
};

export default Productos;
