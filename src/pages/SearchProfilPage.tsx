import MainSearchProfilPage from '../components/pageComponents/SearchProfilPage/MainSearchProfilPage';
import Footer from '../components/standaloneComponents/Footer/Footer';
import NavBarLogged from '../components/standaloneComponents/NavBar/NavBarLogged';
import UserHeadband from '../components/standaloneComponents/UserHeadband/UserHeadband';

export default function SearchProfilPage() {
  return (
    <>
      <NavBarLogged />
      <UserHeadband />
      <MainSearchProfilPage />
      <Footer />
    </>
  );
}
