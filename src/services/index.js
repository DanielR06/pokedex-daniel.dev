import axios from 'axios';

export const getAllPokemons = async () => {
  try {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1300');
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getOnePokemon = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllTypes = async () => {
  try {
    const res = await axios.get('https://pokeapi.co/api/v2/type/');
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};
export const getOnePokemontype = async (type) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
    return res.data.pokemon.map((pokemonData) => pokemonData.pokemon);
  } catch (error) {
    console.error(error);
  }
};
