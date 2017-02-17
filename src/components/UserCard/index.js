import React, { PropTypes } from 'react';

import styles from './styles.scss';

const UserCard = ({ info }) => (
  <div className={styles.UserCard}>
    <h4>User Card</h4>
    <ul>
      <li>Name: {info.name}</li>
      <li>Phone: {info.phone}</li>
      <li>Email: {info.email}</li>
      <li>Website: {info.website}</li>
    </ul>
  </div>
);

UserCard.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
};

UserCard.defaulProps = {
  info: {
    name: '',
    phone: '',
    email: '',
    website: '',
  },
};

export default UserCard;
