import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { UserInfo } from '../UserInfo';

describe('<UserInfo />', () => {
  const tree = (props, actions) =>
    renderer
      .create(
        <MemoryRouter>
          <UserInfo {...props} {...actions} />
        </MemoryRouter>
      )
      .toJSON();

  it('should call fetchUserIfNeeded when componentDidMount', () => {
    const mockAction = jest.fn();
    const props = {
      userInfo: {},
      match: { params: { id: 1 } }
    };
    const actions = { fetchUserIfNeeded: mockAction };

    mount(
      <MemoryRouter>
        <UserInfo {...props} {...actions} />
      </MemoryRouter>
    );

    expect(mockAction).toHaveBeenCalled();
  });

  it('renders the loading status if data invalid', () => {
    const props = {
      userInfo: {},
      match: { params: { id: 1 } }
    };
    const actions = { fetchUserIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  it('renders the loading status if requesting data', () => {
    const props = {
      userInfo: { 1: { readyStatus: 'USER_REQUESTING' } },
      match: { params: { id: 1 } }
    };
    const actions = { fetchUserIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  it('renders an error if loading failed', () => {
    const props = {
      userInfo: { 1: { readyStatus: 'USER_FAILURE' } },
      match: { params: { id: 1 } }
    };
    const actions = { fetchUserIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });

  it('renders the <UserCard /> if loading was successful', () => {
    const props = {
      userInfo: {
        1: {
          readyStatus: 'USER_SUCCESS',
          info: {
            name: 'Welly',
            phone: '007',
            email: 'test@gmail.com',
            website: 'www.test.com'
          }
        }
      },
      match: { params: { id: 1 } }
    };
    const actions = { fetchUserIfNeeded: () => {} };

    expect(tree(props, actions)).toMatchSnapshot();
  });
});
