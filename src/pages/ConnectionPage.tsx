import MainConnectionPage from '../components/pageComponents/ConnectionPage/MainConnectionPage';
import Footer from '../components/standaloneComponents/Footer/Footer';
import NavBarV1 from '../components/standaloneComponents/NavBar/NavBar';

// interface ConnectionPageProps {
//   setToken: React.Dispatch<React.SetStateAction<string | null>>;
// }

export default function ConnectionPage({
  setIsAuthenticated,
}: {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <NavBarV1 />
      <MainConnectionPage setIsAuthenticated={setIsAuthenticated} />
      <Footer />
    </>
  );
}
