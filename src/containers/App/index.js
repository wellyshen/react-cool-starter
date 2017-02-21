/* @flow */

import React, { Element } from 'react';
import Helmet from 'react-helmet';
import config from '../../config';

import '../../theme/normalize.css';
import styles from './styles.scss';

type Props = { children: Element<any> };

const App = ({ children }: Props) => (
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

App.defaultProps = { children: null };

export default App;
