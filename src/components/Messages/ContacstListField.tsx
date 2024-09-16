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

  function handleSelected(index: number) {
    const newSelected = new Array(isSelected.length).fill(false);
    newSelected[index] = true;
    setIsSelected(newSelected);
  }

  useEffect(() => {
    const set = () => {
      setIsSelected([...Array(listContacts.length).fill(false)]);
      const newDefaultList = [...isSelected];
      newDefaultList[0] = true;
      setIsSelected(newDefaultList);
      handleSelected(0);
    };
    set();
  }, [listContacts]);

  return (
    <div
      className={`overflow-auto max-md:rounded-3xl max-md:w-full p-4 bg-white border flex-col ${toggleDisplay ? 'flex' : 'hidden'} gap-y-2 items-center md:w-2/5 md:h-screen md:rounded-l-3xl`}
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
