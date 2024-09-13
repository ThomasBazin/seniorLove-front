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
    <div className="rounded-l-3xl p-4 bg-white border flex-col flex gap-y-2 items-center md:w-2/5 md:h-4/6">
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
