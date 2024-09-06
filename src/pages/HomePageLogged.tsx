import MainHomePageLogged from '../components/pageComponents/HomePageLogged/MainHomePageLogged';

interface HomePageLoggedProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HomePageLogged({
  setIsAuthenticated,
}: HomePageLoggedProps) {
  return <MainHomePageLogged setIsAuthenticated={setIsAuthenticated} />;
}
