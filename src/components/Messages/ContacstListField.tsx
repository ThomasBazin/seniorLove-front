import { useEffect, useState } from 'react';
import ConversationPreview from './ConversationPreview';
import { IContacts } from '../../@types/IContacts';

interface ContactInterface {
  selectedContact: (message: IContacts) => void;
  listContacts: IContacts[];
  setBadSend: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDisplay: boolean;
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

  const handleSelect = (index: number) => {
    const newSelected = new Array(isSelected.length).fill(false);
    newSelected[index] = true;
    setIsSelected(newSelected);
  };

  useEffect(() => {
    const setFirstMessageSelected = () => {
      const defaultSelected = [...Array(listContacts.length).fill(false)];
      defaultSelected[0] = true;
      setIsSelected(defaultSelected);
    };
    setFirstMessageSelected();
  }, [listContacts.length]);

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
            onSelect={handleSelect}
            index={i}
            isSelected={isSelected[i]}
            switchView={switchView}
          />
        );
      })}
    </div>
  );
}
