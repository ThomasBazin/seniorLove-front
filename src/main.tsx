import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { useState } from 'react';
import App from './App';
import NavBarLogged from './components/standaloneComponents/NavBar/NavBarLogged';
import NavBarV1 from './components/standaloneComponents/NavBar/NavBar';
import Footer from './components/standaloneComponents/Footer/Footer';

export default function Root() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

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
      />
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
