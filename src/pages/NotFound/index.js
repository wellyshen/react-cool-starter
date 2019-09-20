import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import styles from './styles.scss';

const NotFound = ({ staticContext }) => {
  // We have to check if staticContext exists
  // because it will be undefined if rendered through a BrowserRoute
  /* istanbul ignore next */
  if (staticContext) staticContext.status = '404'; // eslint-disable-line no-param-reassign

  return (
    <div className={styles.NotFound}>
      <Helmet title="Oops" />
      <p>Oops, Page was not found!</p>
    </div>
  );
};

NotFound.propTypes = {
  staticContext: PropTypes.object
};

NotFound.defaultProps = {
  staticContext: null
};

export default NotFound;
