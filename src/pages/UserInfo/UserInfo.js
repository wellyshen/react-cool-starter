import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { userAction } from '../../actions';
import { UserCard } from '../../components';
import styles from './styles.scss';

// Export this for unit testing more easily
export class UserInfo extends PureComponent {
  componentDidMount() {
    const { fetchUserIfNeeded, match } = this.props;

    fetchUserIfNeeded(match.params.id);
  }

  componentDidUpdate(prevProps) {
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

UserInfo.propTypes = {
  match: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired,
  fetchUserIfNeeded: PropTypes.func.isRequired
};

const mapStateToProps = ({ userInfo }) => ({ userInfo });

const mapDispatchToProps = dispatch => ({
  fetchUserIfNeeded: id => dispatch(userAction.fetchUserIfNeeded(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
