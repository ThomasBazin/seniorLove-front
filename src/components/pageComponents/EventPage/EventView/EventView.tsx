/* eslint-disable no-console */
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../../../../axios';
import { IEvent } from '../../../../@types/IEvent';

export default function EventView() {
  const [userEvents, setUserEvents] = useState<object[]>([]);
  const [buttonText, setButtonText] = useState<string>('Je participe');
  const [isSubscribe, setIsSubscribe] = useState<boolean>(false);

  const location = useLocation();
  const event = location.state?.event as IEvent; // Retrieve the passed event

  const checkSubscribe = userEvents.some((element) => element.id === event.id);

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get('private/users/me');
        setUserEvents(result.data.events);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();

    if (checkSubscribe) {
      setButtonText('Me désinscrire');
    } else {
      setButtonText('Je participe');
    }
  }, [checkSubscribe, buttonText]);

  // s'inscrire à un évenement
  async function subscribeEvent(eventId: number) {
    try {
      const result = await axios.put(`/private/events/${eventId}/register`);
      console.log(result.status);
      setButtonText('Me désinscrire');
    } catch (error) {
      console.log(error);
    }
  }

  // se désinscrire à un évenement
  async function unsubscribeEvent(eventId: number) {
    try {
      const result = await axios.delete(
        `/private/events/${eventId}/unregister`
      );
      console.log(result.status);
      setButtonText('Je participe');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full min-h-full flex-grow flex bg-primaryGrey">
      <div className="pt-8 px-8 max-w-7xl w-full justify-center mx-auto ">
        <div className="h-72 rounded-xl relative mb-4">
          <img
            src={event.picture}
            alt={event.name}
            className="h-full object-cover rounded-md shadow-xl w-full"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div className="p-2 w-full text-primaryText text-xl text-center mb-4">
            <p>{event.name}</p>
          </div>{' '}
          {/* Aside */}
          <div className="flex flex-col md:flex-row-reverse md:justify-between">
            <div className="flex md:flex-col md:pl-20 gap-4 flex-wrap justify-center">
              <p className="text-primaryText italic">
                <span className="font-semibold">Date</span> : {event.date}
              </p>
              <p className="text-primaryText italic">
                <span className="font-semibold">Lieu</span> {event.location},
                France
              </p>
              <div>
                <p className="text-primaryText italic mb-1">
                  <span className="font-semibold">Centres d&apos;intérêt</span>{' '}
                  :
                </p>
                <div className="text-primaryText">
                  {event.hobbies.map((hobby) => (
                    <p key={hobby.name}>{hobby.name}</p>
                  ))}
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="md:w-4/5 ">
              <p className="text-primaryText py-6 md:py-0 italic">
                {event.description}
              </p>
            </div>
          </div>
        </div>
        {/* get user info to know if user is register for the event */}
        <button
          type="button"
          className="min-w-44 bg-buttonGreen hover:bg-secondaryPinkHover rounded-lg text-black font-bold text-lg shadow-md py-1 px-4 block mx-auto my-4"
          onClick={() =>
            checkSubscribe
              ? unsubscribeEvent(event.id)
              : subscribeEvent(event.id)
          }
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
