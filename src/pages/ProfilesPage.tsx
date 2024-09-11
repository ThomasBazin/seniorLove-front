import { useState, useEffect } from 'react';
import MainSearchProfilePage from '../components/pageComponents/SearchProfilesPage/MainSearchProfilesPage';
import UserHeadband from '../components/standaloneComponents/UserHeadband/UserHeadband';

export default function ProfilesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  // Move window position on top of page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return isAuthenticated ? (
    <>
      <UserHeadband setIsAuthenticated={setIsAuthenticated} />
      <MainSearchProfilePage />
    </>
  ) : (
    <p>Veuillez vous connecter pour accéder à cette page.</p>
  );
}
