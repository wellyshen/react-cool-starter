import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import styles from './UserCard.scss';

const UserCard = ({ info }) => (
  <div className={styles.UserCard}>
    <h4>User Card</h4>
    <ul>
      <li>Name: {info.get('name')}</li>
      <li>Phone: {info.get('phone')}</li>
      <li>Email: {info.get('email')}</li>
      <li>Website: {info.get('website')}</li>
    </ul>
  </div>
);

UserCard.propTypes = {
  info: ImmutablePropTypes.map.isRequired,
};

export default UserCard;
