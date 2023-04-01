import React, { useState } from "react";
import Container from "./Container";
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import Card from "./Card";

const Home = () => {
  const [heroes, setHeroes] = useState([]);
  let cards;
  if (heroes) {
    cards = heroes.map((hero) => (
      <Card
        name={hero.name}
        id={hero.id}
        key={hero.key}
        thumbnail={`${hero.thumbnail.path}/portrait_fantastic.${hero.thumbnail.extension}`}
      />
    ));
  }
  return (
    <Container>
      <h1>Discover Marvel Heros</h1>
      <SearchBar setter={setHeroes} />
      <Grid>{cards ? cards : "empty"}</Grid>
    </Container>
  );
};

export default Home;
