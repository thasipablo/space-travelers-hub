import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MissionCard from '../components/MissionCard';
import { actionMission } from '../redux/missions/missionsSlice';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

describe('MissionCard Component', () => {
  let store;

  const initialState = {
    missions: [],
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should render MissionCard component without errors', () => {
    render(
      <Provider store={store}>
        <MissionCard
          id="1"
          missionName="Mission 1"
          missionDescription="Description 1"
          missionReserved={false}
        />
      </Provider>
    );

    expect(screen.getByText('Mission 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Join Mission')).toBeInTheDocument();
  });

  it('should trigger a Redux action when Join Mission button is clicked', () => {
    render(
      <Provider store={store}>
        <MissionCard
          id="1"
          missionName="Mission 1"
          missionDescription="Description 1"
          missionReserved={false}
        />
      </Provider>
    );

    const joinButton = screen.getByText('Join Mission');
    fireEvent.click(joinButton);

    const actions = store.getActions();
    expect(actions).toEqual([actionMission('1')]);
  });
});
