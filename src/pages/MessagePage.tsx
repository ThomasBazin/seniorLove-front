import MessagesField from '../components/Messages/MessagesField';

export default function MessagePage() {
  return (
    <main className="w-full min-h-screen flex-grow flex flex-col items-center bg-backgroundPink pb-8">
      <MessagesField />
    </main>
  );
}
