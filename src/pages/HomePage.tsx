import Footer from '../components/standaloneComponents/Footer/Footer';
import Main from '../components/pageComponents/HomePage/Main';
import NavBarV1 from '../components/standaloneComponents/NavBar/NavBar';

export default function HomePage() {
  return (
    <>
      <NavBarV1 />
      <Main />
      <Footer />
      {/* <MobileFooterMenuV1 /> */}
    </>
  );
}
