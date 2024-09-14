import { useState } from 'react';
import axios from '../../axios';

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

  return (
    <form action="post" className="bg-transparent" id="formMessage">
      {badSend && (
        <p className="text-red-500 text-xs text-center">
          Ce contact n'est plus disponible pour recevoir des messages.
        </p>
      )}
      <input
        type="text"
        name="sendMessage"
        placeholder="Ecrivez un message..."
        className="border-y shadow-inner w-full h-15"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button
        type="button"
        className="min-w-44 bg-buttonGreen hover:bg-secondaryPinkHover rounded-lg text-black font-bold text-lg shadow-md py-1 px-4 block mx-auto my-4"
        onClick={async () => {
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
        }}
      >
        Envoyer
      </button>
    </form>
  );
}
