import React, { useEffect, useState, useContext } from "react";
import {
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  VStack,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { ArrowForwardIcon, Search2Icon, ArrowBackIcon } from "@chakra-ui/icons";
import { Cards } from "../../components/layout/Cards";
import { CardInfo } from "../../components/layout/CardInfo";
import PokeContext from "../../context/Pokedex/PokeContext";

export const Pokedex = () => {
  const [paginate, setPaginate] = useState(0);
  const [displayPage, setDisplayPage] = useState(true);
  const { pokemon, getData, getDataFilter } = useContext(PokeContext);

  useEffect(() => {
    getData(paginate);
  }, [paginate]);

  const filterSearch = (e) => {
    if (e.length !== 0) {
      getDataFilter(e);
      setDisplayPage("none");
    } else {
      getData(paginate);
      setDisplayPage("visibility");
    }
  };

  return (
    <Container
      minWidth={["570px", "767px", "992px", "1200px"]}
      color="brand.tertiary"
      h="100vh"
    >
      <InputGroup width="36rem" ml="1rem">
        <Input
          placeholder="Search your Pokémon!"
          bg="brand.white"
          fontSize="sm"
          h="2rem"
          onChange={(e) => filterSearch(e.target.value)}
        />
        <InputRightElement
          children={<Search2Icon color="brand.primary" mb="0.5rem" />}
        />
      </InputGroup>
      {pokemon === [] ? (
        <Spinner
          ml="16rem"
          mt="8rem"
          thickness="4px"
          emptyColor="gray.200"
          color="brand.primary"
          size="xl"
        />
      ) : (
        <>
          <VStack pos="absolute" align="start">
            <Box>
              <Cards  key={pokemon} results={pokemon} />
              <Box display={displayPage}>
                <Button
                  h="2rem"
                  mt="1rem"
                  ml="1rem"
                  variant="outline"
                  colorScheme="teal"
                  leftIcon={<ArrowBackIcon />}
                  onClick={() => setPaginate(paginate - 10)}
                  disabled={paginate <= 0 ? true : false}
                >
                  Prev
                </Button>
                <Button
                  h="2rem"
                  mt="1rem"
                  ml="1rem"
                  variant="outline"
                  colorScheme="teal"
                  rightIcon={<ArrowForwardIcon />}
                  onClick={() => setPaginate(paginate + 10)}
                >
                  Next
                </Button>
              </Box>
            </Box>
          </VStack>
          <VStack align="end">
            <CardInfo/>
          </VStack>
        </>
      )}
    </Container>
  );
};
