import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RocketsList from './RocketsList';

const mockStore = configureStore();

describe('Testing for the RocketsList component', () => {
  let store;

  const initialState = {
    rocket: {
      rockets: [
        {
          id: '1',
          name: 'Falcon 1',
          description: 'The Falcon 1',
          reserved: false,
          flickr_images: ['test.jpg'],
        },
        {
          id: '2',
          name: 'Falcon 2',
          description: 'The Falcon 2',
          reserved: false,
          flickr_images: ['test.jpg'],
        },
      ],
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should render the component without errors', () => {
    const { container } = render(
      <Provider store={store}>
        <RocketsList />
      </Provider>,
    );
    expect(container).toBeDefined();
  });

  it('should show the correct information in the rows', async () => {
    render(
      <Provider store={store}>
        <RocketsList />
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText('Falcon 1').textContent).toBe('Falcon 1');
    });
  });
});
