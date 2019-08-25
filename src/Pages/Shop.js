import React from "react";
import ShopContentCard from "../components/ShopContentCard";
import UserProfile from "../components/UserProfile";
import { getShop, getUser, patchUser } from "../services";
//import Header from "../components/Header";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 80px auto 70px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 105%;
  overflow: auto;
`;

function Shop({ activeUser, ...Props }) {
  const [shop, setShop] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    getShop().then(result => {
      const cards = result;
      setShop(cards);
    });
  }, []);
  /* eslint-disable*/
  React.useEffect(() => {
    function loadPoints() {
      getUser().then(result => {
        const user = result.find(user => user._id === activeUser._id);
        setCurrentUser(user);
      });
    }
    loadPoints();
  }, []);
  /* eslint-disable*/

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
          <UserProfile activeUser={activeUser} />
        </div>
        <Content>
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
        </Content>
        <Navbar
          links={[
            { to: "/news", icon: "fa-newspaper", title: "News" },
            { to: "/qrcode", icon: "fa-qrcode", title: "Qrcode" },
            { to: "/ranking", icon: "fa-trophy", title: "Ranking" },
            { to: "/shop", icon: "fa-shopping-cart", title: "Shop" }
          ]}
        />
      </Grid>
    </>
  );
}

export default Shop;
