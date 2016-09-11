import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import styles from './UserCard.scss';

const UserCard = ({ anUser }) => (
  <div className={styles.UserCard}>
    <h4>User Card</h4>
    <ul>
      <li>Name: {anUser.get('name')}</li>
      <li>Phone: {anUser.get('phone')}</li>
      <li>Email: {anUser.get('email')}</li>
      <li>Website: {anUser.get('website')}</li>
    </ul>
  </div>
);

UserCard.propTypes = {
  anUser: ImmutablePropTypes.map.isRequired,
};

export default UserCard;
