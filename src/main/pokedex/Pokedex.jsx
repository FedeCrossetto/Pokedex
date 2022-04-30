import React from 'react'
import { Container, Input, InputGroup, InputRightElement, VStack, Select,HStack } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowDownIcon, Search2Icon } from "@chakra-ui/icons";
import { CardPokemon } from '../../components/layout/CardPokemon'
import {List} from '../../components/layout/List'

export const Pokedex = () => {
  return (
    <Container minWidth={["570px", "767px", "992px", "1200px"]} px="1rem" pt="2rem" color="brand.tertiary">
      <InputGroup width='24rem' >
        <Input placeholder='Search your Pokémon!' bg="brand.white" />
        <InputRightElement children={<Search2Icon color="brand.primary" />} />
      </InputGroup>
      <HStack spacing={3} width='auto' my="2rem" >
        <Select variant='outline' bg="brand.light" placeholder='Type' rightSelectedIcon={<ArrowDownIcon/>}/>
        <Select variant='outline' bg="brand.light" placeholder='Weaknesses' />
        <Select variant='outline' bg="brand.light" placeholder='Ability' />
        <Select variant='outline' bg="brand.light" placeholder='Height' />
        <Select variant='outline' bg="brand.light" placeholder='Weight' />
      </HStack>
      {/* <CardPokemon/> */}

      <VStack align="left" py="1rem">
      <List/>
      <List/>
      </VStack>

    </Container>
  )
}
