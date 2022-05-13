import { GET_POKEMONS, GET_POKEMONID, GET_POKEMONNAME } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
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
    case GET_POKEMONNAME:
      return {
          ...state,
          pokemon: payload
        }
    default:
      return state;
  }
};
