/* @flow */

import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';

import * as actionUsers from '../../redux/actions/users.actions';
import type { Users as UsersType, ReduxState } from '../../types';
import { UserList } from '../../components';
import styles from './styles.scss';

type Props = { users: UsersType, fetchUsers: () => void };

// Export this for unit testing more easily
export class Home extends PureComponent<Props> {
  componentWillMount() {
    if (this.props.users.readyStatus !== 'USERS_SUCCESS') {
      this.props.fetchUsers();
    }
  }

  renderUserList = () => {
    const { users } = this.props;

    if (
      !users.readyStatus ||
      users.readyStatus === 'USERS_INVALID' ||
      users.readyStatus === 'USERS_REQUESTING'
    ) {
      return <p>Loading...</p>;
    } else if (users.readyStatus === 'USERS_FAILURE') {
      return <p>Oops, Failed to load list!</p>;
    }

    return <UserList list={users.list} />;
  };

  render() {
    return (
      <div className={styles.Home}>
        <Helmet title="Home" />
        {this.renderUserList()}
      </div>
    );
  }
}

const connector: Connector<{}, Props> = connect(
  ({ users }: ReduxState) => ({ users }),
  {
    fetchUsers: actionUsers.fetchUsers
  }
);

// Enable hot reloading for async componet
export default compose(hot(module), withRouter, connector)(Home);
