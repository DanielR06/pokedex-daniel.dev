import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getOnePokemon } from '../services';
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
  }, []);
  return (
    <>
      {pokemon && (
        <article onClick={handleClickNavigate} className="w-72">
          <header>
            <div></div>
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
          </section>
        </article>
      )}
    </>
  );
};

export default PokemonCard;
