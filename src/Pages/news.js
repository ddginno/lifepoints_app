import React from "react";
import { Link } from "react-router-dom";
import NewsContentCard from "../components/NewsContentCard";
import Container from "../components/Container";
import styled from "styled-components";
import UserProfile from "../components/UserProfile";
import Header from "../components/Header";

const StyledLink = styled(Link)`
  text-decoration: none;
`;
function News({ news }) {
  function renderCard(news) {
    return (
      <StyledLink to={`/news/${news._id}`}>
        <NewsContentCard
          /*key={news._id}*/
          imageContent={news.imageContent}
          titleContent={news.titleContent}
          subtitleContent={news.subtitleContent}
        />
      </StyledLink>
    );
  }
  return (
    <Container>
      <UserProfile />
      <Header />
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
