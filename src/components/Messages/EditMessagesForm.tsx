import { useState } from 'react';
import axios from '../../axios';
import DefaultBtn from '../standaloneComponents/Button/DefaultBtn';

interface EditMessage {
  setBadSend: React.Dispatch<React.SetStateAction<boolean>>;
  badSend: boolean;
  send: (id: any) => void;
  receiverId: number;
}

export default function EditMessagesForm({
  send,
  receiverId,
  badSend,
  setBadSend,
}: EditMessage) {
  const [message, setMessage] = useState('');
  const submitMessage = async () => {
    const inputForm = document.getElementById('formMessage');
    const formData = Object.fromEntries(new FormData(inputForm));
    try {
      await axios.post('/private/messages', {
        message: formData.sendMessage,
        receiver_id: receiverId,
      });
      send(receiverId);
      setMessage('');
    } catch (error) {
      console.log(error);
      if (error.status === 403) {
        setBadSend(true);
        setMessage('');
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents the default action (form submission or new line in a textarea)
      submitMessage();
    }
  };

  return (
    <form
      action="post"
      className="bg-transparent shadow-message"
      id="formMessage"
    >
      {badSend && (
        <p className="text-red-500 text-xs text-center">
          Ce contact n'est plus disponible pour recevoir des messages.
        </p>
      )}
      <input
        type="text"
        name="sendMessage"
        placeholder="Ecrivez un message..."
        className="border-y shadow-inner w-full h-15 px-2"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        onKeyDown={handleKeyPress}
      />
      <DefaultBtn btnText="Envoyer" onClick={submitMessage} />
    </form>
  );
}
