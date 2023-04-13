import { getAllPokemons, getAllTypes, getOnePokemontype } from '../../services';

export const pokedexLoader = async ({ request }) => {
  const types = await getAllTypes();
  const url = new URL(request.url);
  const name = url.searchParams.get('pokemon_name')?.toLocaleLowerCase();
  const type = url.searchParams.get('pokemon_type')?.toLocaleLowerCase();
  let pokemons;

  if (!name && !type) {
    pokemons = await getAllPokemons();
  } else if (type && name) {
    pokemons = await getOnePokemontype(type);
    pokemons = pokemons.filter((pokemon) => pokemon.name.includes(name));
  } else if (name) {
    pokemons = await getAllPokemons();
    pokemons = pokemons.filter((pokemon) => pokemon.name.includes(name));
  } else if (type) {
    pokemons = await getOnePokemontype(type);
  }
  return { pokemons, types, name, type };
};
