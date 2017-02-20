import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import * as action from './action';
import UserList from '../../components/UserList';

import styles from './styles.scss';

class Home extends PureComponent {
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

Home.propTypes = {
  home: PropTypes.shape({
    readyState: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
  }),
  dispatch: PropTypes.func.isRequired,
};

Home.defaultProps = {
  home: {
    readyState: 'USERS_INVALID',
    list: null,
  },
};

const mapStateToProps = ({ home }) => ({ home });

export default connect(mapStateToProps)(Home);
