import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

const UserList = ({ list }) => (
  <div className={styles.UserList}>
    <h4>User List</h4>
    <ul>
      {list.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/UserInfo/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

UserList.propTypes = {
  list: PropTypes.array.isRequired
};

export default UserList;
