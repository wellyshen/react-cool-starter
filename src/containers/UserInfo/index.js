import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import * as action from './action';
import UserCard from '../../components/UserCard';

import styles from './styles.scss';

class UserInfo extends PureComponent {
  // Fetching data method for both server/client side rendering
  static fetchData(dispatch, params) {
    return Promise.all([
      dispatch(action.fetchDataIfNeeded(params.id)),
    ]);
  }

  componentDidMount() {
    const { dispatch, params } = this.props;

    // Fetching data for client side rendering
    UserInfo.fetchData(dispatch, params);
  }

  displayUserCard = () => {
    const { userInfo, params } = this.props;
    const userInfoById = userInfo[params.id];

    if (!userInfoById || userInfoById.readyState === action.AN_USER_REQUESTING) {
      return <p>Loading...</p>;
    }

    if (userInfoById.readyState === action.AN_USER_FAILURE) {
      return <p>Oops, Failed to load info!</p>;
    }

    return <UserCard info={userInfoById.info} />;
  }

  render() {
    return (
      <div className={styles.UserInfo}>
        <Helmet title="User Info" />
        {this.displayUserCard()}
      </div>
    );
  }
}

UserInfo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.objectOf(PropTypes.string).isRequired,
  userInfo: PropTypes.shape({
    readyState: PropTypes.string,
    info: PropTypes.shape({
      name: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
      website: PropTypes.string,
    }),
  }),
};

UserInfo.defaultProps = {
  userInfo: {
    readyState: '',
    info: {
      name: '',
      phone: '',
      email: '',
      website: '',
    },
  },
};

export default connect(
  ({ userInfo }) => ({ userInfo }),
)(UserInfo);
