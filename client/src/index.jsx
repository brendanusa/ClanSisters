import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

/*Eventually these will need to be dynamic routes. I think that we


*/

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
  <Router>
    <App />
  </Router>
), document.getElementById('root'));
