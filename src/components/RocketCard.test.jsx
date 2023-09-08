import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import store from '../store';
import falconImg from '../../assets/images/planet.png';
import RocketCard from './RocketCard';

describe('Rockets component', () => {
  it('renders correctly', () => {
    const rocket = {
      id: '5e9d0d95eda69955f709d1eb',
      name: 'Falcon 1',
      type: 'rocket',
      flickr_images: falconImg,
      description: 'The Falcon 1 was an expendable launch system privately ...',
      reserved: false,
    };
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <RocketCard rocket={rocket} />
          </MemoryRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
