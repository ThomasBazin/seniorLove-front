import { useEffect, useState } from 'react';
import axios from '../../../axios';
import EventSticker from '../../standaloneComponents/EventSticker/EventSticker';
import { IEvent } from '../../../@types/IEvent';

export default function MainEventsPage() {
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
  // console.log(events);
  return (
    <main className="w-full min-h-screen flex-grow flex flex-col justify-start items-center bg-primaryGrey pb-8 gap-8">
      <p className="text-sm text-center font-semibold md:text-xl my-4 text-primaryText w-9/12 pt-8">
        Bienvenue sur notre page dédiée aux{' '}
        <span className="text-secondaryPink">événements</span> que nous
        organisons ! Découvrez une sélection d&apos;activités et
        d&apos;événements qui se dérouleront prochainement dans notre
        communauté. Que vous soyez amateur de culture, passionné de sport, ou
        simplement à la recherche d&apos;une sortie en plein air, il y en a pour
        tous les goûts.
      </p>
      <div className="flex flex-wrap gap-10 justify-center content-around w-10/12">
        {events.map((event) => (
          <EventSticker event={event} key={event.name} />
        ))}
      </div>
    </main>
  );
}
