// Importing components
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import HomePageLogged from './pages/HomePageLogged';
import SearchProfilPage from './pages/SearchProfilPage';
import ConnexionPage from './pages/ConnectionPage';
import EventPage from './pages/EventPage';
import Error404Page from './pages/Error404Page';

interface AppProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function App({
  isAuthenticated,
  setIsAuthenticated,
  setUserToken,
}: AppProps) {
  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route
            path="/"
            element={<HomePageLogged setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/profils" element={<SearchProfilPage />} />
          <Route
            path="/events"
            element={
              <EventsPage
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route
            path="/events/:id"
            element={
              <EventPage
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
        </>
      ) : (
        <>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={<ConnexionPage setUserToken={setUserToken} />}
          />
          <Route
            path="/events"
            element={
              <EventsPage
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route
            path="/events/:id"
            element={
              <EventPage
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
        </>
      )}
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
}
