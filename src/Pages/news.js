import React from "react";
import Card from "../components/Card";
import Container from "../components/Container";
//import cards from "./__Mock__/cards";
//import GlobalStyles from "../GlobalStyles";

function News({ cards }) {
  function renderCard(card) {
    return (
      <Card
        key={card._id}
        imageContent={card.imageContent}
        titleContent={card.titleContent}
        subtitleContent={card.subtitleContent}
        desciption={card.desciption}
      />
    );
  }
  return <Container>{cards.map(card => renderCard(card))}</Container>;
}

export default News;
