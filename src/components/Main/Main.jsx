import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import ListItemContainer from "../ListItemContainer/ListItemContainer";
const Main = () => {
  const [items, setItems] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(!open);
    }, 2000);
  }, []);

  return (
    <div className="grilla">
      <NavBar items={items} />
      {open && <ListItemContainer items={items} setItems={setItems} />}
    </div>
  );
};

export default Main;
