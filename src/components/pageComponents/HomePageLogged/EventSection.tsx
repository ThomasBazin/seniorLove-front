import { useEffect, useState } from 'react';
import axios from '../../../axios';
import { IEvent } from '../../../@types/IEvent';
import EventSticker from '../../standaloneComponents/EventSticker/EventSticker';
import DefaultBtn from '../../standaloneComponents/Button/DefaultBtn';
import Loader from '../../standaloneComponents/Loader/Loader';

export default function EventSection() {
  // STATE 1 : events
  const [events, setEvents] = useState<IEvent[]>([]);

  // STATE 2 : events number
  const [numEvents, setnumEvents] = useState(3);

  // STATE 3 : loading
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  useEffect(() => {
    const fetchAndSaveEvents = async () => {
      try {
        const result = await axios.get('/public/events');
        setEvents(result.data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAndSaveEvents();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center mx-auto w-11/12 pb-8">
        {events.slice(0, numEvents).map((event) => (
          <EventSticker event={event} key={event.name} />
        ))}
      </div>
      <DefaultBtn
        btnText="Voir plus d'évènements"
        onClick={() => {
          window.location.href = '/events';
        }}
      />
    </div>
  );
}
