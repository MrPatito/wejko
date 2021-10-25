import React from "react";
import { useState } from "react";

const Counter = ({ unitStock, productNo, items, setItems }) => {
  const [counter, setCounter] = useState(0);
  const [stock, setStock] = useState(unitStock);
  // const [mounted, setMounted] = useState(false);
  const [cart, setCart] = useState({ cant: "" });

  const { cant } = cart;
  // const deploy = (event)=>{
  //   setMounted(!mounted);
  // }

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     if (mounted === false) {
  //       console.log('hidden')
  //     }
  //     else{
  //       console.log('deployed')
  //     }
  //   },1000)
  // }, [mounted])

  function decr() {
    if (counter > 0) {
      setCounter(counter - 1);
      setStock(stock + 1);
      setItems(items - 1);

      console.log(`Number ${productNo} stock: ${stock}`);
      console.log(counter);
      console.log(cant);
    } else {
      console.log("ahre");
      console.log(`Number ${productNo} stock: ${stock}`);
      console.log(counter);
    }
  }

  function incr() {
    if (stock > 0) {
      setCounter(counter + 1);
      setStock(stock - 1);
      setItems(items + 1);
      console.log(stock);
      console.log(counter);
    } else {
      setStock(0);
      console.log(stock);
      console.log(counter);
      console.log("ahre no queda nada");
    }
  }

  const handleChange = (event) => {
    let eventValue = parseInt(event.target.value);
    console.log("valor", eventValue);
    setCart({ ...cart, [event.target.name]: event.target.value });
  };
  // function addToCart() {
  //   let totalCart = items.filter(function (item) {
  //     return item.name === productNo;
  //   });
  //   console.log(totalCart);
  //   setCart(totalCart);
  // }

  return (
    <div className="counter">
      <div id="input" class="input-group mb-3">
        <form className="form">
          <label>
            <input
              className="cantidad"
              name="cant"
              onChange={handleChange}
              type="string"
              value={counter}
            ></input>
          </label>
        </form>
      </div>

      <div className="actionButtons">
        <button
          onClick={incr}
          id="incr"
          type="button"
          className="btn btn-primary"
        >
          +
        </button>

        <button
          onClick={decr}
          id="decr"
          type="button"
          className="btn btn-primary"
        >
          -
        </button>

        <button
          // onClick={() => onAdd(counter)}
          id="addToCart"
          type="button"
          className="btn btn-primary"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Counter;
