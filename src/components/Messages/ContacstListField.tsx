/* eslint-disable react/prop-types */
import ConversationPreview from './ConversationPreview';

export default function ContactsListField({ listContacts }: any) {
  return (
    <div className="p-4 bg-white border rounded-l-3xl flex-col flex gap-y-2 items-center w-2/5">
      <p className="italic text-secondaryPink">Message</p>
      {listContacts.map((contact: object) => {
        return <ConversationPreview key={contact.id} contact={contact} />;
      })}
    </div>
  );
}
