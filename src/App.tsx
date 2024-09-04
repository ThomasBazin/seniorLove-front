// Importing components

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventView from './components/EventView/EventView';

function App() {
  return (
    <EventView />
    // <Routes>
    //   <Route path="/" element={<HomePage />} />
    //   <Route path="/events" element={<EventsPage />} />
    // </Routes>
  );
}

export default App;
