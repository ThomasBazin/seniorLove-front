import { useEffect, useState } from 'react';
import axios from '../../../axios';
import { IEvent } from '../../../@types/IEvent';
import EventSticker from '../../standaloneComponents/EventSticker/EventSticker';
import DefaultBtn from '../../standaloneComponents/Button/DefaultBtn';

export default function EventSection() {
  // const events = [
  //   {
  //     name: 'Cours de cuisine',
  //     location: 'Paris',
  //     photo: '/img/events/cuisine.webp',
  //     alt: 'Cours de cuisine à Paris',
  //   },
  //   {
  //     name: 'Apéro poterie',
  //     location: 'Lyon',
  //     photo: '/img/events/poterie.webp',
  //     alt: 'Apéro poterie à Lyon',
  //   },
  //   {
  //     name: 'Atelier mixologie',
  //     location: 'Marseille',
  //     photo: '/img/events/mixologie.webp',
  //     alt: 'Atelier mixologie à Marseille',
  //   },
  //   {
  //     name: 'Dégustation de vins',
  //     location: 'Bordeaux',
  //     photo: '/img/events/degustation.webp',
  //     alt: 'Dégustation de vins à Bordeaux',
  //   },
  //   {
  //     name: 'Speed dating',
  //     location: 'Nice',
  //     photo: '/img/events/dating.webp',
  //     alt: 'Speed dating à Nice',
  //   },
  //   {
  //     name: 'Atelier jardinage',
  //     location: 'Toulouse',
  //     photo: '/img/events/jardinage.webp',
  //     alt: 'Atelier jardinage à Toulouse',
  //   },
  //   {
  //     name: 'Cours de photographie',
  //     location: 'Strasbourg',
  //     photo: '/img/events/photographie.webp',
  //     alt: 'Cours de photographie à Strasbourg',
  //   },
  //   {
  //     name: 'Soirée jazz',
  //     location: 'Nantes',
  //     photo: '/img/events/jazz.webp',
  //     alt: 'Soirée jazz à Nantes',
  //   },
  //   {
  //     name: 'Club de lecture virtuel',
  //     location: 'Lille',
  //     photo: '/img/events/lecture.webp',
  //     alt: 'Club de lecture virtuel à Lille',
  //   },
  //   {
  //     name: 'Cours de guitare',
  //     location: 'Avignon',
  //     photo: '/img/events/guitare.webp',
  //     alt: 'Cours de guitare à Avignon',
  //   },
  //   {
  //     name: 'Soirée méditation',
  //     location: 'Rennes',
  //     photo: '/img/events/meditation.webp',
  //     alt: 'Soirée méditation à Rennes',
  //   },
  //   {
  //     name: 'Montgolfière',
  //     location: 'Saumur',
  //     photo: '/img/events/montgolfiere.webp',
  //     alt: 'Montgolfière à Saumur',
  //   },
  // ];
  const [numEvents, setnumEvents] = useState(3);

  useEffect(() => {
    const updatenumEvents = () => {
      if (window.innerWidth >= 1280) {
        setnumEvents(8);
      } else if (window.innerWidth >= 1024) {
        setnumEvents(6);
      } else if (window.innerWidth >= 640) {
        setnumEvents(4);
      } else {
        setnumEvents(3);
      }
    };

    updatenumEvents(); // Set initial value
    window.addEventListener('resize', updatenumEvents); // Update on resize

    return () => window.removeEventListener('resize', updatenumEvents);
  }, []);

  // Fetch events from API
  const [events, setEvents] = useState<IEvent[]>([]);
  useEffect(() => {
    const fetchAndSaveEvents = async () => {
      try {
        const result = await axios.get('/public/events');
        setEvents(result.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAndSaveEvents();
  }, []);

  return (
    <div className="w-full py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center mx-auto w-11/12 pb-8">
        {events.slice(0, numEvents).map((event) => (
          <EventSticker event={event} key={event.picture} />
        ))}
      </div>
      <DefaultBtn btnText="Voir plus d'évenements" />
    </div>
  );
}
