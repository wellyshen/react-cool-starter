import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import * as fetchAnUser from '../../actions/fetchAnUser';
import UserCard from '../../components/UserCard';

import styles from './UserInfo.scss';

class UserInfo extends Component {
  static fetchData = (dispatch, params) => Promise.all([
    dispatch(fetchAnUser.fetchAnUserIfNeeded(params.id)),
  ]);

  componentDidMount() {
    const { dispatch, params } = this.props;

    UserInfo.fetchData(dispatch, params);
  }

  // Disable the components which with the same props and state
  // are rendered repeatly. It can boost the performance of your app
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  displayUserCard = () => {
    const { anUser, params } = this.props;
    const anUserById = anUser.get(params.id);

    if (!anUserById || anUserById.get('readyState') === fetchAnUser.AN_USER_FETCHING) {
      return <p>Loading...</p>;
    }

    if (anUserById.get('readyState') === fetchAnUser.AN_USER_FETCH_FAILED) {
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
