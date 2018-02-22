/* @flow */

import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';

import * as actionUsers from '../../actions/users';
import type { Home as HomeType, ReduxState } from '../../types';
import { UserList } from '../../components';
import styles from './styles.scss';

type Props = { home: HomeType, fetchUsers: () => void };

// Export this for unit testing more easily
export class Home extends PureComponent<Props> {
  componentDidMount() {
    if (this.props.home.readyStatus !== 'USERS_SUCCESS') {
      this.props.fetchUsers();
    }
  }

  renderUserList = () => {
    const { home } = this.props;

    if (
      !home.readyStatus ||
      home.readyStatus === 'USERS_INVALID' ||
      home.readyStatus === 'USERS_REQUESTING'
    ) {
      return <p>Loading...</p>;
    } else if (home.readyStatus === 'USERS_FAILURE') {
      return <p>Oops, Failed to load list!</p>;
    }

    return <UserList list={home.list} />;
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
  ({ home }: ReduxState) => ({ home }),
  {
    fetchUsers: actionUsers.fetchUsers
  }
);

// Enable hot reloading for async componet
export default compose(hot(module), withRouter, connector)(Home);
