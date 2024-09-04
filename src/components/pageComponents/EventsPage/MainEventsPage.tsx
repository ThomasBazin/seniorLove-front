import EventSticker from '../../standaloneComponents/EventSticker/EventSticker';

export default function MainEventsPage() {
  const events = [
    {
      name: 'Cours de cuisine',
      location: 'Paris',
      photo: '/img/events/cuisine.webp',
      alt: 'Cours de cuisine à Paris',
    },
    {
      name: 'Apéro poterie',
      location: 'Lyon',
      photo: '/img/events/poterie.webp',
      alt: 'Apéro poterie à Lyon',
    },
    {
      name: 'Atelier mixologie',
      location: 'Marseille',
      photo: '/img/events/mixologie.webp',
      alt: 'Atelier mixologie à Marseille',
    },
    {
      name: 'Dégustation de vins',
      location: 'Bordeaux',
      photo: '/img/events/degustation.webp',
      alt: 'Dégustation de vins à Bordeaux',
    },
    {
      name: 'Speed dating',
      location: 'Nice',
      photo: '/img/events/dating.webp',
      alt: 'Speed dating à Nice',
    },
    {
      name: 'Atelier jardinage',
      location: 'Toulouse',
      photo: '/img/events/jardinage.webp',
      alt: 'Atelier jardinage à Toulouse',
    },
    {
      name: 'Cours de photographie',
      location: 'Strasbourg',
      photo: '/img/events/photographie.webp',
      alt: 'Cours de photographie à Strasbourg',
    },
    {
      name: 'Soirée jazz',
      location: 'Nantes',
      photo: '/img/events/jazz.webp',
      alt: 'Soirée jazz à Nantes',
    },
    {
      name: 'Club de lecture virtuel',
      location: 'Lille',
      photo: '/img/events/lecture.webp',
      alt: 'Club de lecture virtuel à Lille',
    },
    {
      name: 'Cours de guitare',
      location: 'Avignon',
      photo: '/img/events/guitare.webp',
      alt: 'Cours de guitare à Avignon',
    },
    {
      name: 'Soirée méditation',
      location: 'Rennes',
      photo: '/img/events/meditation.webp',
      alt: 'Soirée méditation à Rennes',
    },
    {
      name: 'Montgolfière',
      location: 'Saumur',
      photo: '/img/events/montgolfiere.webp',
      alt: 'Montgolfière à Saumur',
    },
  ];
  return (
    <main className="w-full flex-grow flex flex-col justify-around items-center md:mt-24 bg-primaryGrey pb-8">
      <p className="text-center font-semibold text-3xl my-4 text-primaryText">
        Bienvenue sur notre page dédiée aux{' '}
        <span className="text-secondaryPink">événements</span> à venir !
      </p>
      <div className="flex flex-wrap gap-10 justify-center content-around w-10/12">
        {events.map((event) => (
          <EventSticker event={event} key={event.name} />
        ))}
      </div>
    </main>
  );
}
