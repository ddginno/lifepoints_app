import React from "react";
import ShopContentCard from "../components/ShopContentCard";
import Container from "../components/Container";
import UserProfile from "../components/UserProfile";
import { getShop, getUser, patchUser } from "../services";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr 60px;
`;

function Shop({ activeUser, ...Props }) {
  const [shop, setShop] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState(null);
  console.log(activeUser);
  React.useEffect(() => {
    getShop().then(result => {
      const cards = result;
      setShop(cards);
    });
  }, []);

  React.useEffect(() => {
    function loadPoints() {
      getUser().then(result => {
        const user = result.find(user => user._id === activeUser._id);
        setCurrentUser(user);
      });
    }
    loadPoints();
  }, []);

  // React.useEffect(() => {
  //   loadNews();
  // }, []);

  // function loadNews() {
  //   getShopNewsById().then(result => {
  //     setShowShopNews(result);
  //     console.log(result);
  //   });
  // }

  function handleClick(id) {
    getShop().then(result => {
      const shopNews = result.find(news => news._id === id);

      patchUser(
        {
          userPoints: currentUser.userPoints - shopNews.shopPoints
        },
        activeUser._id
      );
    });
  }

  function renderCard(card) {
    return (
      <ShopContentCard
        key={card._id}
        shopImg={card.shopImg}
        shopTitle={card.shopTitle}
        shopPoints={card.shopPoints}
        handleClick={() => handleClick(card._id)}
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
            { to: "/news", icon: "fa-newspaper", title: "News" },
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
