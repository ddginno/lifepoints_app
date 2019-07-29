import React from "react";

import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./Pages/News";
import Backend from "./Pages/Backend";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route path="/backend" render={props => <Backend {...props} />} />
          <Route path="/" render={props => <News {...props} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
