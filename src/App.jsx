import { Navbar } from "./components/layout/Navbar";
import { Home } from "./main/home/Home";
import { Pokedex } from "./main/pokedex/Pokedex";
import { Games } from "./main/games/Games";
import { News } from "./main/news/News";
import { ErrorPage } from "./main/errorpage/ErrorPage";

import { ChakraProvider,Box} from "@chakra-ui/react";
import theme from "./theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme} >
      <Box bg="brand.background" width="100vw" height="100vh"> 
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
  );
}

export default App;
