/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../../../axios';
import { IEvent } from '../../../../@types/IEvent';
import { IUsersFull } from '../../../../@types/IUsersFull';

export default function EventView() {
  const [userEvents, setUserEvents] = useState<IUsersFull[]>([]);
  const [isSubscribe, setIsSubscribe] = useState<boolean>();
  const [buttonText, setButtonText] = useState<string>('Je participe');

  // toast de confirmation
  const subNotify = () =>
    toast.success('Vous êtes bien inscrit(e) à cet événement', {
      autoClose: 3000,
    });

  const UnsubNotify = () =>
    toast.info("Vous n'êtes plus inscrit(e) à cet événement", {
      autoClose: 3000,
    });

  const location = useLocation();
  const event = location.state?.event as IEvent; // Retrieve the passed event

  // vérification des évenements possédés par l'user
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
      setIsSubscribe(true);
    } else {
      setIsSubscribe(false);
    }

    setButtonText(isSubscribe ? 'Me désinscrire' : 'Je participe');
  }, [checkSubscribe, isSubscribe]);

  // s'inscrire à un évenement
  async function subscribeEvent(eventId: number) {
    try {
      const result = await axios.put(`/private/events/${eventId}/register`);
      console.log(result.status);
      setIsSubscribe(!isSubscribe);
      subNotify();
    } catch (error) {
      console.log(error);
    }
  }

  // se désinscrire d'un évenement
  async function unsubscribeEvent(eventId: number) {
    try {
      const result = await axios.delete(
        `/private/events/${eventId}/unregister`
      );
      console.log(result.status);
      setIsSubscribe(!isSubscribe);
      UnsubNotify();
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
        {isSubscribe && (
          <p className="text-center text-x0 text-secondaryPink">
            Vous êtes déja inscrit(e) à cet évenement
          </p>
        )}
        <button
          type="button"
          className="min-w-44 bg-buttonGreen hover:bg-secondaryPinkHover rounded-lg text-black font-bold text-lg shadow-md py-1 px-4 block mx-auto my-4"
          onClick={() =>
            isSubscribe ? unsubscribeEvent(event.id) : subscribeEvent(event.id)
          }
        >
          {buttonText}
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}
