import MainEventPage from '../components/pageComponents/EventPage/MainEventPage';
import Footer from '../components/standaloneComponents/Footer/Footer';
import NavBarV1 from '../components/standaloneComponents/NavBar/NavBar';

export default function EventPage() {
  return (
    <>
      <NavBarV1 />
      <MainEventPage />
      <Footer />
    </>
  );
}
