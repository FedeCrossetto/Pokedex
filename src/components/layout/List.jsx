import React from 'react'
import { Box, Input, Image, Text, HStack, VStack, Button } from '@chakra-ui/react'

export const List = () => {
    return (
        <Box boxShadow="lg" h='6rem' w='48rem' px="2rem" py="0.5rem" align="right" borderRadius="2xl" bg="brand.light">
            <HStack >

                <Image src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
                    boxSize="5rem" />
                <VStack align="left">
                    <Text fontSize="sm" fontWeight={600}>Bulbasaur</Text>
                    <Text fontSize="xs">#001</Text>
                </VStack>
                <VStack pl="24rem">
                    <HStack color="black" fontWeight="600">
                        <Box bg="green" borderRadius="lg" py="2px" px="6px"><Text fontSize="xs">Plant</Text></Box>
                        <Box bg="red" borderRadius="lg" py="2px" px="6px"><Text fontSize="xs"  >Fire</Text></Box>
                    </HStack>
                </VStack>
            </HStack>
        </Box>
    )
}
