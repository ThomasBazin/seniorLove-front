import { useState } from 'react';
import axios from '../../axios';

export default function EditMessagesForm({ send, receiverId }) {
  const [message, setMessage] = useState('');

  return (
    <form action="post" className="bg-transparent" id="formMessage">
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
          }
        }}
      >
        Envoyer
      </button>
    </form>
  );
}
