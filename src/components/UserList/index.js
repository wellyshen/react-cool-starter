import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './styles.scss';

const UserList = ({ list }) => (
  <div className={styles.UserList}>
    <h4>User List</h4>
    <ul>
      {list.map(user => (
        <li key={user.id}>
          <Link to={`/UserInfo/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

UserList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
};

UserList.defaultProps = {
  list: {
    id: '',
    name: '',
  },
};

export default UserList;
