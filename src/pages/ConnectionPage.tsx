import MainConnectionPage from '../components/pageComponents/ConnectionPage/MainConnectionPage';

interface ConnectionPageProps {
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConnectionPage({
  setUserToken,
  setIsAuthenticated,
}: ConnectionPageProps) {
  return (
    <MainConnectionPage
      setIsAuthenticated={setIsAuthenticated}
      setUserToken={setUserToken}
    />
  );
}
