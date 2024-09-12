import { useEffect, useState } from 'react';
import EditMessagesForm from './EditMessagesForm';
import ReceivedMessage from './ReceivedMessage';
import SentMessage from './SentMessage';

interface Message {
  tchatMessages: {
    id: number;
    name: string;
    picture: string;
    messages: OneMessage[];
  };
  send: boolean;
}

interface OneMessage {
  message: {
    id: number;
    message: string;
    sender_id: number;
    receiver_id: number;
  };
  picture: string;
  id: number;
}

export default function MessagesListField({ tchatMessages, send }) {
  const [display, setDisplay] = useState<[]>([]);
  console.log(tchatMessages);
  //const messagesToDisplay = tchatMessages.messages;
  //console.log(messagesToDisplay)

  return (
    <div className="bg-white border rounded-r-3xl flex flex-col w-full">
    
      <SentMessage sentMessage={undefined} />
      <EditMessagesForm send={undefined} />
    </div>
  );
}
