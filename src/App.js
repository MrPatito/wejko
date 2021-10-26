import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./Css/App.css";
import NavBar from "./components/NavBar/NavBar";
import Productos from "./pages/Productos";
import ItemDetailPage from "./pages/ItemDetailPage";

import HeaderAPI from "./components/HeaderApi/HeaderAPI";

function App() {
  const [items, setItems] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(!open);
    }, 2000);
  }, []);

  return (
    <div className="grilla">
      <BrowserRouter>
        <NavBar items={items} />
        <Switch>
          <Route exact path="/">
            <HeaderAPI />
          </Route>
          <Route path="/products">
            <Productos />
          </Route>
          <Route path="/product/:id">
            <ItemDetailPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
