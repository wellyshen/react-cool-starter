/* @flow */

import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import DialogTitle from 'material-ui/Dialog/DialogTitle';
import DialogContent from 'material-ui/Dialog/DialogContent';
import DialogContentText from 'material-ui/Dialog/DialogContentText';
import DialogActions from 'material-ui/Dialog/DialogActions';

import * as actionUsers from '../../actions/users';
import type { Home as HomeType, Dispatch, ReduxState } from '../../types';
import { UserList } from '../../components';
import styles from './styles.scss';

type Props = { home: HomeType, fetchUsersIfNeeded: () => void };

// Export this for unit testing more easily
export class Home extends PureComponent<Props> {
  constructor() {
    super();
    this.state = {
      isOpenModal: false
    };
  }
  componentDidMount() {
    this.props.fetchUsersIfNeeded();
  }
  handleClose = () => {
    this.setState({
      isOpenModal: false
    });
  };
  handleOpen = () => {
    this.setState({
      isOpenModal: true
    });
  };

  renderUserList = () => {
    const { home } = this.props;

    if (
      !home.readyStatus ||
      home.readyStatus === 'USERS_INVALID' ||
      home.readyStatus === 'USERS_REQUESTING'
    ) {
      return <p>Loading...</p>;
    } else if (home.readyStatus === 'USERS_FAILURE') {
      return <p>Oops, Failed to load list!</p>;
    }

    return <UserList list={home.list} />;
  };

  render() {
    return (
      <div className={styles.Home}>
        <Helmet title="Home" />
        <Dialog open={this.state.isOpenModal} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Button
          style={{ marginTop: '20px' }}
          variant="raised"
          color="secondary"
          onClick={this.handleOpen}
        >
          Super Secret Password
        </Button>
        {this.renderUserList()}
      </div>
    );
  }
}

const connector = connect(
  ({ home }: ReduxState) => ({ home }),
  (dispatch: Dispatch) => ({
    fetchUsersIfNeeded: () => dispatch(actionUsers.fetchUsersIfNeeded())
  })
);

// Enable hot reloading for async componet
export default compose(hot(module), withRouter, connector)(Home);
