// Importing components

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import HomePageLogged from './pages/HomePageLogged';
import SearchProfilPage from './pages/SearchProfilPage';
import ConnexionPage from './pages/ConnectionPage';

export default function App() {
  return (
    <Routes>
      {/* TODO isAuthenticated */}
      {/* isAuthentified ? <Route path="/" element={<HomePageLogged />} /> : <Route path="/" element={<HomePage />} /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/loggedIn" element={<HomePageLogged />} />
      <Route path="/profils" element={<SearchProfilPage />} />
      <Route path="/login" element={<ConnexionPage />} />
    </Routes>
  );
}
