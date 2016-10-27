import React from 'react';
import Helmet from 'react-helmet';

import './styles.scss';

export default () => (
  <div className="NotFound">
    <Helmet title="Oops" />
    <p>Oops, Page was not found!</p>
  </div>
);
