import React from 'react';
// import { Provider } from 'react-redux';
import { shallow } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import { Map } from 'immutable';
import { Home } from '../Home';

describe('<Home />', () => {
  // let fakeStore;
  // let fakeData;
  // let wrapper;

  // beforeEach(() => {
  //   fakeStore = {
  //     default: () => {},
  //     subscribe: () => {},
  //     dispatch: () => {},
  //     getState: () => {},
  //   };

  //   fakeData = Map({ // eslint-disable-line new-cap
  //     readyState: 'USERS_FETCHED',
  //     list: fromJS([{ name: 'Welly' }]),
  //   });

  //   wrapper = shallow(
  //     <Provider store={fakeStore}>
  //       <Home users={fakeData} />
  //     </Provider>
  //   );
  // });

  it('render the loading indicator when its loading', () => {
    const fakeData = Map({ // eslint-disable-line new-cap
      readyState: 'USERS_INVALID',
      list: null,
    });
    const wrapper = shallow(<Home users={fakeData} dispatch={() => {}} />);

    expect(wrapper.find('p').text()).to.equal('Loading...');
  });
});
