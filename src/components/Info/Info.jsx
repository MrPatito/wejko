import React from "react";
import { useState } from "react";

const Info = () => {
  const [pokemon, setPokemon] = useState(null);

  let URL = "https://pokeapi.co/api/v2/pokemon/1";

  fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  return (
    <div>
      <p></p>
    </div>
  );
};

export default Info;
