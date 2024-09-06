import { useLocation } from 'react-router-dom';
import { IEvent } from '../../../../@types/IEvent';

export default function EventView() {
  const location = useLocation();
  const event = location.state?.event as IEvent; // Retrieve the passed event
  return (
    <div className="w-full min-h-full flex-grow flex flex-col items-center bg-primaryGrey">
      <div className="pt-8 px-8 items-center max-w-7xl">
        <div className="h-72 rounded-xl relative mb-4">
          <img
            src={event.picture}
            alt={event.name}
            className="h-full object-cover rounded-md shadow-xl w-full"
          />
        </div>

        <div className="">
          <div className="flex flex-col justify-between">
            <div className="p-2 w-full text-primaryText text-xl text-center mb-4">
              <p>{event.name}</p>
            </div>{' '}
            <div className="flex flex-row-reverse justify-between">
              <div className="w-80 flex flex-col pl-20 gap-4">
                <p className="text-primaryText italic">
                  <span className="font-semibold">Date</span> : {event.date}
                </p>
                <p className="text-primaryText italic">
                  <span className="font-semibold">Lieu</span> {event.location},
                  France
                </p>
                <ul className="text-primaryText italic">
                  <p className="text-primaryText italic mb-1">
                    <span className="font-semibold">
                      Centres d&apos;intérêt
                    </span>{' '}
                    :
                  </p>
                  {event.hobbies.map((hobby) => (
                    <li key={hobby.name}>{hobby.name}</li>
                  ))}
                </ul>
              </div>
              <div className="w-80 h-fit mb-4 md:w-3/5 ">
                <p className="text-primaryText w-auto m-4 italic py-2">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="button_container flex justify-center">
              <Link
                to="#"
                className="bg-buttonGreen text-primaryText text-center w-2/4 font-bold py-2 px-3  rounded-lg shadow-lg sm:text-base md:w-1/4 md:text-lg lg:block lg:text-xs xl:text-lg italic"
              >
                Je participe
              </Link>
            </div> */}
        </div>
      </div>
    </div>
  );
}
