import MessagesField from '../components/Messages/MessagesField';
import UserHeadband from '../components/standaloneComponents/UserHeadband/UserHeadband';

interface MessagesPageProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MessagePage({ setIsAuthenticated }: MessagesPageProps) {
  return (
    <>
      <div>
        <UserHeadband setIsAuthenticated={setIsAuthenticated} />
      </div>
      <main className="w-full min-h-screen flex-grow flex flex-col items-center bg-backgroundPink pb-8">
        <MessagesField />
      </main>
    </>
  );
}
