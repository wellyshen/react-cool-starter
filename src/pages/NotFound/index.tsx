import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

import styles from './styles.scss';

type Props = {
  staticContext?: { status: string };
};

export default memo(({ staticContext }: Props) => {
  // We have to check if staticContext exists
  // because it will be undefined if rendered through a BrowserRoute
  /* istanbul ignore next */
  if (staticContext) staticContext.status = '404';

  return (
    <div className={styles.NotFound}>
      <Helmet title="Oops" />
      <p>Oops, Page was not found!</p>
    </div>
  );
});
