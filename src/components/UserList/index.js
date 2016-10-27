import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router';

import './styles.scss';

const UserList = ({ list }) => (
  <div className="UserList">
    <h4>User List</h4>
    <ul>
      {list.map(user => (
        <li key={user.get('id')}>
          <Link to={`/UserInfo/${user.get('id')}`}>{user.get('name')}</Link>
        </li>
      ))}
    </ul>
  </div>
);

UserList.propTypes = {
  list: ImmutablePropTypes.list.isRequired,
};

export default UserList;
