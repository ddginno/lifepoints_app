import React from "react";

//import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./Pages/News";
import Shop from "./Pages/Shop";

import GlobalStyles from "./GlobalStyles";
import CreateContent from "./components/CreateContent";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route path="/shop" render={props => <Shop {...props} />} />
          <Route
            path="/backend"
            render={props => <CreateContent {...props} />}
          />
          <Route path="/" render={props => <News {...props} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
