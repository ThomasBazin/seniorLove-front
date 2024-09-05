import MainEventsPage from '../components/pageComponents/EventsPage/MainEventsPage';
import Footer from '../components/standaloneComponents/Footer/Footer';
import NavBarV1 from '../components/standaloneComponents/NavBar/NavBar';

export default function EventsPage() {
  return (
    <>
      <NavBarV1 />
      <MainEventsPage />
      <Footer />
    </>
  );
}
