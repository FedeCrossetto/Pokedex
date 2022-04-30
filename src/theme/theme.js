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
      dark:"#1a202c",
      light:"#ffffff",
      background:"#f6f8fc",
      transparent:"#f2f2f2"
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
