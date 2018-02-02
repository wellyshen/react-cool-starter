/* @flow */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import Helmet from 'react-helmet';

import * as usersAction from '../../actions/user';
import type {
  UserInfo as UserInfoType,
  Dispatch,
  ReduxState
} from '../../types';
import { UserCard } from '../../components';
import styles from './styles.scss';

type Props = {
  userInfo: UserInfoType,
  match: Object,
  fetchUserIfNeeded: (id: string) => void
};

// Export this for unit testing more easily
export class UserInfo extends PureComponent<Props> {
  componentDidMount() {
    const { fetchUserIfNeeded, match } = this.props;

    fetchUserIfNeeded(match.params.id);
  }

  renderUserCard = () => {
    const { userInfo, match: { params } } = this.props;
    const userInfoById = userInfo[params.id];

    if (!userInfoById || userInfoById.readyStatus === 'USER_REQUESTING') {
      return <p>Loading...</p>;
    }

    if (userInfoById.readyStatus === 'USER_FAILURE') {
      return <p>Oops, Failed to load info!</p>;
    }

    return <UserCard info={userInfoById.info} />;
  };

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
  ({ userInfo }: ReduxState) => ({ userInfo }),
  (dispatch: Dispatch) => ({
    fetchUserIfNeeded: (id: string) =>
      dispatch(usersAction.fetchUserIfNeeded(id))
  })
);

export default connector(UserInfo);
