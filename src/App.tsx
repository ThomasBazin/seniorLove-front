// Importing components
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import HomePageLogged from './pages/HomePageLogged';
import SearchProfilPage from './pages/SearchProfilPage';
import ConnexionPage from './pages/ConnectionPage';
import EventPage from './pages/EventPage';
import NotFound from './pages/NotFound';

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
          <Route path="/" element={<HomePageLogged />} />
          <Route path="/profils" element={<SearchProfilPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventPage />} />
        </>
      ) : (
        <Route path="/" element={<HomePage />} />
      )}
      <Route path="/events" element={<EventsPage />} />
      <Route
        path="/login"
        element={<ConnexionPage setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route path="/events/:id" element={<EventPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
