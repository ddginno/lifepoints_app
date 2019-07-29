import React from "react";

//import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./Pages/News";
//import Backend from "./Pages/Backend";
import GlobalStyles from "./GlobalStyles";
import CreateContent from "./components/CreateContent";
import { getFromLocal, setToLocal, getCards, postCard } from "./services";

function App() {
  const [newsCards, setNewsCards] = React.useState(getFromLocal("cards") || []);

  React.useEffect(() => {
    loadCards();
  }, []);

  async function loadCards() {
    setNewsCards(await getCards());
  }

  React.useEffect(() => setToLocal("cards", newsCards), [newsCards]);

  function handleCreate(card) {
    postCard(card).then(result => setNewsCards([result, ...newsCards]));
  }

  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route
            path="/backend"
            render={props => (
              <CreateContent onCreate={handleCreate} {...props} />
            )}
          />
          <Route path="/" render={props => <News {...props} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
