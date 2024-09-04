export default function EventView() {
  const interests = [
    'Aventure et découverte',
    'Nature et paysages',
    'Rencontres sociales',
    'Activities en groupe',
  ];
  return (
    <>
      <div className="w-full bg-primaryPink flex md:mt-24 ">
        <div className="flex-grow flex flex-col justify-around items-center p-8 mb-4 md:items-start md:gap-6">
          <div className="photo_container w-fit h-72 bg-white rounded-xl shadow-around relative mb-4 md:w-full md: md:h-72 md:rounded-3xl">
            <img
              src="/img/events/montgolfiere.webp"
              alt="random user"
              className="h-full object-cover object-center rounded-xl md:w-full "
            />
          </div>

          <div className="flex flex-col justify-between md:w-full md:relative">
            <div className="name_container p-2 bg-white rounded-xl shadow-lg w-full bottom-0 left-1/4 text-primaryText text-xl text-center font-medium mb-4 md:w-1/2">
              <p>Les Montgolfiades de Saumur</p>
            </div>{' '}
            <div className="hobbies_container w-80 h-fit bg-white rounded-xl shadow-lg relative mb-4 md:absolute md:top-0 md:left-3/4 md:w-fit md:px-4">
              <p className="date_paragraph text-primaryText w-auto m-2 italic py-2">
                Date : 28/08/2025
              </p>
              <p className="place_paragraph text-primaryText w-auto m-2 italic py-2">
                Lieu: Saumur, 49400 France
              </p>
              <p className="hobbies_paragraph text-primaryText w-auto m-2 italic py-2">
                Centres d'intérêt :{' '}
                <ul className="m-2">
                  {interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                  ))}
                </ul>
              </p>
            </div>
            <div className="description_container w-80 h-fit bg-white rounded-xl shadow-lg mb-4 md:w-3/5 ">
              <p className="text-primaryText w-auto m-4 italic py-2">
                {' '}
                Rejoignez-nous pour un événement magique et inoubliable lors des
                Montgolfiades de Saumur ! Organisé par SeniorLove, le site dédié
                aux rencontres et aux activités pour les seniors, cet événement
                vous invite à admirer le spectacle époustouflant de dizaines de
                montgolfières colorées s'envolant dans le ciel au-dessus de la
                magnifique vallée de la Loire. Que vous soyez passionné de
                montgolfières ou simplement à la recherche d'une expérience
                unique, cet événement est fait pour vous. SeniorLove est fier de
                vous offrir cette opportunité de vivre un moment de poésie et
                d'évasion, tout en créant des souvenirs inoubliables et des
                connexions significatives. Rendez-vous aux Montgolfiades de
                Saumur pour une aventure aérienne exceptionnelle !
              </p>
            </div>
            {/* <a
            href="#"
            className="bg-buttonGreen text-primaryText font-bold py-2 px-3 lg:block rounded-lg shadow-lg sm:text-base md:text-lg lg:text-xs xl:text-lg italic"
          >
            Je participe
          </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
