import { Link } from 'react-router-dom';
import { IEvent } from '../../../@types/IEvent';

import { extractDayMonth } from '../../../utils/dateAndTimeUtils';

import CalendarIcon from '../Icon/CalendarIcon';

interface EventStickerProps {
  event: IEvent;
  size?: 'small' | 'medium' | 'large'; // Add a prop to customize the size
}

const sizeClasses = {
  small: 'h-60 w-60',
  medium: 'h-72 w-72',
  large: 'h-80 w-80',
};

export default function EventSticker({
  event,
  size = 'medium',
}: EventStickerProps) {
  const extractedDate = extractDayMonth(event.date);
  // Define size classes for different sticker sizes
  const sizeClass = sizeClasses[size] || sizeClasses.medium;

  return (
    <div>
      <Link to={`/events/${event.id}`} state={{ event }}>
        <div className={`${sizeClass} rounded-xl mx-auto shadow-lg relative`}>
          <div className="absolute -right-5 -top-8">
            <CalendarIcon extractedDate={extractedDate} />
          </div>
          <div className="m-2 w-fit absolute top-0 left-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-2xl font-medium">
            {event.location}
          </div>
          <img
            src={event.picture}
            alt={event.name}
            className={`object-cover rounded-xl ${sizeClass}`}
          />
          <div className="m-2 w-fit absolute bottom-0 left-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-2xl font-medium">
            {event.name}
          </div>
        </div>
      </Link>
    </div>
  );
}
