import { useEffect } from 'react';

import MainEventsPage from '../components/pageComponents/EventsPage/MainEventsPage';

interface EventsPageProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function EventsPage({
  isAuthenticated,
  setIsAuthenticated,
}: EventsPageProps) {
  // Move window position on top of page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  return (
    <MainEventsPage
      isAuthenticated={isAuthenticated}
      setIsAuthenticated={setIsAuthenticated}
    />
  );
}
