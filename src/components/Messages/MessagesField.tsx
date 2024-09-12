import { useEffect, useState } from 'react';
import ContactsListField from './ContacstListField';
import axios from '../../axios';
import EditMessagesForm from './EditMessagesForm';
import ReceivedMessage from './ReceivedMessage';
import SentMessage from './SentMessage';

export default function MessagesField() {
  const [messagesData, setMessagesData] = useState<[]>([]);
  const [displayMessages, setDisplayMessages] = useState();
  const [sendMessage, setSendMessage] = useState<boolean>(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const result = await axios.get('/private/contacts');
        // eslint-disable-next-line no-restricted-syntax
        // console.table(result.data[0]);
        setMessagesData(result.data);
        setDisplayMessages(result.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, [sendMessage]);

  const handleUpdateMessages = (newMessages: object) => {
    setDisplayMessages(newMessages);
  };

  const handleSendMessages = () => {
    setSendMessage(!sendMessage);
  };

  const idSent = Number(displayMessages?.id);
  return (
    <div
      className="flex w-5/6
 mt-6"
    >
      <ContactsListField
        listContacts={messagesData}
        selectedContact={handleUpdateMessages}
      />
      <div className="bg-white border rounded-r-3xl flex flex-col w-full">
        {displayMessages?.messages.map((message) => {
          // console.log(displayMessages);

          if (displayMessages.id === message.sender_id) {
            return (
              <ReceivedMessage
                receiveMessage={message.message}
                key={message.id}
                picture={displayMessages.picture}
              />
            );
          }
          return (
            <SentMessage
              sentMessage={message.message}
              key={message.id}
              myPicture={message.sender.picture}
            />
          );
        })}
        <EditMessagesForm send={handleSendMessages} receiverId={idSent} />
      </div>
    </div>
  );
}
