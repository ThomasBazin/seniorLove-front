import HeadbandV2 from '../../standaloneComponents/Headband/HeadbandV2';
import UserHeadband from '../../standaloneComponents/UserHeadband/UserHeadband';
import EventSection from './EventSection';
import UsersSection from './UsersSection';

export default function MainHomePageLogged() {
  return (
    <main className="w-full min-h-screen flex-grow flex flex-col justify-start items-center bg-backgroundPink pb-8">
      <UserHeadband />
      <UsersSection />
      <HeadbandV2 />
      <EventSection />
    </main>
  );
}
