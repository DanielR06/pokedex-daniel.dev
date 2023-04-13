/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import { UserContext } from '../contexts/UserContext';
import { usePagination } from '../hooks/UsePagination';
import { Form, useLoaderData } from 'react-router-dom';
const Pokedex = () => {
  const { user } = useContext(UserContext);
  const { pokemons, types, name, type } = useLoaderData();
  const [pokemonName, setPokemonName] = useState(name ?? '');
  const [pokemonType, setPokemonType] = useState(type ?? '');
  const pokemonsPagination = usePagination(pokemons, 28);
  const handleNameChange = (e) => {
    const namePokemonValue = e.target.value;
    setPokemonName(namePokemonValue);
  };
  const handleTypeChange = (e) => {
    const typePokemonValue = e.target.value;
    setPokemonType(typePokemonValue);
  };
  useEffect(() => {
    setPokemonName(name);
  }, [name]);
  useEffect(() => {
    setPokemonType(type);
  }, [type]);
  return (
    <div>
      <p>
        <span>Bienvenido {user}, aqui encontraras tus pokemones favoritos</span>
      </p>
      <div className="flex flex-row gap-2 flex-wrap">
        {pokemonsPagination.pages.map((page) => (
          <button
            key={page}
            onClick={() => pokemonsPagination.changePageTo(page)}
            className={pokemonsPagination.currentPage === page ? 'text-red-500' : ''}
          >
            {page}
          </button>
        ))}
      </div>
      <div>
        <Form>
          <input
            type="text"
            name="pokemon_name"
            value={pokemonName}
            onChange={handleNameChange}
          />
          <select name="pokemon_type" value={pokemonType} onChange={handleTypeChange}>
            <option value="">All</option>
            {types.map((type) => (
              <option key={type.url} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
          <button type="submit">Search</button>
        </Form>
      </div>
      <section className="flex flex-wrap">
        {pokemonsPagination.listSlice.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemonData={{ pokemon }} />
        ))}
      </section>
    </div>
  );
};

export default Pokedex;