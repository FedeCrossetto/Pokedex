import React from 'react'
import { UseFetch } from '../../hooks/UseFetch'
import { Container,Image, Input, InputGroup, InputRightElement, Button, Select, HStack, Text, Box, Spinner, Flex } from '@chakra-ui/react'


export const CardInfo = ({results}) => {
    const state = UseFetch(results)
    const { loading, data } = state;

    loading?console.log('loading'):console.log('Desde CardInfo',data.results)
  return (
   <Container pos="absolute" top="6rem">
       <Box bg="brand.light"
            w="32rem"
            h="48rem"
            borderRadius="xl"
            boxShadow="xl"
            >
               {!loading &&
                (
                 <Image src={data.sprites.front_default}
                     boxSize={["2rem", "3rem", "4rem", "5rem"]}
                     pos="absolute"
                     left="1rem" />
                )
                }
       </Box>
   </Container>
  )
}
