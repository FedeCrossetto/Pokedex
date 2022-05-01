import React, { useState } from 'react';
import {
  Container,
  Flex,
  IconButton,
  Grid,
  GridItem,
  Text

} from "@chakra-ui/react";
import { Icon } from '@iconify/react';
import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";


export const Navbar = () => {
  const [display, changeDisplay] = useState(false);

  const Links = [
    { name: "Home", href: "/", icon: "akar-icons:home" },
    { name: "Pokedex", href: "/pokedex", icon: "icon-park-outline:game-console-one" },
    { name: "Games", href: "", icon: "iconoir:pokeball" },
    { name: "News", href: "", icon: "akar-icons:map" }
  ];


  return (
    <Container minWidth={["570px", "767px", "992px", "1200px"]} px="0" >
      <Flex
        minWidth={["570px", "767px", "992px", "1200px"]}
        h="5rem"
        bg="brand.light"
        borderRadius="xl"
        boxShadow={!display && "xl"}
        alignItems="center"
        justifyContent="space-between"
        // pos="fixed"
        pos="absolute"
        my="1rem"
        px="2rem"
        color="brand.tertiary"
        fontWeight="bold"
      >
        {Links.map((link) =>
          <a href={link.href} key={link.nombre} >
            <Flex
              display={["none", "none", "flex", "flex"]}
              align="center"
              gap={2}
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "5px",
                textDecorationColor: "brand.primary",
              }}>
              <Icon icon={link.icon} width="32" height="32" color="brand.tertiary" />
              {link.name}
            </Flex>
          </a>
        )}
        {/* BURGER MENU */}
        <Flex
          display={["flex", "flex", "none", "none"]}
          width="100%"
          flexDirection="column"
        >
          <IconButton
            icon={!display ? <HamburgerIcon /> : <SmallCloseIcon />}
            aria-label="Open Menu"
            variant="ghost"
            pr="4rem"
            alignContent="center"
            justifyContent="left"
            fontSize="2xl"
            onClick={display ? () => changeDisplay(!display) : () => changeDisplay(!display)}
          ></IconButton>
        </Flex>
      </Flex>
      <Grid templateColumns='repeat(1, 1fr)' pt="6rem" >
        {display && Links.map((link) =>
          <a href={link.href} key={link.nombre} >
            <GridItem w='100%' h='14' bg='brand.light' icon={link.icon} pl="1.5rem"
              _hover={{             
                textDecoration: "underline",
                textDecorationThickness: "4px",
                textDecorationColor: "brand.primary",
                bg: "brand.transparent"
              }}>
              <Text align="center" pt="1rem">{link.name}</Text>
            </GridItem>
          </a>
        )}
      </Grid>

    </Container>
  )
}
