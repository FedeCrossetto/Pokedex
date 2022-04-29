import React from 'react';
import {
  Container,
  Flex,
  HStack,
  VStack,
  Link,
  useColorMode,
  Image,
  Button

} from "@chakra-ui/react";
import { Icon } from '@iconify/react';
import { MoonIcon } from "@chakra-ui/icons";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import dark from "../../assets/dark.png"
import ligth from "../../assets/ligth.png"



export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  // const [display, changeDisplay] = useState("none");

  const Links = [
    { name: "Home", href: "home", icon: "akar-icons:home" },
    { name: "Pokedex", href: "pokedex", icon: "icon-park-outline:game-console-one" },
    { name: "Games", href: "games", icon: "iconoir:pokeball" },
    { name: "News", href: "news", icon: "akar-icons:map" }


  ];

  return (
    <Container minWidth={["570px", "767px", "992px", "1200px"]} px="0" >
      <Flex
        minWidth={["570px", "767px", "992px", "1200px"]}
        h="6rem"
        bg={isDark ? "brand.dark" : "brand.white"}
        borderRadius="xl"
        boxShadow="xl"
        alignItems="center"
         justifyContent="space-between"
        pos="fixed"
        my="1rem"
        pl="2rem"
      // bottom={isNotSmallerScreen ? "" : "0"}
      >
        <Flex alignItems="flex-center">
          <HStack as="nav">
            <Flex display={["none", "none", "flex", "flex"]}>
              {Links.map((link) => (
                <LinkScroll
                  to={link.href}
                  spy={true}
                  smooth={true}
                  // offset={50} Es para llevar mas abajo del componente.
                  duration={1500}
                >
                  <Link
                    px="6rem"
                    _hover={{
                      color: "brand.secondary",
                      textDecoration: "underline",
                      textDecorationThickness: "5px",
                      textDecorationColor: "brand.secondary",
                    }}
                    key={link.name}
                  >
                    <Flex px="2rem" align="center" gap={2} color={isDark? "white": "gray"}>

                    <Icon icon={link.icon} width="32" height="32" color={isDark? "white": "gray"}/>
                    
                    {link.name}
                    </Flex>

                  </Link>
                </LinkScroll>
              ))}
            </Flex>
          </HStack>
        </Flex>
        <Flex>

          <Link p={4}>
            {isDark
              ? <Icon onClick={toggleColorMode} icon="bxs:moon" width="32" height="32" _hover={{ cursor: "pointer" }} />
              : <Icon onClick={toggleColorMode} icon="clarity:sun-solid" width="32" height="32" _hover={{ cursor: "pointer" }} color="orange"/>}
          </Link>
        </Flex>
      </Flex>
    </Container>
  )
}
