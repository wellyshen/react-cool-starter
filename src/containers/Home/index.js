/* eslint-disable react/sort-comp */
/* @flow */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import Helmet from 'react-helmet';
import * as action from './action';
import UserList from '../../components/UserList';
import type { Home as HomeType, Dispatch, Reducer } from '../../types';

import styles from './styles.scss';

type Props = {
  home: HomeType,
  dispatch: Dispatch,
};

class Home extends PureComponent {
  props: Props;

  static defaultProps: {
    home: {
      readyState: 'USERS_INVALID',
      list: null,
    },
    dispatch: () => void,
  };

  // Fetching data method for both server/client side rendering
  static fetchData(dispatch) {
    return Promise.all([
      dispatch(action.fetchDataIfNeeded()),
    ]);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    // Fetching data for client side rendering
    Home.fetchData(dispatch);
  }

  displayUserList = () => {
    const { home } = this.props;

    if (!home.readyState || home.readyState === action.USERS_INVALID ||
      home.readyState === action.USERS_REQUESTING) {
      return <p>Loading...</p>;
    }

    if (home.readyState === action.USERS_FAILURE) {
      return <p>Oops, Failed to load list!</p>;
    }

    return <UserList list={home.list} />;
  }

  render() {
    return (
      <div className={styles.Home}>
        <Helmet title="Home" />
        {this.displayUserList()}
      </div>
    );
  }
}

const connector: Connector<{}, Props> = connect(
  ({ home }: Reducer) => ({ home }),
);

export default connector(Home);
