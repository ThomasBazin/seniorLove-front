/* eslint-disable react/prop-types */
// import { useState } from 'react';
import { useEffect, useState } from 'react';
import ConversationPreview from './ConversationPreview';
import { IMessage } from '../../@types/IMessage';

interface ContactInterface {
  selectedContact: (message: IMessage) => void;
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
  const [isSelected, setIsSelected] = useState<boolean[]>([]);

  useEffect(() => {
    const set = () => {
      setIsSelected([...Array(listContacts.length).fill(false)]);
      const newDefaultList = [...isSelected];
      newDefaultList[0] = true;
      setIsSelected(newDefaultList);
    };
    set();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listContacts.length]);

  function handleSelected(index: number) {
    const newSelected = new Array(isSelected.length).fill(false);

    newSelected[index] = true;

    setIsSelected(newSelected);
  }

  return (
    <div
      className={`overflow-y-scroll md:overflow-y-auto p-4 bg-white border flex-col ${toggleDisplay ? 'flex' : 'hidden'} gap-y-2 items-center md:w-3/5 h-[calc(100vh-300px)] md:h-[calc(100vh-400px)]`}
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
