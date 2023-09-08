import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MissionList from './MissionList';

const mockStore = configureStore();

describe('Pruebas para el componente MissionList', () => {
  let store;

  // Establece un estado ficticio para el store de Redux
  const initialState = {
    mission: {
      missionItems: [
        {
          mission_id: 1,
          mission_name: 'Mission 1',
          description: 'Description 1',
          reserved: false,
        },
        {
          mission_id: 2,
          mission_name: 'Mission 2',
          description: 'Description 2',
          reserved: true,
        },
      ],
    },
  };

  beforeEach(() => {
    // Crea un store ficticio con el estado inicial
    store = mockStore(initialState);
  });

  it('debería renderizar el componente sin errores', () => {
    const { container } = render(
      <Provider store={store}>
        <MissionList />
      </Provider>,
    );
    expect(container).toBeDefined();
  });

  it('debería mostrar la información correcta en las filas', async () => {
    render(
      <Provider store={store}>
        <MissionList />
      </Provider>,
    );

    // Espera hasta que se muestren las filas en la pantalla
    await waitFor(() => {
      expect(screen.getByText('Mission 1').textContent).toBe('Mission 1');
    });
  });
});
