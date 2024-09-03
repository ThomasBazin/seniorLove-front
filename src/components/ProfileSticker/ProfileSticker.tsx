import messageIcon from '/icon/messages.png';

function ProfileSticker() {
  return (
    <div className="w-64 h-72 m-7 rounded-xl mx-auto shadow-lg relative">
      <img
        src="/src/assets/grandma-506341_1280.jpg"
        alt="Utilisateur"
        className="h-full object-cover rounded-xl"
      />
      <div className="m-2 w-fit absolute bottom-0 left-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-2xl font-medium">
        Hélèna, 68
      </div>
      <button
        type="button"
        className="p-1 shadow-lg absolute -bottom-4 right-3 bg-white rounded-full"
      >
        <img src={messageIcon} alt="message" className="size-10" />
      </button>
    </div>
  );
}
export default ProfileSticker;
