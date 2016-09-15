import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import * as action from '../../actions/fetchAnUser';
import UserCard from '../../components/UserCard';

import styles from './UserInfo.scss';

class UserInfo extends Component {
  static fetchData(dispatch, params) {
    return Promise.all([
      dispatch(action.fetchAnUserIfNeeded(params.id)),
    ]);
  }

  componentDidMount() {
    const { dispatch, params } = this.props;

    UserInfo.fetchData(dispatch, params);
  }

  // Prevent the components which with the same props and state are rendered repeatly
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  displayUserCard = () => {
    const { anUser, params } = this.props;
    const anUserById = anUser.get(params.id);

    if (!anUserById || anUserById.get('readyState') === action.AN_USER_FETCHING) {
      return <p>Loading...</p>;
    }

    if (anUserById.get('readyState') === action.AN_USER_FETCH_FAILED) {
      return <p>Oops, Failed to fetch the user!</p>;
    }

    return <UserCard anUser={anUserById.get('info')} />;
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
  dispatch: PropTypes.func,
  params: PropTypes.objectOf(PropTypes.string),
  anUser: ImmutablePropTypes.map,
};

const mapStateToProps = state => ({ anUser: state.get('anUser') });

export default connect(mapStateToProps)(UserInfo);
