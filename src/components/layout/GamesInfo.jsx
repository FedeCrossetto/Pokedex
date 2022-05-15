import React from "react";
import {
  Box,
  Image,
  Text,
  HStack,
  VStack,
  Button,
  Flex,
  Container,
  Link,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { BsDownload } from "react-icons/bs";

export const GamesInfo = (data) => {
  const { name, category, date, image, url } = data.data;
  // console.log('data',data);
  return (

        <Box
          boxShadow="md"
          h={["6rem", "8rem", "14rem", "16rem"]}
          w={["8rem", "10rem", "12rem", "16rem"]}
          px="2rem"
          borderRadius="xl"
          outline="1px solid rgba(178,178,178, .25)"
        >
          <VStack>
            <Image pt="1rem" src={image} borderRadius="3xl" boxSize={["4rem", "6rem", "8rem", "10rem"]} />
            <Text fontWeight="bold" fontSize="xs">{name}</Text>
            <Link href={url} isExternal>
              <HStack fontSize="xs" color="brand.steel">
                <Text>Download</Text>
                <BsDownload />
              </HStack>
            </Link>
              <Box w="6rem" h="auto" align="center" borderRadius="lg" bg="brand.transparent">
               <Text p="0.3rem" fontSize="xs">{date}</Text>
              </Box>
          </VStack>
        </Box>
  );
};
