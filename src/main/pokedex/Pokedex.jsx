import React,{useEffect, useState} from 'react';
import { UseFetch } from '../../hooks/UseFetch';
import { Container, Input, InputGroup, InputRightElement, Button, Select,HStack,Text,Box,Spinner,Flex } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowDownIcon, Search2Icon, ArrowBackIcon } from "@chakra-ui/icons";
import {Cards} from '../../components/layout/Cards';
import {List} from '../../components/layout/List';

export const Pokedex = () => {
  // const [url,setUrl] = useState('https://www.pokeapi.co/api/v2/pokemon')
  const [url,setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
  const state = UseFetch(url)
  const [paginate,setPaginate] = useState(0);
  const page = 10 ;//Setear tamaño de items por página.
  
  const {loading,data} = state

  const PreviousPage = (val) =>{
    debugger;
    setUrl(`https://pokeapi.co/api/v2/pokemon?offset=${val}&limit=${page}`);
    setPaginate(val)
  }
  const NextPage = (val) =>{
    debugger;
    setUrl(`https://pokeapi.co/api/v2/pokemon?offset=${val}&limit=${page}`);
    setPaginate(val)
  }


  useEffect(() => {
    console.log('url',url)
  }, [url])
  
  console.log('paginate',paginate)
  return (
    <Container minWidth={["570px", "767px", "992px", "1200px"]} px="1rem" pt="2rem" color="brand.tertiary">
       <InputGroup width='24rem' >
        <Input placeholder='Search your Pokémon!' bg="brand.white" />
        <InputRightElement children={<Search2Icon color="brand.primary" />} />
      </InputGroup>
      <HStack spacing={3} width='auto' my="2rem" >
        <Select variant='outline' bg="brand.light" placeholder='Type' rightSelectedIcon={<ArrowDownIcon/>}/>
        <Select variant='outline' bg="brand.light" placeholder='Height' />
        <Select variant='outline' bg="brand.light" placeholder='Weight' />
      </HStack>
      {
        
        loading ? 
          <Spinner
            thickness='4px'
            emptyColor='gray.200'
            color='brand.primary'
            size='xl'
          />
       : <Box pos="absolute" >
          <Cards results={data.results}/>
          <Flex >
          {/* <Button mt="1rem" mx="1rem" variant='outline' colorScheme='teal' leftIcon={<ArrowBackIcon />} onClick={()=> PreviousPage()} disabled={(paginate < 0 ? true : false)}>Prev</Button>
          <Button mt="1rem" mx="1rem" variant='outline' colorScheme='teal' rightIcon={<ArrowForwardIcon />} onClick={()=> NextPage()}>Next</Button> */}
          <Button mt="1rem" mx="1rem" variant='outline' colorScheme='teal' leftIcon={<ArrowBackIcon />} onClick={()=>PreviousPage(paginate- page)} disabled={(paginate <= 0 ? true : false)}>Prev</Button>
          <Button mt="1rem" mx="1rem" variant='outline' colorScheme='teal' rightIcon={<ArrowForwardIcon />} onClick={()=>NextPage(paginate+ page)}>Next</Button>
          </Flex>
        </Box>
      }
 
    </Container>
  )
}
