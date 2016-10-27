import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import config from '../../config';

import '../../theme/normalize.css';
import './styles.scss';

const App = ({ children }) => (
  <div className="App">
    <Helmet {...config.app} />
    <div className="header">
      <img src={require('./assets/logo.svg')} alt="Logo" role="presentation" />
      <h1>{config.app.title}</h1>
    </div>
    <hr />
    {children}
  </div>
);

App.propTypes = { children: PropTypes.node };

export default App;
