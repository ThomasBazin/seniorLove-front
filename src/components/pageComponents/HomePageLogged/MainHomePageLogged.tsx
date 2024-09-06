import HeadbandV2 from '../../standaloneComponents/Headband/HeadbandV2';
import UserHeadband from '../../standaloneComponents/UserHeadband/UserHeadband';
import EventSection from './EventSection';
import UsersSection from './UsersSection';

interface MainHomePageLoggedProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MainHomePageLogged({
  setIsAuthenticated,
}: MainHomePageLoggedProps) {
  return (
    <main className="w-full min-h-screen flex-grow flex flex-col justify-start items-center bg-backgroundPink pb-8">
      <UserHeadband setIsAuthenticated={setIsAuthenticated} />
      <UsersSection />
      <HeadbandV2 />
      <EventSection />
    </main>
  );
}
