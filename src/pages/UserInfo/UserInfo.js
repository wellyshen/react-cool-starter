/* @flow */

import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import { userAction } from '../../actions';
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

  componentDidUpdate(prevProps: Object) {
    const { fetchUserIfNeeded, match } = this.props;

    if (prevProps.match.params.id !== match.params.id) {
      fetchUserIfNeeded(match.params.id);
    }
  }

  renderUserCard = () => {
    const {
      userInfo,
      match: { params }
    } = this.props;
    const userInfoById = userInfo[params.id];

    if (!userInfoById || userInfoById.readyStatus === 'USER_REQUESTING')
      return <p>Loading...</p>;

    if (userInfoById.readyStatus === 'USER_FAILURE')
      return <p>Oops, Failed to load info!</p>;

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

const mapStateToProps = ({ userInfo }: ReduxState) => ({ userInfo });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchUserIfNeeded: (id: string) => dispatch(userAction.fetchUserIfNeeded(id))
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(UserInfo);
