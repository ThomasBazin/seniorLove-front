import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import axios from '../../axios';
import ContactsListField from './ContacstListField';
import EditMessagesForm from './EditMessagesForm';
import ReceivedMessage from './ReceivedMessage';
import SentMessage from './SentMessage';
import Loader from '../standaloneComponents/Loader/Loader';
import Error500Page from '../../pages/Error500Page';
import { removeTokenFromLocalStorage } from '../../localStorage/localStorage';
import DefaultBtn from '../standaloneComponents/Button/DefaultBtn';
import { IMessage } from '../../@types/IMessage';

export default function MessagesField() {
  // STATE 1 : données de tous les messages
  const [messagesData, setMessagesData] = useState<[]>([]);
  // STATE 2 : données du message a afficher

  const [displayMessages, setDisplayMessages] = useState<IMessage | null>(null);
  // STATE 3 : status de l'envoi du message et id destinataire
  const [sendMessage, setSendMessage] = useState({
    sendStatus: false,
    lastReceiverId: displayMessages?.id,
  });
  // STATE 4 : state pour changer les classe css en fonction de la taille d'écran
  const [toggleDisplay, setToggleDisplay] = useState<boolean>();
  // STATE 5 : state pour indiquer que l'api renvoi une 403 (user not found  ou blocked)
  const [badSend, setBadSend] = useState<boolean>(false);

  // STATE 6 : loading
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // STATE 7 : error server
  const [serverError, setServerError] = useState(false);

  // Import of navigate to force redirection when forced logged out
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const result = await axios.get('/private/contacts');
        setMessagesData(result.data);

        if (sendMessage.lastReceiverId) {
          setDisplayMessages(
            result.data.find(
              (data: { id: number }) => data.id === sendMessage.lastReceiverId
            )
          );
        } else {
          setDisplayMessages(result.data[0]);
        }
      } catch (err) {
        console.error(err);
        if (
          err instanceof AxiosError &&
          (err.response?.data.blocked || err.response?.status === 401)
        ) {
          removeTokenFromLocalStorage();
          navigate('/loggedout');
        } else {
          setServerError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchMessages();
    // passe le display a true pour l'affichage par default des classes css
    if (window.innerWidth >= 768) {
      setToggleDisplay(true);
    }
  }, [navigate, sendMessage]);

  const handleUpdateMessages = (newMessages: IMessage) => {
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

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [displayMessages]);

  if (serverError) {
    return <Error500Page />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="flex flex-col w-full items-center justify-center bg-backgroundPink pb-8 flex-1">
      <div className="w-full lg:w-5/6 xl:w-4/6 px-3">
        {!toggleDisplay && (
          <DefaultBtn
            btnText="Revenir aux contacts"
            btnMessageMobile
            onClick={() => setToggleDisplay(true)}
          />
        )}
        {messagesData.length === 0 ? (
          <p className="text-center font-semibold pt-6">
            Vous n&apos;avez pas de messages !
          </p>
        ) : (
          <div className="md:flex mt-6 md:w-full">
            <ContactsListField
              listContacts={messagesData}
              selectedContact={handleUpdateMessages}
              setBadSend={setBadSend}
              toggleDisplay={toggleDisplay}
              switchView={handleToggleMessageView}
            />
            <div
              className={`${toggleDisplay ? 'hidden' : ''} md:block w-full `}
            >
              <div className="bg-white border flex flex-col justify-between w-full h-[calc(100vh-300px)] md:h-[calc(100vh-400px)]">
                <div
                  ref={messagesContainerRef}
                  className="w-full flex flex-col overflow-y-scroll md:overflow-y-auto"
                >
                  {displayMessages?.messages.map((message) => {
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
        )}
      </div>
    </main>
  );
}
