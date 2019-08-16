import React from "react";
import ShopContentCard from "../components/ShopContentCard";
import Container from "../components/Container";
import UserProfile from "../components/UserProfile";
import { getShop } from "../services";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr 60px;
`;

function Shop() {
  const [shop, setShop] = React.useState([]);

  React.useEffect(() => {
    getShop().then(result => {
      const cards = result;
      setShop(cards);
    });
  }, []);

  function renderCard(card) {
    return (
      <ShopContentCard
        key={card._id}
        shopImg={card.shopImg}
        shopTitle={card.shopTitle}
        shopPoints={card.shopPoints}
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
