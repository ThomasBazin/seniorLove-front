import { useEffect } from 'react';
import MainHomePageLogged from '../components/pageComponents/HomePageLogged/MainHomePageLogged';

interface HomePageLoggedProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HomePageLogged({
  setIsAuthenticated,
}: HomePageLoggedProps) {
  // Move window position on top of page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  return <MainHomePageLogged setIsAuthenticated={setIsAuthenticated} />;
}
