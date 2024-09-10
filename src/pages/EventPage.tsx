import MainEventPage from '../components/pageComponents/EventPage/MainEventPage';

interface EventPageProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EventPage({
  isAuthenticated,
  setIsAuthenticated,
}: EventPageProps) {
  return (
    <MainEventPage
      isAuthenticated={isAuthenticated}
      setIsAuthenticated={setIsAuthenticated}
    />
  );
}
