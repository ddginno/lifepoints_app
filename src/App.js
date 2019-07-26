import React from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import PropTypes from "prop-types";
//import { BrowserRouter } from "react-router-dom";

import cards from "./Pages/__Mock__/cards";

function App() {
  function renderCard(card) {
    return (
      //<Router>
      //<Switch>
      <>
        <Card
          key={card._id}
          imageContent={card.imageContent}
          titleContent={card.titleContent}
          subtitleContent={card.subtitleContent}
        />
      </>
      //</Switch>
      //</Router>
    );
  }
  return <Container>{cards.map(card => renderCard(card))}</Container>;
}

export default App;
