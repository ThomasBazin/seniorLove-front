function SentMessage() {
  return (
    <div className="m-4 flex gap-2 justify-center w-full mx-auto ">
      <div className="p-4 border rounded-3xl shadow-around">
        <p className="text-sm text-primaryText">
          Bonjour Jean,
          <br />
          <br />
          Merci pour votre message ! Le jazz est effectivement une grande
          passion pour moi, et l'événement ce week-end semble très intéressant.
          J'aimerais beaucoup y assister. Peut-être pourrions-nous nous y
          retrouver ? Ce serait agréable de rencontrer quelqu'un avec qui
          partager cette expérience.
          <br />
          <br />
          Au plaisir de vous lire, <br />
          Helena
        </p>
      </div>
      <img
        src="/src/assets/grandma-506341_1280.jpg"
        alt="Moi"
        className="aspect-square rounded-full w-20 h-20 object-cover shadow-xl"
      />
    </div>
  );
}

export default SentMessage;
