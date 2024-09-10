import { Link } from 'react-router-dom';
import { IEvent } from '../../../@types/IEvent';

import CalendarIcon from '../Icon/CalendarIcon';

interface EventStickerProps {
  event: IEvent;
}

export default function EventSticker({ event }: EventStickerProps) {
  return (
    <div>
      <Link
        to={`/events/${event.id}`}
        state={{ event }} // Properly use state to pass data
      >
        <div className="h-72 w-72 2xl:w-80 rounded-xl mx-auto shadow-lg relative">
          <div className="absolute -right-5 -top-8">
            <CalendarIcon />
          </div>
          <div className="m-2 w-fit absolute top-0 left-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-2xl font-medium">
            {event.location}
          </div>
          <img
            src={event.picture}
            alt={event.name}
            className="object-cover rounded-xl h-72 w-72 2xl:w-80"
          />
          <div className="m-2 w-fit absolute bottom-0 left-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-2xl font-medium">
            {event.name}
          </div>
        </div>
      </Link>
    </div>
  );
}
