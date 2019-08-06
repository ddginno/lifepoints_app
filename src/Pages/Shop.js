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
      {shop.map(shop => renderCard(shop))}
    </Container>
  );
}

export default Shop;
