import MainConnectionPage from '../components/pageComponents/ConnectionPage/MainConnectionPage';

// interface ConnectionPageProps {
//   setToken: React.Dispatch<React.SetStateAction<string | null>>;
// }

export default function ConnectionPage({
  setIsAuthenticated,
}: {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return <MainConnectionPage setIsAuthenticated={setIsAuthenticated} />;
}
