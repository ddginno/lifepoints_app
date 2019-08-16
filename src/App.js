import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "./Pages/News";
import Shop from "./Pages/Shop";
import GlobalStyles from "./GlobalStyles";
import CreateContent from "./components/CreateContent";
import { getNews } from "./services";
import NewsDetails from "./components/NewsDetails";
import Ranking from "./Pages/Ranking";
import QrCode from "./Pages/QrCode";

function App() {
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    loadNews();
  }, []);

  function loadNews() {
    getNews().then(result => {
      setNews(result);
    });
  }

  return (
    <>
      <Router>
        <GlobalStyles />

        <Switch>
          <Route path="/qrcode" render={props => <QrCode {...props} />} />
          <Route path="/ranking" render={props => <Ranking {...props} />} />
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
      </Router>
    </>
  );
}

export default App;
