import React from "react";
import { List } from "./List";
import { Container} from "@chakra-ui/react";

export const Cards = ({ results }) => {
  return (
    (results !== null) &&
    (
    <Container>
      {results.map((x) => (
        <List key={x.id} url={x.url} />
      ))}
    </Container>
    )
  );
};
