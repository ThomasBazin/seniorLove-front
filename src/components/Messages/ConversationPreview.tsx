interface ContactInterface {
  selectedContact: (messages: object) => void;
  contact: {
    id: number;
    name: string;
    picture: string;
    messages: [];
  };
}

export default function ConversationPreview({
  contact,
  selectedContact,
}: ContactInterface) {
  const lastMessage = contact.messages[contact.messages.length - 1];
  const { message }: { message: string } = lastMessage;

  return (
    <button
      type="button"
      className="p-2 rounded-3xl hover:shadow-around w-full"
      onClick={() => selectedContact(contact)}
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
