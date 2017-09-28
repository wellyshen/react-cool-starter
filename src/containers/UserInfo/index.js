/* eslint-disable react/sort-comp */
/* @flow */

import React, { PureComponent } from 'react';
import type { Element } from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import Helmet from 'react-helmet';

import * as action from './action';
import type { UserInfo as UserInfoType, Dispatch, Reducer } from '../../types';
import UserCard from '../../components/UserCard';
import styles from './styles.scss';

type Props = {
  userInfo: UserInfoType,
  match: Object,
  fetchUserIfNeeded: (id: string) => void,
};

// Export this for unit testing more easily
// $FlowFixMe: it's an error
export class UserInfo extends PureComponent {
  props: Props;

  static defaultProps: {
    userInfo: {},
    match: { params: { id: '' } },
    fetchUserIfNeeded: () => {},
  };

  componentDidMount() {
    const { fetchUserIfNeeded, match: { params } } = this.props;

    fetchUserIfNeeded(params.id);
  }

  renderUserCard = (): Element<any> => {
    const { userInfo, match: { params } } = this.props;
    const userInfoById = userInfo[params.id];

    if (!userInfoById || userInfoById.readyStatus === action.USER_REQUESTING) {
      return <p>Loading...</p>;
    }

    if (userInfoById.readyStatus === action.USER_FAILURE) {
      return <p>Oops, Failed to load info!</p>;
    }

    return <UserCard info={userInfoById.info} />;
  }

  render() {
    return (
      <div className={styles.UserInfo}>
        <Helmet title="User Info" />
        {this.renderUserCard()}
      </div>
    );
  }
}

const connector: Connector<{}, Props> = connect(
  ({ userInfo }: Reducer) => ({ userInfo }),
  (dispatch: Dispatch) => ({
    fetchUserIfNeeded: (id: string) => dispatch(action.fetchUserIfNeeded(id)),
  }),
);

export default connector(UserInfo);
