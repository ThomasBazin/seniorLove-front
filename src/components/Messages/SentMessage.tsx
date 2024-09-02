function SentMessage() {
  return (
    <div className="flex gap-2 justify-center w-full mx-auto ">
      <img
        src="/src/assets/pexels-olly-3831645.jpg"
        alt="Moi"
        className="aspect-square rounded-full w-20 h-20 object-cover shadow-lg"
      />
      <div className="p-4 rounded-xl shadow-lg">
        <p className="text-sm">
          Bonjour Helena,
          <br />
          <br />
          Je m'appelle Jean. J'ai vu sur SeniorLove que vous aimez le jazz, tout
          comme moi ! J'ai remarqué qu'il y a un événement de jazz organisé ce
          week-end. Je serais ravi de savoir si vous seriez intéressée à y
          participer. Ce serait une belle occasion de partager notre passion
          pour cette musique. <br />
          <br />
          Bien cordialement, <br />
          Jean
        </p>
      </div>
    </div>
  );
}

export default SentMessage;
