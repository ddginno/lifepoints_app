import React from "react";

//import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./Pages/News";

import GlobalStyles from "./GlobalStyles";
import CreateContent from "./components/CreateContent";
import { getNews, postCard } from "./services";

function App() {
  const [newsCards, setNewsCards] = React.useState([]);

  React.useEffect(() => {
    getNews().then(result => {
      const cards = result;
      console.log(cards);
      setNewsCards(cards);
    });
  }, []);

  // async function loadCards() {
  //   setNewsCards(await getNews());
  // }

  // React.useEffect(() => setToLocal("cards", newsCards), [newsCards]);

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
          <Route
            path="/"
            render={props => <News cards={newsCards} {...props} />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
