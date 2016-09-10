import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import * as action from '../../actions/fetchUsers';
import UserList from '../../components/UserList';

import styles from './Home.scss';

class Home extends Component {
  static fetchData = dispatch => Promise.all([
    dispatch(action.fetchUsersIfNeeded()),
  ]);

  componentDidMount() {
    const { dispatch } = this.props;

    Home.fetchData(dispatch);
  }

  // Disable the components which with the same props and state
  // are rendered repeatly. It can boost the performance of your app
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  displayUserList = () => {
    const { users } = this.props;

    if (users.get('readyState') === action.USERS_INVALID ||
      users.get('readyState') === action.USERS_FETCHING) {
      return <p>Loading...</p>;
    }

    if (users.get('readyState') === action.USERS_FETCH_FAILED) {
      return <p>Oops, Failed to fetch users!</p>;
    }

    return <UserList list={users.get('list')} />;
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

Home.propTypes = {
  users: ImmutablePropTypes.map,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({ users: state.get('users') });

export default connect(mapStateToProps)(Home);
