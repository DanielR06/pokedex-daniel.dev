import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOnePokemon } from '../services';
import pokeShadow from '/poke-shadow.png';

const typeColors = {
  electric: '#FFEA70',
  normal: '#B09398',
  fire: '#FF675C',
  water: '#0596C7',
  ice: '#AFEAFD',
  rock: '#999799',
  flying: '#7AE7C7',
  grass: '#4A9681',
  psychic: '#FFC6D9',
  ghost: '#561D25',
  bug: '#A2FAA3',
  poison: '#795663',
  ground: '#D2B074',
  dragon: '#DA627D',
  steel: '#1D8A99',
  fighting: '#2F2F2F',
  default: '#2A1A1F',
};

const PokemonCard = ({ pokemonData }) => {
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();
  const loadPokemon = async () => {
    const pokemonInfo = await getOnePokemon(pokemonData.pokemon.url);
    setPokemon(pokemonInfo);
  };
  const handleClickNavigate = () => {
    navigate(`/pokedex/${pokemon.id}`, { state: { pokemon } });
  };
  useEffect(() => {
    loadPokemon();
    console.log(pokemon);
  }, []);
  useEffect(() => {
    if (pokemon) {
      console.log(pokemon);
    }
  }, [pokemon]);
  return (
    <>
      {pokemon && (
        <article onClick={handleClickNavigate} className="pokemon_card">
          <h1>{pokemon.name.toUpperCase()}</h1>
          <div className="pokemon_img_container">
            <img
              src={
                pokemon.sprites.front_default ? pokemon.sprites.front_default : pokeShadow
              }
              alt={pokemon.name}
              className="pokemon_img"
            />
          </div>
          <div className="pokemon_types">
            {pokemon.types.map((type) => (
              <article>
                <p style={{ color: `${typeColors[type.type.name]}` }}>{type.type.name}</p>
              </article>
            ))}
          </div>
          <div></div>
          {pokemon.stats.map((stat) => (
            <article className="pokemon_stats">
              <p>{stat.stat.name}</p>
              <p>{stat.base_stat}</p>
            </article>
          ))}
        </article>
      )}
    </>
  );
};

export default PokemonCard;
{
  /* <header>
  <div>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
  </div>
</header>
<section>
  <section>
    <h1>{pokemon.name}</h1>
    <p>Tipo</p>
    <p>{pokemon.types[0].type.name}</p>
  </section>

  <section>
    {pokemon.stats.map((stat) => (
      <section key={stat.stat.name}>
        <h3>{stat.stat.name.toUpperCase()}</h3>
        <p>{stat.base_stat}</p>
      </section>
    ))}
  </section>
</section> */
}
