import { IEvent } from '../../../@types/IEvent';

interface EventStickerProps {
  event: IEvent;
}
function EventSticker({ event }: EventStickerProps) {
  return (
    <div>
      <div className="w-72 h-72 bg-white rounded-xl shadow-around relative">
        <div className="m-2 w-fit absolute top-0 left-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-2xl font-medium">
          {event.location}
        </div>
        <img
          src={event.photo}
          alt={event.alt}
          className="h-full object-cover rounded-xl"
        />
        <div className="m-2 w-fit absolute bottom-0 left-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-2xl font-medium">
          {event.name}
        </div>
      </div>
    </div>
  );
}
export default EventSticker;
