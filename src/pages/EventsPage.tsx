import MainEventsPage from '../components/pageComponents/EventsPage/MainEventsPage';

interface EventsPageProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function EventsPage({
  isAuthenticated,
  setIsAuthenticated,
}: EventsPageProps) {
  return (
    <MainEventsPage
      isAuthenticated={isAuthenticated}
      setIsAuthenticated={setIsAuthenticated}
    />
  );
}
