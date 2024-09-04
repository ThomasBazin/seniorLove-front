import { IEvent } from '../../../@types/IEvent';

interface EventStickerProps {
  event: IEvent;
}
function EventSticker({ event }: EventStickerProps) {
  return (
    <div>
      <div className="h-72 w-72 2xl:w-80 rounded-xl mx-auto shadow-lg relative">
        <div className="m-2 w-fit absolute top-0 left-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-2xl font-medium">
          {event.location}
        </div>
        <img
          src={event.photo}
          alt={event.alt}
          className="h-full object-cover rounded-xl h-72 w-72 2xl:w-80"
        />
        <div className="m-2 w-fit absolute bottom-0 left-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-2xl font-medium">
          {event.name}
        </div>
      </div>
    </div>
  );
}
export default EventSticker;
