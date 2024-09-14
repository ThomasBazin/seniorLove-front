import { useEffect, useState } from 'react';
import ContactsListField from './ContacstListField';
import axios from '../../axios';
import EditMessagesForm from './EditMessagesForm';
import ReceivedMessage from './ReceivedMessage';
import SentMessage from './SentMessage';

export default function MessagesField() {
  // données de tous les messages
  const [messagesData, setMessagesData] = useState<[]>([]);
  // données du message a afficher
  const [displayMessages, setDisplayMessages] = useState();
  // status de l'envoi du message et id destinataire
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

        // console.table(isSelected);

        if (sendMessage.lastReceiverId) {
          setDisplayMessages(
            result.data.find(
              (data: object) => data.id === sendMessage.lastReceiverId
            )
            // TODO: modifié isSelected a true sur l'index correspondant a cette entrée
          );
        } else {
          setDisplayMessages(result.data[0]);
          // TODO: modifié isSelected a true sur l'index correspondant a cette entrée
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchMessages();
    // passe le display a true pour l'affichage par default des classes css
    setToggleDisplay(true);
  }, [sendMessage]);

  const handleUpdateMessages = (newMessages) => {
    setDisplayMessages(newMessages);
  };

  const handleSendMessages = (id: number) => {
    setSendMessage({ sendStatus: !sendMessage.sendStatus, lastReceiverId: id });
  };

  const handleToggleMessageView = () => {
    // changer l'état de toggle pour indiquer aux classes css de changer l'affichage
    setToggleDisplay(false);
  };

  const idSent = Number(displayMessages?.id);
  return (
    <>
      {!toggleDisplay && (
        <button
          type="button"
          className="bg-secondaryPink hover:bg-secondaryPinkHover rounded-lg text-white font-bold shadow-md py-1 block mx-auto text-lg px-4 min-w-44 my-4 "
          onClick={() => setToggleDisplay(true)}
        >
          Revenir aux contacts
        </button>
      )}

      {/* // TODO: insérer une condition si pas de message */}
      <div className="md:flex mt-6 h-screen max-md:flex-col w-2/6">
        <ContactsListField
          listContacts={messagesData}
          selectedContact={handleUpdateMessages}
          setBadSend={setBadSend}
          toggleDisplay={toggleDisplay}
          switchView={handleToggleMessageView}
        />

        <div className={`${toggleDisplay ? 'hidden' : ''} md:block md:h-4/6`}>
          <div className="bg-white border flex flex-col justify-between w-full md:rounded-r-3xl md:h-full max-md:rounded-3xl max-md:self-center">
            <div className="w-full flex flex-col overflow-auto">
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
