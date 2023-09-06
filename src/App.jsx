import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MissionList from './components/MissionList';
import NavigationBar from './components/NavigationBar';
import RocketsList from './components/RocketsList';

const App = () => (
  <Router>
    <main className="app">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<RocketsList />} />
        <Route path="/missions" element={<MissionList />} />
      </Routes>
    </main>
  </Router>
);

export default App;
