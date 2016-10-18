import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import * as action from './action';
import UserList from '../../components/UserList';

import styles from './styles.scss';

class Home extends Component {
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

  // Prevent the components which with the same props and state are rendered repeatly
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  displayUserList = () => {
    const { home } = this.props;

    if (!home.get('readyState') || home.get('readyState') === action.USERS_INVALID ||
      home.get('readyState') === action.USERS_REQUESTING) {
      return <p>Loading...</p>;
    }

    if (home.get('readyState') === action.USERS_FAILURE) {
      return <p>Oops, Failed to load list!</p>;
    }

    return <UserList list={home.get('list')} />;
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
  home: ImmutablePropTypes.map,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({ home: state.get('home') });

export default connect(mapStateToProps)(Home);
