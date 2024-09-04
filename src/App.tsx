// Importing components

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import ForeignProfile from './components/ForeignProfile/ForeignProfile';

function App() {
  return (
    <ForeignProfile />
    // <Routes>
    //   <Route path="/" element={<HomePage />} />
    //   <Route path="/events" element={<EventsPage />} />
    // </Routes>
  );
}

export default App;
