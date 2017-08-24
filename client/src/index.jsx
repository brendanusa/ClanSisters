import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'redux';
import configureStore from './configureStore.js';
import Home from './home/homePage.jsx';
import Login from './login/index.jsx';
import User from './users/userPage.jsx';
import Clan from './clans/clanPage.jsx';
import Forum from './forum/forumPage.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles.css';

const store = configureStore();

const App = () => (
  <div>
      <Switch>
        <Route exact path = '/' >
          <Home />
        </Route>
        <Route exact path = '/login' >
          <Login />
        </Route>
        <Route exact path = '/user:userID' >
          <User />
        </Route>
        <Route exact path = '/clan:clanID' >
        <Clan />
        </Route>
        <Route exact path ='/forum' >
        <Forum />
        </Route>
      </Switch>
  </div>
)

/** Render App using React Router. */
ReactDOM.render((
  <Provider store={store}>
    <MuiThemeProvider>    
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
), document.getElementById('root'));
