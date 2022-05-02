import React, { useEffect, useState } from 'react';
import { UseFetch } from '../../hooks/UseFetch';
import { Container, Input, InputGroup, InputRightElement, Button, Select, HStack, VStack, Text, Box, Spinner, Flex } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowDownIcon, Search2Icon, ArrowBackIcon } from "@chakra-ui/icons";
import { Cards } from '../../components/layout/Cards';
import { CardInfo } from '../../components/layout/CardInfo';

export const Pokedex = () => {
  // const [url,setUrl] = useState('https://www.pokeapi.co/api/v2/pokemon')
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
  // const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/bulbasaur')
  let state = UseFetch(url)
  const [paginate, setPaginate] = useState(0);
  const page = 10;//Setear tamaño de items por página.
  const [filter,setFilter] = useState(0);

  const { loading, data } = state

  const PreviousPage = (val) => {
    setUrl(`https://pokeapi.co/api/v2/pokemon?offset=${val}&limit=${page}`);
    setPaginate(val)
  }
  const NextPage = (val) => {
    setUrl(`https://pokeapi.co/api/v2/pokemon?offset=${val}&limit=${page}`);
    setPaginate(val)
  }
  console.log('AVER ACA',data)
  const filterShearch = e =>{
    setFilter(e.length);
    // data.results.filter((e)=> e == data.results.name)
    // setUrl(`https://pokeapi.co/api/v2/pokemon/${e}`);
    // (e.length === 0) && setUrl(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`);
  }

  // useEffect(() => {
   
  // }, [url])
  

  return (
    <Container minWidth={["570px", "767px", "992px", "1200px"]} pt="2rem" color="brand.tertiary">
      <InputGroup width='36rem' ml="1rem" onChange={(e) => filterShearch(e.target.value)} >
        <Input placeholder='Search your Pokémon!' bg="brand.white" />
        <InputRightElement children={<Search2Icon color="brand.primary" />} />
      </InputGroup>
      <HStack spacing={3} width='36rem' my="1rem" ml="1rem" >
        <Select variant='outline' bg="brand.light" placeholder='Type' />
        <Select variant='outline' bg="brand.light" placeholder='Height' />
        <Select variant='outline' bg="brand.light" placeholder='Weight' />
      </HStack>
      {

        loading ?
          <Spinner
            ml="16rem"
            mt="8rem"
            thickness='4px'
            emptyColor='gray.200'
            color='brand.primary'
            size='xl'
          />
          :
          <HStack pos="absolute">
              <Box>
                <Cards results={data.results}/>
                <Button h="2rem" mt="1rem" ml="1rem" variant='outline' colorScheme='teal' leftIcon={<ArrowBackIcon />} onClick={() => PreviousPage(paginate - page)} disabled={(paginate <= 0 ? true : false)}>Prev</Button>
                <Button h="2rem" mt="1rem" ml="1rem" variant='outline' colorScheme='teal' rightIcon={<ArrowForwardIcon />} onClick={() => NextPage(paginate + page)}>Next</Button>
              </Box>
          </HStack>
      }
    </Container>
  )
}
