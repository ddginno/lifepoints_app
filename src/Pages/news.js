import React from "react";
import NewsContentCard from "../components/NewsContentCard";
import Container from "../components/Container";
//import cards from "./__Mock__/cards";
//import GlobalStyles from "../GlobalStyles";
import { getNews } from "../services";
import UserProfile from "../components/UserProfile";

function News({ cards }) {
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    getNews().then(result => {
      const cards = result;
      console.log(cards);
      setNews(cards);
    });
  }, []);

  function renderCard(card) {
    return (
      <NewsContentCard
        key={card._id}
        imageContent={card.imageContent}
        titleContent={card.titleContent}
        subtitleContent={card.subtitleContent}
      />
    );
  }
  return (
    <Container>
      <UserProfile />
      {news.map(news => renderCard(news))}
    </Container>
  );
}

export default News;
