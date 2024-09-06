import MainConnectionPage from '../components/pageComponents/ConnectionPage/MainConnectionPage';

interface ConnectionPageProps {
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function ConnectionPage({ setUserToken }: ConnectionPageProps) {
  return <MainConnectionPage setUserToken={setUserToken} />;
}
