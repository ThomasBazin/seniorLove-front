import { useEffect } from 'react';
import MainEventPage from '../components/pageComponents/EventPage/MainEventPage';

interface EventPageProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EventPage({
  isAuthenticated,
  setIsAuthenticated,
}: EventPageProps) {
  // Move window position on top of page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  return (
    <MainEventPage
      isAuthenticated={isAuthenticated}
      setIsAuthenticated={setIsAuthenticated}
    />
  );
}
