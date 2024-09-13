import { useEffect, useState } from 'react';
import ContactsListField from './ContacstListField';
import axios from '../../axios';
import EditMessagesForm from './EditMessagesForm';
import ReceivedMessage from './ReceivedMessage';
import SentMessage from './SentMessage';

export default function MessagesField() {
  const [messagesData, setMessagesData] = useState<[]>([]);
  const [displayMessages, setDisplayMessages] = useState();
  const [sendMessage, setSendMessage] = useState({
    sendStatus: false,
    lastReceiverId: displayMessages?.id,
  });
  // state pour changer les classe css en fonction de la taille d'écran
  const [toggleDisplay, setToggleDisplay] = useState<boolean>();
  // state pour indiquer que l'api renvoi une 403 (user not found  ou blocked)
  const [badSend, setBadSend] = useState<boolean>(false);
  // const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const result = await axios.get('/private/contacts');
        // eslint-disable-next-line no-restricted-syntax
        // console.table(result.data[0]);
        setMessagesData(result.data);

        if (sendMessage.lastReceiverId) {
          setDisplayMessages(
            result.data.find(
              (data: object) => data.id === sendMessage.lastReceiverId
            )
          );
        } else {
          setDisplayMessages(result.data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchMessages();
    // passe le display a true pour l'affichage par default des classes css
    setToggleDisplay(true);
  }, [sendMessage]);

  const handleUpdateMessages = (newMessages: object) => {
    setDisplayMessages(newMessages);
  };

  const handleSendMessages = (id) => {
    setSendMessage({ sendStatus: !sendMessage.sendStatus, lastReceiverId: id });
  };

  const handleToggleMessageView = () => {
    // changer l'état de toggle pur indiquer aux classes css de changer l'affichage
    setToggleDisplay(false);
  };

  const idSent = Number(displayMessages?.id);
  return (
    <>
      {!toggleDisplay && (
        <button
          type="button"
          className="mt-3 inline-flex self-start items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10"
          onClick={() => setToggleDisplay(true)}
        >
          Retour
        </button>
      )}
      <div className="flex mt-6 h-screen">
        <ContactsListField
          listContacts={messagesData}
          selectedContact={handleUpdateMessages}
          setBadSend={setBadSend}
          toggleDisplay={toggleDisplay}
          switchView={handleToggleMessageView}
        />

        <div
          className={`${toggleDisplay ? 'hidden' : ''} md:block md:h-4/6 overflow-auto`}
        >
          <div className="bg-white border rounded-r-3xl flex flex-col justify-between w-full md:h-full">
            <div className="w-full flex flex-col">
              {displayMessages?.messages.map((message) => {
                // console.log(displayMessages);
                if (displayMessages.id === message.sender_id) {
                  return (
                    <ReceivedMessage
                      receiveMessage={message.message}
                      userId={displayMessages.id}
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
            </div>
            <EditMessagesForm
              badSend={badSend}
              setBadSend={setBadSend}
              send={handleSendMessages}
              receiverId={idSent}
            />
          </div>
        </div>
      </div>
    </>
  );
}
