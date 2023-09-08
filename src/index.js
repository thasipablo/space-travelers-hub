import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import { fetchRockets } from './redux/rockets/rocketsSlice';
import { fetchMission } from './redux/missions/missionsSlice';

store.dispatch(fetchRockets());
store.dispatch(fetchMission());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
