import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const getPokemonById = async (id) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();
  const { state } = useLocation();
  const loadData = async () => {
    const pokemonData = await getPokemonById(id);
    setPokemon(pokemonData);
  };
  useEffect(() => {
    if (!state?.pokemon) loadData();
    else setPokemon(state.pokemon);
  }, []);
  return (
    <div>
      <h1>PokemonDetail</h1>
      {pokemon && (
        <>
          <p>El id del pokemon seleccionado es: {id}</p>
          <h1>{pokemon.name}</h1>
          <img src={pokemon?.sprites.other.dream_world.front_default} alt="" />
        </>
      )}
    </div>
  );
};

export default PokemonDetail;
