import { useParams, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import axios from '../../../../axios';
import { IUsers } from '../../../../@types/IUsers';
import EventSticker from '../../../standaloneComponents/EventSticker/EventSticker';
import Loader from '../../../standaloneComponents/Loader/Loader';
import Error500Page from '../../../../pages/Error500Page';
import DefaultBtn from '../../../standaloneComponents/Button/DefaultBtn';

export default function UsersProfile() {
  const { userId } = useParams<{ userId: string }>(); // Récupère l'id de l'utilisateur à partir de l'URL
  // STATE 1 : profile
  const [profile, setProfile] = useState<IUsers | null>(null);

  // STATE 2 : loading
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // STATE 3 : error
  const [isError, setIsError] = useState<number | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`/private/users/${userId}`);
        setProfile(response.data); // Stocke les données de l'utilisateur dans le state
      } catch (e) {
        if (e instanceof AxiosError && e.response?.status === 404) {
          console.error(e);
          setIsError(404);
        } else {
          setIsError(500);
          console.log(e);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserProfile();
  }, [userId]); // L'ID de l'utilisateur est utilisé comme dépendance pour relancer le fetch si nécessaire

  if (isError === 404) {
    return <Navigate to="/error" />;
  }

  if (isError === 500) {
    return <Error500Page />;
  }

  if (isLoading) {
    return (
      <section className=" justify-center md:items-center flex md:px-16 md:h-screen">
        <Loader />
      </section>
    );
  }

  if (!profile) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="w-full min-h-full flex-grow flex flex-col items-center justify-between bg-primaryGrey">
      <div className="flex flex-col pt-8 px-8 max-w-7xl w-full gap-10 md:flex-row">
        {/* Aside in desktop view */}
        <div className="flex flex-col items-center gap-5 md:w-1/3">
          <img
            src={profile.picture}
            alt={profile.name}
            className="max-w-64 md:max-w-full rounded-md border border-secondaryPink"
          />
          <div className="font-semibold flex flex-col text-center justify-between md:hidden">
            <div>
              <span className="text-3xl text-secondaryPink">
                {profile.name}
              </span>
              , {profile.age} ans
            </div>
            <div className="pt-4">
              <DefaultBtn btnText="Envoyer un message" btnPage="profile" />
            </div>
          </div>
          <div>
            <h2 className="text-xl text-center font-semibold text-secondaryPink pb-3">
              Mes Centres d&apos;intérêt
            </h2>
            <div className="flex flex-wrap justify-around gap-2">
              {profile.hobbies.map((hobby) => (
                <span
                  key={hobby.id}
                  className="bg-primaryPink text-primaryText font-medium rounded-lg text-sm py-1 px-2"
                >
                  {hobby.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="md:w-2/3 flex flex-col gap-3 md:gap-6">
          <div className="hidden font-semibold md:flex text-center justify-between">
            <div>
              <span className="text-3xl text-secondaryPink">
                {profile.name}
              </span>
              , {profile.age} ans
            </div>
            <div className="flex gap-3">
              <DefaultBtn btnText="Envoyer un message" btnPage="profile" />
            </div>
          </div>
          <div>
            <h3 className="text-xl text-secondaryPink text-center font-semibold pb-3 md:text-black md:text-left ">
              A propos de moi :
            </h3>

            <p className="text-primaryText text-justify">
              {profile.description}
            </p>
          </div>
          {/* Add more editable fields here as needed */}
          <div className="pt-8">
            <h3 className="text-xl text-secondaryPink text-center font-semibold md:text-black pb-3">
              Mes prochaines sorties :
            </h3>
            {profile.events && profile.events.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-5 md:gap-10 pt-5">
                {profile.events.map((event) => (
                  <EventSticker event={event} key={event.id} page="profile" />
                ))}
              </div>
            ) : (
              <p className="text-center font-semibold pt-6">
                Je ne suis actuellement enregistré à aucun futur événement.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
