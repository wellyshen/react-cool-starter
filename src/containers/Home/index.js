/* eslint-disable react/sort-comp */
/* @flow */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import Helmet from 'react-helmet';

import * as action from './action';
import type { Home as HomeType, Dispatch, Reducer } from '../../types';
import UserList from '../../components/UserList';
import styles from './styles.scss';

type Props = {
  home: HomeType,
  fetchUsersIfNeeded: () => void,
};

class Home extends PureComponent {
  props: Props;

  static defaultProps: {
    home: {
      readyStatus: 'USERS_INVALID',
      list: null,
    },
    fetchUsersIfNeeded: () => {},
  };

  componentDidMount() {
    this.props.fetchUsersIfNeeded();
  }

  renderUserList = () => {
    const { home } = this.props;

    if (!home.readyStatus || home.readyStatus === action.USERS_INVALID ||
      home.readyStatus === action.USERS_REQUESTING) {
      return <p>Loading...</p>;
    }

    if (home.readyStatus === action.USERS_FAILURE) {
      return <p>Oops, Failed to load list!</p>;
    }

    return <UserList list={home.list} />;
  }

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
  ({ home }: Reducer) => ({ home }),
  (dispatch: Dispatch) => ({
    fetchUsersIfNeeded: () => dispatch(action.fetchUsersIfNeeded()),
  }),
);

export default connector(Home);
