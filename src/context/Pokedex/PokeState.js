import React, { useReducer } from "react";
import PokeReducer from "./PokeReducer";
import PokeContext from "./PokeContext";
import axios from "axios";

const PokeState = (props) => {
  const initialState = {
    pokemon: [],
    selectedPokemon: null,
  };

  const [state, dispatch] = useReducer(PokeReducer, initialState);

  const getData = async (start=0) => {
    const resp = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${start}&limit=10`
    );
    
    dispatch({
      type: 'GET_POKEMONS',
      payload: resp.data.results
    });
  };

  const getDataId = async (id=1) => {
    const resp = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    console.log('id',id)
    dispatch({
      type: 'GET_POKEMONID',
      payload: resp.data
    });
};

  return (
    <PokeContext.Provider
      value={{
        pokemon: state.pokemon,
        selectedPokemon: state.selectedPokemon,
        getData,
        getDataId,
      }}
    >
      {props.children}
    </PokeContext.Provider>
  );
};

export default PokeState;
