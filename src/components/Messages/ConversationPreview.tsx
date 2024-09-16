import { IContacts } from '../../@types/IContacts';

interface ContactInterface {
  selectedContact: (newMessages: IContacts) => void;
  contact: IContacts;
  setBadSend: React.Dispatch<React.SetStateAction<boolean>>;
  onSelect: () => void;
  isSelected: boolean;
  switchView: () => void;
}

export default function ConversationPreview({
  contact,
  selectedContact,
  setBadSend,
  onSelect,
  isSelected,
  switchView,
}: ContactInterface) {
  const lastMessage = contact.messages[contact.messages.length - 1];
  const { message }: { message: string } = lastMessage;

  return (
    <button
      type="button"
      className={`p-2 rounded-3xl hover:shadow-around ${isSelected ? 'shadow-pink' : ''} w-full`}
      onClick={() => {
        selectedContact(contact);
        setBadSend(false);
        onSelect();
        if (window.innerWidth <= 768) {
          switchView();
        }
      }}
    >
      <div className="flex justify-start">
        <img
          src={contact.picture}
          alt="Expediteur"
          className="aspect-square rounded-full size-20 object-cover shadow-lg"
        />
        <div>
          <h2 className="mb-1.5 text-sm p-2 text-left font-medium text-secondaryPink">
            {contact.name}
          </h2>
          <p
            className="p-2 font-semibold
 text-xs text-primaryText block"
          >
            {`${message.substring(0, 50)}...`}
          </p>
        </div>
      </div>
    </button>
  );
}
