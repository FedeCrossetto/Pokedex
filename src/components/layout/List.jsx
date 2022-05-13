import React,{useState,useEffect,useContext} from 'react'
import { UseFetch } from '../../hooks/UseFetch'
import { Box, Image, Text, HStack, VStack, Button, Flex ,Container} from '@chakra-ui/react'
import { CardInfo } from './CardInfo'
import PokeContext from '../../context/Pokedex/PokeContext';

export const List = ({ url }) => {
    const state = UseFetch(url)
    const { loading, data } = state
    const{getDataId} = useContext(PokeContext);

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
        !loading &&
        <Flex justify="left">
            <HStack>
                <Box>
                <Button boxShadow="lg"
                    h={["2rem", "2rem", "3rem", "4rem"]}
                    w={["12rem", "16rem", "24rem", "36rem"]}
                    px="2rem"
                    
                    borderRadius="2xl"
                    bg="brand.light"
                    key={data.id}
                    textTransform="capitalize"
                    mt="0.7rem"
                    onClick={()=> getDataId(data.id)}
                >
                    <HStack>
                        <Image src={data.sprites.front_default}
                            boxSize={["2rem", "2rem", "3rem", "4rem"]}
                            pos="absolute"
                            left="1rem" />
                        <VStack pos="absolute" left={["3rem", "3rem", "4rem", "6rem"]}>
                            <Text fontSize="sm" fontWeight={600}>{data.forms[0].name}</Text>
                            <Text fontSize="xs">#{sortOrder(data.id)}</Text>
                        </VStack>
                        <VStack>
                            <HStack fontSize="xs">
                                {data.types.map(t => (<Box bg={'brand.' + t.type.name} borderRadius="md" py={["2px", "3px", "4px", "6px"]} px={["2px", "6px", "8px", "12px"]} ml={["14rem", "16rem", "20rem", "24rem"]} color="brand.black">{t.type.name}</Box>))}
                            </HStack>
                        </VStack>
                    </HStack>
                </Button>
                </Box>
            </HStack>
        </Flex>
    )
}
