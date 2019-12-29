import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'components/pages/Home';
import Registration from 'components/pages/Registration';
import Login from 'components/pages/Login';
import Personal from 'components/pages/Personal';
import Admin from 'components/pages/Admin';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/registration" component={Registration} />
    <Route path="/personal" component={Personal} />
    <Route path="/admin" component={Admin} />
  </Switch>
);

export default Router;
