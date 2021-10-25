import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const HeaderAPI = () => {
  const [pokemon, setPokemon] = useState(null);

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  const getPokemon = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
      setLoading(false);
      setPokemon(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPokemon();
  }, []);

  let filter =
    pokemon &&
    pokemon.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="header">
      <form className="d-flex">
        <input
          className="search"
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search Pokemon"
        />
      </form>
    </div>
  );
};

export default HeaderAPI;
