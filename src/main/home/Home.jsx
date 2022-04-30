import React ,{useState} from 'react'
import {Container,Input} from '@chakra-ui/react'
import { UseFetch } from '../../hooks/UseFetch'

export const Home = () => {
  const [url,setUrl] = useState('https://www.pokeapi.co/api/v2/pokemon')
  const state = UseFetch(url)
  const {loading,data} = state

  loading?console.log('loading'):console.log(data.results)

  return (
    <Container minWidth={["570px", "767px", "992px", "1200px"]} px="0" >
    </Container>
  )
}
