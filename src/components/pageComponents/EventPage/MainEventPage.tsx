import EventView from './EventView/EventView';
import UserHeadband from '../../standaloneComponents/UserHeadband/UserHeadband';

interface MainEventPageProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function MainEventPage({
  isAuthenticated,
  setIsAuthenticated,
}: MainEventPageProps) {
  return (
    <>
      {isAuthenticated && (
        <UserHeadband setIsAuthenticated={setIsAuthenticated} />
      )}
      <EventView isAuthenticated={isAuthenticated} />
    </>
  );
}
