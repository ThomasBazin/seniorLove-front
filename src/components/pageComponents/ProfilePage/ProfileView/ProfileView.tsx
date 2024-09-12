import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import axios from '../../../../axios';
import { IUsers } from '../../../../@types/IUsers';
import EventSticker from '../../../standaloneComponents/EventSticker/EventSticker';
import Loader from '../../../standaloneComponents/Loader/Loader';
import Error500Page from '../../../../pages/Error500Page';

export default function ProfileView() {
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
    return <Loader />;
  }

  if (profile) {
    return (
      <div className="w-full min-h-full flex-grow flex bg-primaryGrey">
        <div className="pt-8 px-8 max-w-7xl w-full justify-center mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image de profil */}
            <div className="flex-shrink-0  w-full md:w-2/3">
              <img
                src={profile.picture}
                alt={profile.name}
                className="object-cover rounded-lg shadow-xl w-full h-100"
              />
            </div>

            {/* Détails du profil */}
            <div className="flex-grow md:w-2/3">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="text-center mb-4">
                  <p className="text-2xl font-semibold text-primaryText">
                    {profile.name}
                  </p>
                  <p className="text-xl text-gray-600">{profile.age} ans</p>
                </div>

                <div className="space-y-6">
                  <p className="text-primaryText italic">
                    <span className="font-semibold">Date de naissance:</span>{' '}
                    {new Date(profile.birth_date).toLocaleDateString()}
                  </p>

                  <div className="mt-6">
                    <p className="text-primaryText italic mb-1">
                      <span className="font-semibold">Description:</span>
                    </p>
                    <p className="text-primaryText italic">
                      {profile.description}
                    </p>

                    {/* Hobbies */}
                    <div className="mt-6">
                      <p className="text-primaryText italic mb-1">
                        <span className="font-semibold">Hobbies:</span>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <ul className="text-primaryText font-semibold list-disc list-inside">
                          {profile.hobbies.map((hobby) => (
                            <li key={hobby.id}>{hobby.name}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Events */}
                    <div className="mt-6">
                      <p className="text-primaryText italic mb-1">
                        <span className="font-semibold">
                          Prochaines sorties:
                        </span>
                      </p>
                      {profile.events.length > 0 ? (
                        <div className="flex flex-wrap gap-4">
                          {profile.events.map((event) => (
                            <EventSticker
                              key={event.id}
                              event={event}
                              size="small"
                            />
                          ))}
                        </div>
                      ) : (
                        <p className="text-primaryText">
                          Aucun évènement à afficher
                        </p>
                      )}
                    </div>

                    {/* Bouton pour envoyer un message */}
                    <div className="flex justify-center mt-6 gap-10">
                      <Link
                        to="#"
                        className="bg-buttonGreen text-primaryText text-center w-[60%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl font-medium py-1 px-4 rounded-lg shadow-lg text-sm sm:text-base md:text-lg lg:text-base xl:text-lg italic"
                      >
                        Envoyer un message
                      </Link>
                      <Link
                        to="#"
                        className="text-primaryText text-center w-[15%] max-w-xs sm:max-w-xs md:max-w-xs lg:max-w-xs xl:max-w-xs font-medium py-3 px-3 rounded-lg shadow-md text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs italic"
                      >
                        Signaler ce profil
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
