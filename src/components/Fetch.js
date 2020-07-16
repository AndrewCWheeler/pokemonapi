import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Fetch = () => {
  const [pokemon, setPokemon] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((response) => setPokemon(response.results));
  }, [display.isInitiated]);

  const onClick = () => {
    setDisplay(true);
  };
  console.log(display);

  console.log(pokemon);
  return (
    <Container>
      <Row>
        <Col>
          <Button className="my-3 btn-primary btn-lg" onClick={onClick}>
            Fetch Pokemon
          </Button>
          <div>
            {pokemon.length > 0 && display
              ? pokemon.map((pokemon, index) => {
                  return <p key={index}>{pokemon.name}</p>;
                })
              : null}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Fetch;
