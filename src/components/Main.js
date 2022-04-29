import React,{useState} from 'react';
import { UseFetch } from './UseFetch';

export const Main = () => {
    const [url,setUrl] = useState('https://www.pokeapi.co/api/v2/pokemon')
    const state = UseFetch(url)
    const {loading,data} = state

    loading?console.log('loading'):console.log(data.results)

  return (
    <div>Página de Main</div>
  )
}
