import { useEffect, useState } from 'react';
import ContactsListField from './ContacstListField';
import MessagesListField from './MessagesListField';
import axios from '../../axios';

export default function MessagesField() {
  const [messages, setMessages] = useState<[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const result = await axios.get('/private/contacts');
        // eslint-disable-next-line no-restricted-syntax
        // console.table(result.data);
        setMessages(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div
      className="flex w-5/6
 mt-6"
    >
      <ContactsListField listContacts={messages} />
      <MessagesListField listContactMessages={messages} />
    </div>
  );
}
