/* @flow */

import React from 'react';

// Rendering async component for React-Router code-splitting
export const asyncComponent = (getComponent: () => Promise<any>) =>
  class AsyncComponent extends React.Component {
    static Component = null;

    state = { Component: AsyncComponent.Component };

    componentDidMount() {
      if (this.state.Component) return;

      getComponent().then((Component) => {
        AsyncComponent.Component = Component;

        this.setState({ Component });
      });
    }

    render() {
      const { Component } = this.state;

      if (Component) return <Component {...this.props} />;

      return null;
    }
  };

// The fake store creator for testing Components
export const storeFake = (state: Object): Object => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({ ...state }),
});
