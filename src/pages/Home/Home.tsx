import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { usersAction } from '../../actions';
import { UserList } from '../../components';
import { AppState, ThunkDispatch } from '../../types';
import styles from './styles.scss';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

// Export for unit testing
export const Home = ({ readyStatus, list, fetchUsersIfNeeded }: Props) => {
  useEffect(() => {
    fetchUsersIfNeeded();
  }, []);

  const renderUserList = () => {
    if (!readyStatus || readyStatus === 'invalid' || readyStatus === 'request')
      return <p>Loading...</p>;

    if (readyStatus === 'failure') return <p>Oops, Failed to load list!</p>;

    return <UserList list={list} />;
  };

  return (
    <div className={styles.Home}>
      <Helmet title="Home" />
      {renderUserList()}
    </div>
  );
};

const mapStateToProps = ({ home: { readyStatus, list } }: AppState) => ({
  readyStatus,
  list
});

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  fetchUsersIfNeeded: () => dispatch(usersAction.fetchUsersIfNeeded())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Home));
