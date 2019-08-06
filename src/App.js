import React from "react";

//import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./Pages/News";
import Shop from "./Pages/Shop";
import Backend from "./Pages/Backend";
import Navbar from "./components/Navbar";

import GlobalStyles from "./GlobalStyles";
import CreateContent from "./components/CreateContent";
import Header from "./components/Header";
//import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />

        <Switch>
          <Route
            path="/shop"
            render={props => <Shop {...props} />}
            component={Shop}
          />
          <Route
            path="/backend"
            render={props => <CreateContent {...props} component={Backend} />}
          />
          <Route
            path="/"
            render={props => <News {...props} />}
            component={News}
          />
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
