import React from "react";
import NewsContentCard from "../components/NewsContentCard";
import Container from "../components/Container";
//import cards from "./__Mock__/cards";
//import GlobalStyles from "../GlobalStyles";
import { getNews } from "../services";
import UserProfile from "../components/UserProfile";

function News({ cards }) {
  const [news, setNews] = React.useState([]);
  const [showNews, setShowNews] = React.useState([]);

  React.useEffect(() => {
    getNews().then(result => {
      const cards = result;
      console.log(cards);
      setNews(cards);
      setShowNews(cards);
    });
  }, []);

  function renderCard(news) {
    return (
      <NewsContentCard
        onClick={() => console.log("text")}
        key={news._id}
        imageContent={news.imageContent}
        titleContent={news.titleContent}
        subtitleContent={news.subtitleContent}
      />
    );
  }
  return (
    <Container>
      <UserProfile />
      {news
        .slice()
        .sort(function(a, b) {
          if (a.dateCreated < b.dateCreated) {
            return 1;
          } else {
            return -1;
          }
        })
        .map(news => renderCard(news))}
    </Container>
  );
}

export default News;
