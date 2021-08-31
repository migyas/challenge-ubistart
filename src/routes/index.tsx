import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import SearchCocktail from '../pages/SearchCocktail';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={SearchCocktail} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default Routes;
