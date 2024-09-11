import ReceivedMessage from './ReceivedMessage';
import SentMessage from './SentMessage';

export default function MessagesListField({listContactMessages}) {
  return (
    <div className="bg-white border rounded-r-3xl flex flex-col w-full">
      <SentMessage />
      <ReceivedMessage />
    </div>
  );
}
