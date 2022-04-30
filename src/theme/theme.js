import { extendTheme, theme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints } from '@chakra-ui/theme-tools'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/poppins/400.css'
export default extendTheme({
  // config:{
  //   initialColorMode:"dark"
  // },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  colors: {
    brand: {
      primary:"#FD1F55",
      secondary: "#FF5350",
      tertiary: "#797876",
      light:"#ffffff",
      black:"#000000",
      background:"#f6f8fc",
      transparent:"#f2f2f2",
      //Pokemon types
      grass:"#00d64d",
      poison:"#b37be7",
      fire:"#ff5667",
      water:"#93b7ff",
      flying:"#9ec3d5",
      bug:"#00ac5a",
      normal:"#dfa7b7",
      electric:"#e9e500",
      ground:"#a84b1c",
      fairy:"#49d7e2",
      rock:"#875a1c",
      psychic:"#ff0fa8",
      steel:"#11c6a2",
      ice:"#89daf7",
      ghost:"#ad78a5",
      fighting:"#ff7131",
      dragon:"#fe007a",
      dark:"#87899e",

    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "light",
      },
      size: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      variants: {
        santander: {
          bg: "red",
          color: "grey",
        },
      },
    },
  },
});
