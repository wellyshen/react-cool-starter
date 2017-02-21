import React from 'react';
import { Link } from 'react-router';

import styles from './styles.scss';

type Props = { list: Object };

const UserList = ({ list }: Props) => (
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

UserList.defaultProps = {
  list: {
    id: '',
    name: '',
  },
};

export default UserList;
