//Components
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./main/home/Home";
import { Pokedex } from "./main/pokedex/Pokedex";
import { Games } from "./main/games/Games";
import { News } from "./main/news/News";
import { ErrorPage } from "./main/errorpage/ErrorPage";
//Libraries
import { ChakraProvider,Box} from "@chakra-ui/react";
import theme from "./theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Context
import PokeState from "./context/Pokedex/PokeState";

function App() {
  return (
    <PokeState> 
    <ChakraProvider theme={theme}>
      <Box 
       bg="brand.background"
       width="100%" 
       h="auto"
       > 
      <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/games" element={<Games />} />
            <Route path="/news" element={<News />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
    </PokeState> 
  );
}

export default App;
