/* @flow */

import React from 'react';

// Rendering async component for React-Router code-splitting
// eslint-disable-next-line import/prefer-default-export
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
