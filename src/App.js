import React from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import PropTypes from "prop-types";

function App() {
  return (
    <Container className="App">
      <Card
        titleContent="LIMITED EDITION"
        subtitleContent="NIKES NEUER SUPER SCHUH DER SUPERLATIVE"
      />
    </Container>
  );
}

export default App;
