import { GET_POKEMONS, GET_POKEMONID } from "../types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemon: payload
      }
    case GET_POKEMONID:
      return {
        ...state,
        selectedPokemon: payload
      }
    default:
      return state;
  }
};
