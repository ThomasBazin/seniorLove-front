/* eslint-disable react/prop-types */
// import { useState } from 'react';
import { useEffect, useState } from 'react';
import ConversationPreview from './ConversationPreview';

interface ContactInterface {
  selectedContact: (message: object) => void;
  listContacts: [];
  setBadSend: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDisplay: boolean | undefined;
  switchView: () => void;
  isSelected: boolean[];
  onSelect: () => (index: number) => void;
}

export default function ContactsListField({
  listContacts,
  selectedContact,
  setBadSend,
  toggleDisplay,
  switchView,
}: ContactInterface) {
  const [isSelected, setIsSelected] = useState<boolean[]>([]);

  useEffect(() => {
    const set = () => {
      setIsSelected([...Array(listContacts.length).fill(false)]);
      const newDefaultList = [...isSelected];
      newDefaultList[0] = true;
      setIsSelected(newDefaultList);
    };
    set();
  }, [listContacts.length]);

  function handleSelected(index: number) {
    // TODO: mettre un nouveau tableau avec une valeur true a l'index passé en paramètre
    const newSelected = new Array(isSelected.length).fill(false);

    newSelected[index] = true;

    setIsSelected(newSelected);
  }

  return (
    <div
      className={`max-md:rounded-3xl p-4 bg-white border flex-col ${toggleDisplay ? 'flex' : 'hidden'} gap-y-2 items-center md:w-2/5 md:h-4/6 md:rounded-l-3xl`}
    >
      <p className="italic text-secondaryPink">Messages</p>
      {listContacts.map((contact, i) => {
        return (
          <ConversationPreview
            key={contact.id}
            contact={contact}
            setBadSend={setBadSend}
            selectedContact={selectedContact}
            onSelect={() => handleSelected(i)}
            isSelected={isSelected[i]}
            switchView={switchView}
          />
        );
      })}
    </div>
  );
}
