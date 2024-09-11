export default function ConversationPreview({ contact }: object) {
  const last = contact.messages.pop();
  const lastMessage = last.message;
  console.log(lastMessage);
  const lastMessageCut = `${lastMessage.slice(0, 50)}...`;

  return (
    <button
      type="button"
      className="p-2 rounded-3xl hover:shadow-around w-full"
    >
      <div className="flex justify-around">
        <img
          src={contact.picture}
          alt="Expediteur"
          className="aspect-square rounded-full size-20 object-cover shadow-lg"
        />
        <div>
          <h2 className="mb-1.5 text-sm text-left font-medium text-secondaryPink">
            {contact.name}
          </h2>
          <p
            className=" font-semibold
 text-xs text-primaryText block"
          >
            {lastMessageCut}
          </p>
        </div>
      </div>
    </button>
  );
}
