/* eslint-disable react/prop-types */
import ConversationPreview from './ConversationPreview';

interface ContactInterface {
  selectedContact: (message: object) => void;
  listContacts: [];
}

export default function ContactsListField({
  listContacts,
  selectedContact,
}: ContactInterface) {
  return (
    <div className="p-4 bg-white border rounded-l-3xl flex-col flex gap-y-2 items-center w-2/5">
      <p className="italic text-secondaryPink">Message</p>
      {listContacts.map((contact) => {
        return (
          <ConversationPreview
            key={contact.id}
            contact={contact}
            selectedContact={selectedContact}
          />
        );
      })}
    </div>
  );
}
