import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { usersAction } from '../../actions';
import { UserList } from '../../components';
import styles from './styles.scss';

// Export this for unit testing more easily
export class Home extends PureComponent {
  componentDidMount() {
    const { fetchUsersIfNeeded } = this.props;

    fetchUsersIfNeeded();
  }

  renderUserList = () => {
    const { readyStatus, list } = this.props;

    if (
      !readyStatus ||
      readyStatus === 'USERS_INVALID' ||
      readyStatus === 'USERS_REQUESTING'
    )
      return <p>Loading...</p>;

    if (readyStatus === 'USERS_FAILURE')
      return <p>Oops, Failed to load list!</p>;

    return <UserList list={list} />;
  };

  render() {
    return (
      <div className={styles.Home}>
        <Helmet title="Home" />
        {this.renderUserList()}
      </div>
    );
  }
}

Home.propTypes = {
  readyStatus: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  fetchUsersIfNeeded: PropTypes.func.isRequired
};

const mapStateToProps = ({ home: { readyStatus, list } }) => ({
  readyStatus,
  list
});

const mapDispatchToProps = dispatch => ({
  fetchUsersIfNeeded: () => dispatch(usersAction.fetchUsersIfNeeded())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
