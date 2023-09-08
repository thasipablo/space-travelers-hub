import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { bookRocket } from '../redux/rockets/rocketsSlice';
import '@testing-library/jest-dom/extend-expect';
import RocketCard from './RocketCard';

const mockStore = configureStore([]);

describe('MissionCard Component', () => {
  let store;
  const rocket = {
    id: '5e9d0d95eda69955f709d1eb',
    name: 'Falcon 1',
    description: 'The Falcon 1',
    reserved: false,
    flickr_images: ['test.jpg'],
  };

  const initialState = {
    rockets: [],
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should render RocketCard component without errors', () => {
    render(
      <Provider store={store}>
        <RocketCard rocket={rocket} />
      </Provider>,
    );

    expect(screen.getByText('Falcon 1')).toBeInTheDocument();
    expect(screen.getByText('The Falcon 1')).toBeInTheDocument();
  });

  it('should trigger a Redux action when Reserve rocket button is clicked', () => {
    render(
      <Provider store={store}>
        <RocketCard rocket={rocket} />
      </Provider>,
    );

    const joinButton = screen.getByText('Reserve Rocket');
    fireEvent.click(joinButton);

    const actions = store.getActions();
    expect(actions).toEqual([bookRocket('5e9d0d95eda69955f709d1eb')]);
  });
});
