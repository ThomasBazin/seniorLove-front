import { useState } from 'react';
import MainSearchProfilePage from '../components/pageComponents/SearchProfilesPage/MainSearchProfilesPage';
import UserHeadband from '../components/standaloneComponents/UserHeadband/UserHeadband';

export default function ProfilesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <>
      {isAuthenticated ? (
        <>
          <UserHeadband setIsAuthenticated={setIsAuthenticated} />
          <MainSearchProfilePage />
        </>
      ) : (
        <p>Veuillez vous connecter pour accéder à cette page.</p>
      )}
    </>
  );
}
