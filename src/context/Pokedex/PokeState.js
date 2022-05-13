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

  const getDataId = async (value) => {
    const resp = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${value}`
    );
    dispatch({
      type: 'GET_POKEMONID',
      payload: resp.data
    });
};

const getDataFilter = async (value) => {
  const resp = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=880`
);
let filter = resp.data.results.filter((element)=> element.name.includes(value.toLowerCase()))
  console.log('getDataFilter',resp.data.results.filter((element)=> element.name.includes(value.toLowerCase())))
  dispatch({
    type: 'GET_POKEMONNAME',
    payload: filter.slice(0,10) //Solo se deben mostrar 10 para no romper el formato.
  });
};

  return (
    <PokeContext.Provider
      value={{
        pokemon: state.pokemon,
        selectedPokemon: state.selectedPokemon,
        getData,
        getDataId,
        getDataFilter
      }}
    >
      {props.children}
    </PokeContext.Provider>
  );
};

export default PokeState;
