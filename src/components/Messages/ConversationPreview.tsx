import { useState } from 'react';

interface ContactInterface {
  selectedContact: (messages: object) => void;
  contact: {
    id: number;
    name: string;
    picture: string;
    messages: [];
  };
  setBadSend: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  isSelected: boolean | undefined;
  switchView: () => void;
}

export default function ConversationPreview({
  contact,
  selectedContact,
  setBadSend,
  // setIsSelected,
  isSelected,
  switchView,
}: ContactInterface) {
  const lastMessage = contact.messages[contact.messages.length - 1];
  const { message }: { message: string } = lastMessage;

  return (
    <button
      type="button"
      className={`p-2 rounded-3xl hover:shadow-around w-full ${isSelected ? 'shadow-pink' : ''}`}
      onClick={() => {
        selectedContact(contact);
        setBadSend(false);
        // setIsSelected(true);
        switchView();
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
