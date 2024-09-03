function ConversationPreview() {
  return (
    <div className="flex">
      <img
        src="/src/assets/pexels-olly-3831645.jpg"
        alt="Expediteur"
        className="aspect-square rounded-full w-20 h-20 object-cover shadow-xl"
      />
      <div>
        <h2 className="text-sm font-bold text-secondaryPink">Helena</h2>
        <p className="text-sm text-primaryText">
          J'ai également passé une très belle...
        </p>
      </div>
    </div>
  );
}

export default ConversationPreview;
