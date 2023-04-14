import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import pokeShadow from '/poke-shadow.png';
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
    console.log(state.pokemon);
  }, []);
  return (
    <div >
      {pokemon && (
        <div className="container_details">
          <img
            src={
              pokemon?.sprites.other.dream_world.front_default
                ? pokemon.sprites.front_default
                : pokeShadow
            }
            alt=""
          />
          <p>#{id}</p>
          <h1
            style={{
              color: `${state.typeColors[pokemon.types[0].type.name]}`,
              fontSize: '40px',
            }}
          >
            {pokemon.name.toUpperCase()}
          </h1>
          <div className="flex gap-8 text-center">
            <div className="">
              <p>WEIGTH</p>
              <p>{pokemon.weight}</p>
            </div>
            <div>
              <p>HEIGTH</p>
              <p>{pokemon.height}</p>
            </div>
          </div>
          <div className="flex text-center gap-5">
            <div>
              <h1>Type</h1>
              <div className="flex gap-2">
                {pokemon.types.map((type) => (
                  <article
                    style={{
                      backgroundColor: `${state.typeColors[type.type.name]}`,
                      borderRadius: '5px',
                    }}
                  >
                    <p>{type.type.name}</p>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <h1>Abilities</h1>
              <div className="flex gap-2">
                {pokemon.abilities.map((ability) => (
                  <article style={{ border: '0.5px solid black', borderRadius: '5px' }}>
                    <p>{ability.ability.name}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div className="pokemon_stats_details">
            {pokemon.stats.map((stat) => (
              <article className="pokemon_stats_detail">
                <p>{stat.stat.name.toUpperCase()}</p>
                <p>{stat.base_stat}</p>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetail;
