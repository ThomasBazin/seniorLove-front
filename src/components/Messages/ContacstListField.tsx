/* eslint-disable react/prop-types */
import { useState } from 'react';
import ConversationPreview from './ConversationPreview';

interface ContactInterface {
  selectedContact: (message: object) => void;
  listContacts: [];
  setBadSend: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDisplay: boolean | undefined;
  switchView: () => void;
}

export default function ContactsListField({
  listContacts,
  selectedContact,
  setBadSend,
  toggleDisplay,
  switchView,
}: ContactInterface) {
  const [isSelected, setIsSelected] = useState<boolean>();

  function handleSelected() {
    const setSelect = () => setIsSelected(true);

    setSelect();
  }

  return (
    <div
      className={`max-md:rounded-3xl p-4 bg-white border flex-col ${toggleDisplay ? 'flex' : 'hidden'} gap-y-2 items-center md:w-2/5 md:h-4/6 md:rounded-l-3xl`}
    >
      <p className="italic text-secondaryPink">Messages</p>
      {listContacts.map((contact) => {
        return (
          <ConversationPreview
            key={contact.id}
            contact={contact}
            setBadSend={setBadSend}
            selectedContact={selectedContact}
            setIsSelected={() => handleSelected}
            isSelected={isSelected}
            switchView={switchView}
          />
        );
      })}
    </div>
  );
}
