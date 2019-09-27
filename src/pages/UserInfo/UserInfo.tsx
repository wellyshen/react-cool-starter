import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { userAction } from '../../actions';
import { UserCard } from '../../components';
import { AppState, ThunkDispatch } from '../../types';
import styles from './styles.scss';

// Normal props for the component
type ownProps = {
  match: any;
};
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  ownProps;

// Export for unit testing
export const UserInfo = ({ match, userInfo, fetchUserIfNeeded }: Props) => {
  const { id } = match.params;

  useEffect(() => {
    fetchUserIfNeeded(id);
  }, [id]);

  const renderUserCard = () => {
    const userInfoById = userInfo[id];

    if (!userInfoById || userInfoById.readyStatus === 'request')
      return <p>Loading...</p>;

    if (userInfoById.readyStatus === 'failure')
      return <p>Oops, Failed to load info!</p>;

    return <UserCard info={userInfoById.info} />;
  };

  return (
    <div className={styles.UserInfo}>
      <Helmet title="User Info" />
      {renderUserCard()}
    </div>
  );
};

const mapStateToProps = ({ userInfo }: AppState) => ({ userInfo });

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  fetchUserIfNeeded: (id: string) => dispatch(userAction.fetchUserIfNeeded(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(UserInfo));
