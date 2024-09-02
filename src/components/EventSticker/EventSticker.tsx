import messageIcon from '../../assets/messages.png';

function EventSticker() {
  return (
    <div className="w-64 h-72 bg-white rounded-xl mx-auto shadow-lg relative">
      <img
        src="/src/assets/grandma-506341_1280.jpg"
        alt="Utilisateur"
        className="h-full object-cover rounded-xl"
      />
      <div className="m-2 w-fit absolute bottom-0 left-1 text-white drop-shadow-2xl text-2xl font-medium">
        Hélèna, 68
      </div>
      <button
        type="button"
        className="p-1 shadow-lg absolute -bottom-4 right-3 bg-white rounded-full overflow-visible"
      >
        <img src={messageIcon} alt="message" className="size-10" />
      </button>
    </div>
  );
}
export default EventSticker;
