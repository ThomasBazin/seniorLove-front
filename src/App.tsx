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
}

export default function App({ isAuthenticated, setIsAuthenticated }: AppProps) {
  // JWT state
  // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Every time the page is rendered, we are checking for the existence of a token in localStorage
  // useEffect(() => {
  //   const response = getTokenFromLocalStorage();

  //   if (!response) {
  //     setIsAuthenticated(false);
  //   }
  // }, []);
  return (
    <Routes>
      {/* TODO isAuthenticated */}
      {isAuthenticated ? (
        <>
          <Route
            path="/"
            element={<HomePageLogged setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/profils" element={<SearchProfilPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventPage />} />
          <Route path="*" element={<Error404Page />} />
        </>
      ) : (
        <>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={<ConnexionPage setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventPage />} />
          <Route path="*" element={<Error404Page />} />
        </>
      )}
    </Routes>
  );
}
