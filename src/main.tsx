// import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';

// import { useEffect, useState } from 'react';
// import App from './App';
// import NavBarLogged from './components/standaloneComponents/NavBar/NavBarLogged';
// import NavBarV1 from './components/standaloneComponents/NavBar/NavBar';
// import Footer from './components/standaloneComponents/Footer/Footer';
// import {
//   getTokenAndDataFromLocalStorage,
//   removeTokenFromLocalStorage,
// } from './localStorage/localStorage';

// export default function Root() {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

//   const [userToken, setUserToken] = useState<string | null>(() => {
//     const response = getTokenAndDataFromLocalStorage();
//     return response?.token || null;
//   });

//   useEffect(() => {
//     // Check if the token exists in localStorage
//     const response = getTokenAndDataFromLocalStorage();
//     const token = response?.token;

//     console.log(token);
//     if (userToken !== null && userToken === token) {
//       console.log('token >>>', token);
//       console.log('userToken >>>', userToken);
//       console.log('good');
//       setIsAuthenticated(true);
//     } else {
//       console.log('token >>>', token);
//       console.log('userToken >>>', userToken);
//       console.log('bad');
//       setIsAuthenticated(false);
//       removeTokenFromLocalStorage();
//     }
//   }, [userToken]);

//   return (
//     <BrowserRouter>
//       {isAuthenticated ? (
//         <NavBarLogged setIsAuthenticated={setIsAuthenticated} />
//       ) : (
//         <NavBarV1 />
//       )}
//       <App
//         isAuthenticated={isAuthenticated}
//         setIsAuthenticated={setIsAuthenticated}
//         setUserToken={setUserToken}
//       />
//       <Footer />
//     </BrowserRouter>
//   );
// }

// ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);

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

      console.log('token >>>', token);
      console.log('userToken >>>', userToken);

      if (token && token === userToken) {
        console.log('good');
        setIsAuthenticated(true);
      } else {
        console.log('bad');
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
