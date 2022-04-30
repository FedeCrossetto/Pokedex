import React from 'react'
import { List } from './List'
import { Container, Stack, HStack, Flex } from '@chakra-ui/react'


export const Cards = ({results}) => {
  return (
    
    <Container>
      {results.map(x=>
        (
         <List url={x.url}/>
         )
        )}
    </Container>
  )
}
