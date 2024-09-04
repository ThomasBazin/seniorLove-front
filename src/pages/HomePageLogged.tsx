import MainHomePageLogged from '../components/pageComponents/HomePageLogged/MainHomePageLogged';
import Footer from '../components/standaloneComponents/Footer/Footer';
import NavBarLogged from '../components/standaloneComponents/NavBar/NavBarLogged';

export default function HomePageLogged() {
  return (
    <>
      <NavBarLogged />
      <MainHomePageLogged />
      <Footer />
    </>
  );
}
