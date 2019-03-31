import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Home from '../Home';
import _404 from '../404';

const AppRouter = () => (
  <Router>
    <Switch>
      <Redirect from="/" to="/home" exact />
      <Route path="/home" exact component={Home} />
      <Route component={_404} />
    </Switch>
  </Router>
);

export default AppRouter;
