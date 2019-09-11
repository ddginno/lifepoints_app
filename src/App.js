import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import News from "./Pages/News";
import Shop from "./Pages/Shop";
import GlobalStyles from "./GlobalStyles";
import CreateContent from "./components/CreateContent";
import { getNews, getUser, getFromLocal, setToLocal } from "./services";
import NewsDetails from "./components/NewsDetails";
import Ranking from "./Pages/Ranking";
import QrCode from "./Pages/QrCode";
import Login from "./Pages/Login";
import Register from "./components/Register";
import Profile from "./Pages/Profile";

function App() {
  const [news, setNews] = React.useState([]);
  const [profiles, setProfiles] = React.useState([]);
  const [activeUser, setActiveUser] = React.useState(
    getFromLocal("ActiveUser") || {}
  );

  React.useEffect(() => {
    getUser().then(result => setProfiles(result));
  }, []);

  React.useEffect(() => {
    loadNews();
  }, []);

  function loadNews() {
    getNews().then(result => {
      setNews(result);
    });
  }
  React.useEffect(() => {
    setToLocal("ActiveUser", activeUser);
  }, [activeUser]);

  function handleLogin(userName) {
    const index = profiles.findIndex(user => user.userName === userName);
    const user = profiles[index];
    setActiveUser(user);
  }

  function handleRegister(user) {
    setProfiles([...profiles, user]);
    setActiveUser(user);
  }

  /*function handleLogoutClick() {
    setActiveUser({});
  }*/

  return (
    <>
      <Router>
        <GlobalStyles />

        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Login onLogin={handleLogin} activeUser={activeUser} {...props} />
            )}
          />
          <Route
            exact
            path="/login"
            render={props => (
              <Login onLogin={handleLogin} activeUser={activeUser} {...props} />
            )}
          />
          <Route
            exact
            path="/qrcode"
            render={props =>
              activeUser.userName ? (
                <QrCode activeUser={activeUser} {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/profile"
            render={props =>
              activeUser.userName ? <Profile {...props} /> : <Redirect to="/" />
            }
          />
          <Route
            exact
            path="/ranking"
            render={props =>
              activeUser.userName ? <Ranking {...props} /> : <Redirect to="/" />
            }
          />
          <Route
            exact
            path="/shop"
            render={props =>
              activeUser.userName ? (
                <Shop activeUser={activeUser} {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/backend"
            render={props =>
              activeUser.userName ? (
                <CreateContent {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/register"
            render={props => (
              <Register {...props} onCreateProfile={handleRegister} />
            )}
          />
          <Route
            exact
            path="/news/:id"
            render={props => <NewsDetails activeUser={activeUser} {...props} />}
          />
          <Route
            exact
            path="/news"
            render={props =>
              activeUser.userName ? (
                <News news={news} activeUser={activeUser} {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
