import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./Pages/News";
import Shop from "./Pages/Shop";

import Navbar from "./components/Navbar";

import GlobalStyles from "./GlobalStyles";
import CreateContent from "./components/CreateContent";

import { getNews } from "./services";

import NewsDetails from "./components/NewsDetails";

function App() {
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    loadNews();
  }, []);

  function loadNews() {
    getNews().then(result => {
      console.log(result);
      setNews(result);
    });
  }

  return (
    <>
      <Router>
        <GlobalStyles />

        <Switch>
          <Route
            path="/shop"
            render={props => <Shop {...props} />}
            component={Shop}
          />
          <Route
            path="/backend"
            render={props => <CreateContent {...props} />}
          />
          <Route
            path="/news/:id"
            render={props => <NewsDetails {...props} />}
          />
          <Route path="/" render={props => <News news={news} {...props} />} />
        </Switch>
        <Navbar
          links={[
            { to: "/", icon: "fa-newspaper", title: "News" },
            { to: "/qrcode", icon: "fa-qrcode", title: "Qrcode" },
            { to: "/ranking", icon: "fa-trophy", title: "Ranking" },
            { to: "/shop", icon: "fa-shopping-cart", title: "Shop" },
            { to: "/backend", icon: "fa-users-cog", title: "Backend" }
          ]}
        />
      </Router>
    </>
  );
}

export default App;
