import { useEffect } from 'react';
import MainSearchProfilPage from '../components/pageComponents/SearchProfilPage/MainSearchProfilPage';
import UserHeadband from '../components/standaloneComponents/UserHeadband/UserHeadband';

export default function SearchProfilPage() {
  // Move window position on top of page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  return (
    <>
      <UserHeadband />
      <MainSearchProfilPage />
    </>
  );
}
