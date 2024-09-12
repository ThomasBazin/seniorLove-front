import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import App from './App';
import NavBarLogged from './components/standaloneComponents/NavBar/NavBarLogged';
import NavBarV1 from './components/standaloneComponents/NavBar/NavBar';
import Footer from './components/standaloneComponents/Footer/Footer';
import {
  getTokenAndDataFromLocalStorage,
  removeTokenFromLocalStorage,
} from './localStorage/localStorage';
import axios from './axios';

export default function Root() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Initialize userToken from localStorage on component mount
  const [userToken, setUserToken] = useState<string | null>(() => {
    const response = getTokenAndDataFromLocalStorage();
    return response?.token || null;
  });

  useEffect(() => {
    const checkAuthentication = () => {
      const response = getTokenAndDataFromLocalStorage();
      const token = response?.token;
      if (token && token === userToken) {
        setIsAuthenticated(true);
        axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
      } else {
        setIsAuthenticated(false);
        removeTokenFromLocalStorage();
      }
    };

    // Run on component mount to check if token matches localStorage
    checkAuthentication();

    // Listen for changes to localStorage (e.g., via Chrome DevTools or another tab)
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'token') {
        checkAuthentication();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Optional: Poll localStorage periodically to catch any changes
    const intervalId = setInterval(checkAuthentication, 5000); // Check every 5 seconds

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(intervalId);
    };
  }, [userToken]);

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <NavBarLogged setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <NavBarV1 />
      )}

      <App
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        setUserToken={setUserToken}
      />
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
