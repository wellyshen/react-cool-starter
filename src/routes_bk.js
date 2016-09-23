import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import UserInfo from './containers/UserInfo';
import NotFound from './containers/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="UserInfo/:id" component={UserInfo} />
    <Route path="*" component={NotFound} />
  </Route>
);
