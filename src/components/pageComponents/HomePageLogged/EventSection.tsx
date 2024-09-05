import { useEffect, useState } from 'react';
import EventSticker from '../../standaloneComponents/EventSticker/EventSticker';
import DefaultBtn from '../../standaloneComponents/Button/DefaultBtn';
import { IEvent } from '../../../@types/IEvent';
import axios from '../../../axios';

export default function EventSection() {
  const [events, setEvents] = useState<IEvent[]>([]);
  useEffect(() => {
    const fetchAndSaveEvents = async () => {
      try {
        const result = await axios.get('/public/events');
        setEvents(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAndSaveEvents();
  }, []);

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
  return (
    <div className="w-full py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center mx-auto w-11/12 pb-8">
        {events.slice(0, numEvents).map((event) => (
          <EventSticker event={event} key={event.name} />
        ))}
      </div>
      <DefaultBtn btnText="Voir plus d'évenements" />
    </div>
  );
}
