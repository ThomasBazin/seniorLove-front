import { useLocation } from 'react-router-dom';
import { IEvent } from '../../../../@types/IEvent';

// interface EventViewProps {
//   event: IEvent;
// }

export default function EventView() {
  const location = useLocation();
  const event = location.state?.event as IEvent; // Retrieve the passed event
  return (
    <div className="xxs:w-fit xs:w-full bg-primaryPink flex md:mt-24 ">
      <div className="flex-grow flex flex-col justify-around items-center p-8 mb-4 md:items-start md:gap-6 md:h-4/6 xl:max-w-4xl  xl:mx-auto xl:my-auto">
        <div className="photo_container w-fit h-72 bg-white rounded-xl shadow-around relative mb-4 md:w-full md:  md:mb-0 md:rounded-3xl">
          <img
            src={event.picture}
            alt={event.name}
            className="h-full object-cover object-center rounded-xl md:w-full "
          />
        </div>

        <div className="flex flex-col justify-between md:w-full md:relative">
          <div className="name_container p-2 bg-white rounded-xl shadow-lg w-full bottom-0 left-1/4 text-primaryText text-xl text-center font-medium mb-4 md:w-1/2">
            <p>{event.name}</p>
          </div>{' '}
          <div className="hobbies_container w-80 h-fit bg-white rounded-xl shadow-lg relative mb-4 md:absolute md:top-0 md:left-3/4 md:w-fit md:px-4">
            <p className="date_paragraph text-primaryText w-auto m-2 italic py-2">
              Date : {event.date}
            </p>
            <p className="place_paragraph text-primaryText w-auto m-2 italic py-2">
              Lieu: {event.location}, France
            </p>
            <p className="hobbies_paragraph text-primaryText w-auto m-2 italic py-2">
              Centres d&apos;intérêt :
            </p>
            <ul className="m-2 text-primaryText w-auto italic py-2">
              {event.hobbies.map((hobby) => (
                <li key={hobby.name}>{hobby.name}</li>
              ))}
            </ul>
          </div>
          <div className="description_container w-80 h-fit bg-white rounded-xl shadow-lg mb-4 md:w-3/5 ">
            <p className="text-primaryText w-auto m-4 italic py-2">
              {event.description}
            </p>
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
