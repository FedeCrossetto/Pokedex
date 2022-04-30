import React from 'react'
import { UseFetch } from '../../hooks/UseFetch'
import { Box, Input, Image, Text, HStack, VStack, Button ,Flex} from '@chakra-ui/react'

export const List = ({ url }) => {
    const state = UseFetch(url)
    const { loading, data } = state

    // loading ? console.log('loadingList') : console.log('Desde List', data)

    const sortOrder = (order) => {
        if (order < 10) {
            return `00${order}`
        } else if (order < 100) {
            return `0${order}`
        } else {
            return order
        }
    }

    return (
        !loading&&
        <Flex justify="left">
        <Button boxShadow="lg" 
             h='5rem' 
             w='48rem' px="2rem" 
             py="0.5rem"
             borderRadius="2xl" 
             bg="brand.light" 
             key={data.id} 
             textTransform="capitalize"
             mt="0.7rem"
        >
            <HStack>
                {/* <Image src={'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + sortOrder(data.id) + '.png'}
                     boxSize="5rem" /> */}
                     <Image src={data.sprites.front_default}
                     boxSize="5rem"
                     pos="absolute"
                     left="1rem" />
                <VStack pos="absolute"  left="6rem">
                    <Text fontSize="sm" fontWeight={600}>{data.forms[0].name}</Text>
                    <Text fontSize="xs">#{sortOrder(data.id)}</Text>
                </VStack>
                <VStack>
                    <HStack fontSize="xs">
                        {data.types.map(t =>(<Box bg={'brand.'+t.type.name} borderRadius="md" py="6px" px="12px" ml="24rem" color="brand.black">{t.type.name}</Box>))}                                         
                    </HStack>
                </VStack>
            </HStack>
        </Button>
        </Flex>
    )
}
