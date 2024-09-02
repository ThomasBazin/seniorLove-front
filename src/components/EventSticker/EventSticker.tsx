function EventSticker() {
  return (
    <div className="w-64 h-72 bg-white rounded-xl mx-auto shadow-lg relative">
      <div className="m-2 w-fit absolute top-0 left-1 text-white drop-shadow-2xl text-2xl font-medium">
        Paris
      </div>
      <img
        src="/src/assets/cours-cuisine.jpg"
        alt="Utilisateur"
        className="h-full object-cover rounded-xl"
      />
      <div className="m-2 w-fit absolute bottom-0 left-1 text-white drop-shadow-2xl text-2xl font-medium">
        Cours de cuisine
      </div>
    </div>
  );
}
export default EventSticker;
