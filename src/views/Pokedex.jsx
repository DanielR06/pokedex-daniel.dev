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
      <p className="greeting">
        <span>Bienvenido {user}</span>, aqui encontraras tus pokemones favoritos
      </p>
      <Form className="form">
        <div className="form_pokemon">
          <input
            type="text"
            name="pokemon_name"
            value={pokemonName}
            onChange={handleNameChange}
            className="input_pokemon_name"
            placeholder="Search pokemon"
          />
          <select
            name="pokemon_type"
            value={pokemonType}
            onChange={handleTypeChange}
            className="input_pokemon_type"
          >
            <option value="">All</option>
            {types.map((type) => (
              <option key={type.url} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
          <button type="submit" className="btn_search">
            <i class="bx bx-search-alt-2"></i>
          </button>
        </div>
      </Form>
      <section className="list_pokemons">
        {pokemonsPagination.listSlice.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemonData={{ pokemon }} />
        ))}
      </section>
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
    </div>
  );
};

export default Pokedex;
