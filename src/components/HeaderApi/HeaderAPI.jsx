import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";

const HeaderAPI = () => {
  const [pokemon, setPokemon] = useState(null);

  const [search, setSearch] = useState("");

  const getPokemon = async () => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);

      setPokemon(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const searchPokemon = (e) => {
    getPokemon();
  };

  let filter =
    pokemon &&
    pokemon.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="header">
      <p>Hola soy un Home</p>

      <form className="d-flex">
        <input
          className="search"
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search Pokemon"
        />
      </form>
      <button onClick={searchPokemon} className="btn btn-primary">
        Search
      </button>
      <div className="row">
        {pokemon && filter.map((pokemon) => <Pokemon name={pokemon.name} />)}
      </div>
    </div>
  );
};

export default HeaderAPI;
