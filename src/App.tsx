// Importing components
import { Route, Routes, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import HomePageLogged from './pages/HomePageLogged';
import SearchProfilesPage from './pages/ProfilesPage';
import ProfilePage from './pages/ProfilePage';
import MyProfilePage from './pages/MyProfilePage';
import ConnexionPage from './pages/ConnectionPage';
import EventPage from './pages/EventPage';
import Error404Page from './pages/Error404Page';
import MessagePage from './pages/MessagePage';

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
          <Route path="/profiles" element={<SearchProfilesPage />} />
          <Route path="/profiles/:userId" element={<ProfilePage />} />
          <Route path="/myprofile" element={<MyProfilePage />} />
          <Route
            path="/messages"
            element={<MessagePage setIsAuthenticated={setIsAuthenticated} />}
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
      <Route path="*" element={<Navigate to="/error" replace />} />
      <Route
        path="/error"
        element={<Error404Page isAuthenticated={isAuthenticated} />}
      />
    </Routes>
  );
}
