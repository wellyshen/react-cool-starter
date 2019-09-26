import React from 'react';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';

import config from '../config';
// Import your global styles here
import 'normalize.css/normalize.css'; // eslint-disable-line import/first
import styles from './styles.scss';

interface Route {
  route: { routes: Array<object> };
}

const App = ({ route }: Route) => (
  <div className={styles.App}>
    <Helmet {...config.app} />
    <div className={styles.header}>
      <img src={require('./assets/logo.svg')} alt="Logo" role="presentation" />
      <h1>{config.app.title}</h1>
    </div>
    <hr />
    {/* Child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);

export default hot(module)(App);
