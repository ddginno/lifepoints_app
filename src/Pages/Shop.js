import React from "react";
import ShopContentCard from "../components/ShopContentCard";
import Container from "../components/Container";
import UserProfile from "../components/UserProfile";
import { getShop } from "../services";

function Shop() {
  const [shop, setShop] = React.useState([]);

  React.useEffect(() => {
    getShop().then(result => {
      const cards = result;
      console.log(cards);
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
  );
}

export default Shop;
