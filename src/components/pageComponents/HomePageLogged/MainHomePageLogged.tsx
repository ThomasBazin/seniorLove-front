import HeadbandV1 from '../../standaloneComponents/Headband/HeadbandV1';
import UserHeadband from '../../standaloneComponents/UserHeadband/UserHeadband';
import EventSection from './EventSection';
import UsersSection from './UsersSection';

export default function MainHomePageLogged() {
  return (
    <main className="w-full min-h-screen flex-grow flex flex-col justify-start items-center bg-backgroundPink pb-8">
      <UserHeadband />
      <UsersSection />
      <HeadbandV1 />
      <EventSection />
    </main>
  );
}
