/* @flow */

import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import config from '../../config';

import '../../theme/normalize.css';
import styles from './styles.scss';

const App = ({ children }) => (
  <div className={styles.App}>
    <Helmet {...config.app} />
    <div className={styles.header}>
      <img src={require('./assets/logo.svg')} alt="Logo" role="presentation" />
      <h1>{config.app.title}</h1>
    </div>
    <hr />
    {children}
  </div>
);

App.propTypes = { children: PropTypes.node };
App.defaultProps = { children: null };

export default App;
