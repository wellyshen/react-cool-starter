import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import config from '../../config';

import '../../theme/normalize.css';
import styles from './App.scss';

const App = ({ children }) => (
  <div className={styles.App}>
    <Helmet {...config.app} />
    <div className={styles.header}>
      <img src={require('../../assets/react_logo.svg')} alt="Logo" role="presentation" />
      <h1>{config.app.title}</h1>
    </div>
    <hr />
    {children}
  </div>
);

App.propTypes = { children: PropTypes.object };

export default App;
