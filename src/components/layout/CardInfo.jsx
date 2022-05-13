import React, {useContext } from "react";
import {
  Container,
  Image,
  HStack,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import PokeContext from "../../context/Pokedex/PokeContext";
import grass from "../../assets/grass.png";
import poison from "../../assets/poison.png";
import fire from "../../assets/fire.png";
import water from "../../assets/water.png";
import flying from "../../assets/flying.png";
import bug from "../../assets/bug.png";
import normal from "../../assets/normal.png";
import electric from "../../assets/electric.png";
import ground from "../../assets/ground.png";
import fairy from "../../assets/fairy.png";
import rock from "../../assets/rock.png";
import psychic from "../../assets/psychic.png";
import steel from "../../assets/steel.png";
import ice from "../../assets/ice.png";
import ghost from "../../assets/ghost.png";
import fighting from "../../assets/fighting.png";
import dragon from "../../assets/dragon.png";
import dark from "../../assets/dark.png";

export const CardInfo = () => {
  const { selectedPokemon } = useContext(PokeContext);
  const loadElement = (e) => {
    switch (e) {
      case "grass":
        return grass;
      case "poison":
        return poison;
      case "fire":
        return fire;
      case "water":
        return water;
      case "flying":
        return flying;
      case "bug":
        return bug;
      case "normal":
        return normal;
      case "electric":
        return electric;
      case "ground":
        return ground;
      case "fairy":
        return fairy;
      case "rock":
        return rock;
      case "psychic":
        return psychic;
      case "steel":
        return steel;
      case "ice":
        return ice;
      case "ghost":
        return ghost;
      case "fighting":
        return fighting;
      case "dragon":
        return dragon;
      case "dark":
        return dark;
      default:
        break;
    }
  };

  const loadStat = (e) => {
    switch (e) {
      case "hp":
        return "hp";
      case "attack":
        return "atk";
      case "defense":
        return "def";
      case "special-attack":
        return "satk";
      case "special-defense":
        return "sdef";
      case "speed":
        return "spd";
      default:
        break;
    }
  };

  const loadColorStat = (e) => {
    switch (e) {
      case "hp":
        return "brand.grass";
      case "attack":
        return "brand.fire";
      case "defense":
        return "brand.fairy";
      case "special-attack":
        return "brand.psychic";
      case "special-defense":
        return "brand.steel";
      case "speed":
        return "brand.electric";
      default:
        break;
    }
  };
  const sortOrder = (order) => {
    if (order < 10) {
      return `00${order}`;
    } else if (order < 100) {
      return `0${order}`;
    } else {
      return order;
    }
  };

  return (
     (selectedPokemon !== null) &&
    <Container pos="absolute" align="right">
      <Box
        bg="brand.light"
        w="32rem"
        h="47rem"
        borderRadius="xl"
        boxShadow="lg"
        align="center"
        mt="0.8rem"
      >
        <Image
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${sortOrder(
            selectedPokemon.id
          )}.png`}
          boxSize={["4rem", "6rem", "8rem", "16rem"]}
          ml="2rem"
          pt="-10rem"
        />
        <VStack>
          <Text
            align="center"
            fontSize="sm"
            fontWeight="600"
            color="brand.tertiary"
          >{`#${selectedPokemon.id}`}</Text>
          <Text
            align="center"
            fontSize="xl"
            fontWeight="600"
            textTransform="capitalize"
          >
            {selectedPokemon.name}
          </Text>
          <HStack>
            {selectedPokemon.types.map((x) => (
              <Image
                src={loadElement(x.type.name)}
                objectFit="cover"
                boxSize="2.5rem"
              />
            ))}
          </HStack>
          <Text
            align="center"
            fontSize="lg"
            fontWeight="600"
            color="brand.tertiary"
            opacity="0.6"
            letterSpacing="1px"
            textTransform="uppercase"
          >
            Abilities
          </Text>
          <HStack>
            {selectedPokemon.abilities.map((x) => (
              <Box
                bg="brand.transparent"
                p="0.5rem"
                w="auto"
                borderRadius="xl"
                textTransform="capitalize"
              >
                {x.ability.name}
              </Box>
            ))}
          </HStack>
          <HStack pt="2rem">
            <Text
              fontSize="lg"
              fontWeight="600"
              color="brand.tertiary"
              opacity="0.6"
              letterSpacing="1px"
              textTransform="uppercase"
              px="4rem"
            >
              Height
            </Text>
            <Text
              fontSize="lg"
              fontWeight="600"
              color="brand.tertiary"
              opacity="0.6"
              letterSpacing="1px"
              textTransform="uppercase"
              px="4rem"
            >
              Weight
            </Text>
          </HStack>
          <HStack>
            <Box
              bg="brand.transparent"
              p="0.5rem"
              w="12rem"
              borderRadius="xl"
              color="brand.black"
            >
              {selectedPokemon.height} m
            </Box>
            <Box
              bg="brand.transparent"
              p="0.5rem"
              w="12rem"
              borderRadius="xl"
              color="brand.black"
            >
              {selectedPokemon.weight} kg
            </Box>
          </HStack>
          <Text
            align="center"
            fontSize="lg"
            fontWeight="600"
            color="brand.tertiary"
            opacity="0.6"
            letterSpacing="1px"
            textTransform="uppercase"
            pt="2rem"
          >
            Stats
          </Text>
          <HStack>
            {selectedPokemon.stats.map((x) => (
              <Box
                w="auto"
                h="6rem"
                bg="brand.transparent"
                borderRadius="3xl"
                fontWeight="bold"
              >
                <Text
                  fontSize="xs"
                  color="brand.light"
                  opacity="0.8"
                  m="0.4rem"
                  bg={loadColorStat(x.stat.name)}
                  borderRadius="50%"
                  w="2.5rem"
                  h="2.5rem"
                  pt="0.5rem"
                  textTransform="uppercase"
                >
                  {loadStat(x.stat.name)}
                </Text>
                <Text pt="0.5rem">{x.base_stat}</Text>
              </Box>
            ))}
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};
