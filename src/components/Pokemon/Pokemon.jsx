import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = ({ name }) => {
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

      setPokemon(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="pokemonCard">
      <div className="pokemon">
        <img
          src={pokemon ? pokemon.sprites.front_default : ""}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Nombre: {name.toUpperCase()}</h5>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
