import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import ErrorBoundary from '../index';

describe('<ErrorBoundary />', () => {
  const tree = (children?: React.ReactNode) =>
    renderer
      .create(
        <MemoryRouter>
          <ErrorBoundary>{children}</ErrorBoundary>
        </MemoryRouter>
      )
      .toJSON();

  it('renders nothing if no children', () => {
    expect(tree()).toMatchSnapshot();
  });

  it('renders children if no error', () => {
    expect(
      tree(
        <div>
          <h1>I am Welly</h1>
        </div>
      )
    ).toMatchSnapshot();
  });

  it('renders error view if an error occurs', () => {
    const wrapper = mount(
      <ErrorBoundary>
        <div>
          <h1>I am Welly</h1>
        </div>
      </ErrorBoundary>
    );

    wrapper.setState({
      error: 'Oops! Something went wrong.',
      errorInfo: { componentStack: 'Somewhere broken :(' }
    });

    expect(wrapper.find('.error-view').exists()).toBeTruthy();
  });
});
