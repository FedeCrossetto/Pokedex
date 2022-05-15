import React from "react";
import { Container,SimpleGrid} from "@chakra-ui/react";
import {GamesInfo} from "../../components/layout/GamesInfo";

export const Games = () => {
  const ListGames = [
    { id:1,name: "Pokémon Rojo y Azul", category: "", date: 1996, image: "https://www.pkparaiso.com/rojo_azul/rojo_azul.jpg",url:"https:google.com.ar" },
    { id:2,name: "Pokémon Amarillo", category: "", date: 1999, image: "https://www.pkparaiso.com/amarillo/amarillo.jpg",url:"https:google.com.ar" },
    { id:3,name: "Pokémon Trading Card Game", category: "", date: 1998, image: "https://www.pkparaiso.com/trading-card-game/trading-card-game.jpg",url:"https:google.com.ar" },
    { id:4,name: "Pokémon Pinball", category: "", date: 1999, image: "https://www.pkparaiso.com/pinball/pinball.jpg",url:"https:google.com.ar" },
    { id:5,name: "Pokémon Stadium", category: "", date: 1999, image: "https://www.pkparaiso.com/stadium/stadium.jpg",url:"https:google.com.ar" },
    { id:6,name: "Pokémon Oro y Plata", category: "", date: 1999, image: "https://www.pkparaiso.com/oro_plata/oro_plata.jpg",url:"https:google.com.ar" },
    { id:7,name: "Pokémon Puzzle Challenge", category: "", date: 2000, image: "https://www.pkparaiso.com/puzzle-challenge/puzzle-challenge.jpg",url:"https:google.com.ar" },
    { id:8,name: "Pokémon Cristal", category: "", date: 2000, image: "https://www.pkparaiso.com/cristal/cristal.jpg",url:"https:google.com.ar" },
    { id:9,name: "Pokémon Stadium 2", category: "", date: 2000, image: "https://www.pkparaiso.com/stadium2/stadium2.jpg",url:"https:google.com.ar" },
    { id:10,name: "Pokémon Rubí y Zafiro", category: "", date: 2002, image: "https://www.pkparaiso.com/rubi_zafiro/rubi_zafiro.jpg",url:"https:google.com.ar" },
    { id:11,name: "Pokémon Colosseum", category: "", date: 2003, image: "https://www.pkparaiso.com/colosseum/colosseum.jpg",url:"https:google.com.ar" },
    { id:12,name: "Pokémon Rojo Fuego y Verde Hoja", category: "", date: 2004, image: "https://www.pkparaiso.com/rfuego_vhoja/rfuego_vhoja.jpg",url:"https:google.com.ar" },
    { id:13,name: "Pokémon Esmeralda", category: "", date: 2004, image: "https://www.pkparaiso.com/esmeralda/esmeralda.jpg",url:"https:google.com.ar" },
    { id:14,name: "Pokémon XD: Gale of Darkness", category: "", date: 2005, image: "https://www.pkparaiso.com/xd/xd.jpg",url:"https:google.com.ar" },
    { id:16,name: "Pokémon Ranger", category: "", date: 2006, image: "https://www.pkparaiso.com/ranger/ranger.jpg",url:"https:google.com.ar" },
    { id:17,name: "Pokémon Diamante y Perla", category: "", date: 2006, image: "https://www.pkparaiso.com/diamante_perla/diamante_perla.jpg",url:"https:google.com.ar" },
    { id:18,name: "Pokémon Battle Revolution", category: "", date: 2006, image: "https://www.pkparaiso.com/battlerevolution/battlerevolution.jpg",url:"https:google.com.ar" },
    { id:19,name: "Pokémon Mundo Misterioso 1", category: "", date: 2006, image: "https://www.pkparaiso.com/mundomisterioso/mundomisterioso.jpg",url:"https:google.com.ar" },
    { id:20,name: "Pokémon Mundo Misterioso 2", category: "", date: 2006, image: "https://www.pkparaiso.com/mundomisterioso2/mundomisterioso2.jpg",url:"https:google.com.ar" },
    { id:21,name: "Pokémon Mundo Misterioso 3", category: "", date: 2009, image: "https://www.pkparaiso.com/mundomisterioso2-cielo/mundomisterioso2-cielo.jpg",url:"https:google.com.ar" },
    { id:22,name: "Pokémon Platino", category: "", date: 2008, image: "https://www.pkparaiso.com/platino/platino.jpg",url:"https:google.com.ar" },
    { id:23,name: "Pokémon Oro y Plata", category: "", date: 2009, image: "https://www.pkparaiso.com/hgss/hgss.jpg",url:"https:google.com.ar" },
    { id:24,name: "Pokémon Ranger: Trazos de Luz", category: "", date: 2010, image: "https://www.pkparaiso.com/ranger3/ranger3.jpg",url:"https:google.com.ar" },
    { id:25,name: "Pokémon Blanco y Negro", category: "", date: 2010, image: "https://www.pkparaiso.com/blanco_negro/blanco_negro.jpg",url:"https:google.com.ar" },
    { id:26,name: "Súper Pokémon Rumble", category: "", date: 2011, image: "https://www.pkparaiso.com/rumble2/rumble2.jpg",url:"https:google.com.ar" },
    { id:27,name: "Pokémon X | Y", category: "", date: 2013, image: "https://worldcia3ds.com/wp-content/uploads/2021/03/Pok253Fmon_X_Car253Ftula.png",url:"https:google.com.ar" },
    { id:28,name: "Pokémon Rubí Omega & Zafiro Alfa", category: "", date: 2014, image: "https://www.impactgame.es/WebRoot/StoreES/Shops/63945077/539E/C16C/1E7F/96C7/8C99/C0A8/2BB8/885A/Pokemon_Zafiro_Alfa_portada_ml.jpeg",url:"https:google.com.ar" },
    { id:29,name: "Pokémon Sol y Luna", category: "", date: 2016, image: "https://m.media-amazon.com/images/I/81aikTVCUgL._AC_SL1500_.jpg",url:"https:google.com.ar" },
    { id:30,name: "Pokémon Cristal", category: "", date: 2018, image: "https://m.media-amazon.com/images/I/61VSZVD8X5L.jpg",url:"https:google.com.ar" },
    { id:31,name: "Pokémon Espada y Escudo", category: "", date: 2019, image: "https://media.vandal.net/100/61486/pokemon-espada-y-escudo-201972612334165_18b.jpg",url:"https:google.com.ar" },
    { id:32,name: "Pokémon Unite", category: "", date: 2021, image: "https://media.vandal.net/100/87040/pokemon-unite-20217161805024_25b.jpg",url:"https:google.com.ar" },
    { id:33,name: "Pokémon Diamante B. y Perla R.", category: "", date: 2021, image: "https://media.vandal.net/100/96930/pokemon-diamante-brillante-perla-reluciente-202152616395247_1b.jpg",url:"https:google.com.ar" },

  ];
  return (
    <Container minWidth={["570px", "767px", "992px", "1200px"]} px="0" pb="4rem">
      <SimpleGrid   columns={[2,2,3,4]} gap={8} >
      {ListGames.map((x) => (
        <GamesInfo key={x.id} data={x} />
        ))}
      
      </SimpleGrid>
    </Container>
  );
};
