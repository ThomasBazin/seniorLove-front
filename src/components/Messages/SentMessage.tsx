function SentMessage({ sentMessage , myPicture}) {
  return (
    <div className="m-4 flex gap-2 justify-end w-2/3 ml-2 self-end">
      <div className="p-4 bg-white border rounded-3xl shadow-around">
        <p className="text-sm text-primaryText">{sentMessage}</p>
      </div>
      <img
        src={myPicture}
        alt="Moi"
        className="aspect-square rounded-full w-20 h-20 object-cover shadow-xl"
      />
    </div>
  );
}

export default SentMessage;
