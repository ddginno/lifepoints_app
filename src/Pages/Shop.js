import React from "react";
import ShopContentCard from "../components/ShopContentCard";
import Container from "../components/Container";
import UserProfile from "../components/UserProfile";
import { getShop, getUser, patchUser, getShopNewsById } from "../services";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr 60px;
`;

function Shop() {
  const [shop, setShop] = React.useState([]);
  const [showShopNews, setShowShopNews] = React.useState([]);
  const [Points, setPoints] = React.useState([]);
  React.useEffect(() => {
    getShop().then(result => {
      const cards = result;
      setShop(cards);
    });
  }, []);

  const CurrentUserId = "5d49555ad20398c00e35941e";

  React.useEffect(() => {
    loadPoints();
  }, []);
  function loadPoints() {
    getUser().then(result => {
      const index = result.findIndex(user => user._id === CurrentUserId);
      const user = result[index];
      setPoints(user.userPoints);
    });
  }

  React.useEffect(() => {
    loadNews();
  }, []);

  function loadNews() {
    getShopNewsById().then(result => {
      setShowShopNews(result);
      console.log(result);
    });
  }

  function handleClick(event) {
    event.preventDefault();
    patchUser({
      userPoints: Points - showShopNews.shopPoints,
      id: CurrentUserId
    });
  }

  function renderCard(card) {
    console.log(card._id);
    return (
      <ShopContentCard
        key={card._id}
        shopImg={card.shopImg}
        shopTitle={card.shopTitle}
        shopPoints={card.shopPoints}
        handleClick={handleClick}
      />
    );
  }
  return (
    <>
      <Grid>
        <div>
          <Header />
        </div>
        <Container>
          <UserProfile />
          {shop
            .slice()
            .sort(function(a, b) {
              if (a.dateCreated < b.dateCreated) {
                return 1;
              } else {
                return -1;
              }
            })
            .map(shop => renderCard(shop))}
        </Container>
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
    </>
  );
}

export default Shop;
