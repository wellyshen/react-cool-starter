/* @flow */

import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { withRouter, NavLink } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemIcon from 'material-ui/List/ListItemIcon';
import ListItemText from 'material-ui/List/ListItemText';
import InboxIcon from 'material-ui-icons/MoveToInbox';
// import Divider from 'material-ui/Divider';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';

import styles from './styles.scss';

// Export this for unit testing more easily
export class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpenDrawer: false
    };
  }
  // Remove the server-side injected CSS.
  componentDidMount() {
    if (typeof window !== 'undefined') {
      const jssStyles = document.getElementById('jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }
  toggleDrawer = () => {
    this.setState({
      ...this.state,
      isOpenDrawer: !this.state.isOpenDrawer
    });
  };
  render() {
    return (
      <div className={styles.Header}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              style={{
                marginLeft: '-12',
                marginRight: 20
              }}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Button
              component={props => <NavLink to="/" {...props} />}
              color="inherit"
            >
              Main
            </Button>
            <Button
              color="inherit"
              component={props => <NavLink to="/login" {...props} />}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.isOpenDrawer} onClose={this.toggleDrawer}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Send mail" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
        </Drawer>
        {/* child routes won't render without this */}
      </div>
    );
  }
}

// Enable hot reloading for async componet
export default compose(hot(module), withRouter)(Header);
