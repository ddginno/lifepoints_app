import React from "react";
import { Link } from "react-router-dom";
import NewsContentCard from "../components/NewsContentCard";

import styled from "styled-components";
import UserProfile from "../components/UserProfile";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Grid = styled.div`
  display: grid;

  grid-template-rows: 80px 1fr 60px;
`;

const Content = styled.div`
  overflow: auto;
  height: 100%;
`;
function News({ news }) {
  function renderCard(newsItem) {
    return (
      <StyledLink to={`/news/${newsItem._id}`}>
        <NewsContentCard
          key={newsItem._id}
          imageContent={newsItem.imageContent}
          titleContent={newsItem.titleContent}
          subtitleContent={newsItem.subtitleContent}
        />
      </StyledLink>
    );
  }
  return (
    <Grid>
      <div>
        <Header />
      </div>

      <Content>
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
      </Content>

      <Navbar
        links={[
          { to: "/", icon: "fa-newspaper", title: "News" },
          { to: "/qrcode", icon: "fa-qrcode", title: "Qrcode" },
          { to: "/ranking", icon: "fa-trophy", title: "Ranking" },
          { to: "/shop", icon: "fa-shopping-cart", title: "Shop" },
          { to: "/backend", icon: "fa-users-cog", title: "Backend" }
        ]}
      />
    </Grid>
  );
}

export default News;
