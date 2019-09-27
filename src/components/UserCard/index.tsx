import React, { memo } from 'react';

import styles from './styles.scss';

type Props = {
  info: {
    name: string;
    phone: string;
    email: string;
    website: string;
  };
};

export default memo(({ info }: Props) => (
  <div className={styles.UserCard}>
    <h4>User Card</h4>
    <ul>
      <li>Name: {info.name}</li>
      <li>Phone: {info.phone}</li>
      <li>Email: {info.email}</li>
      <li>Website: {info.website}</li>
    </ul>
  </div>
));
