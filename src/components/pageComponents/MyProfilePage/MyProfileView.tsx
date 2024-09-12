import axios from '../../../axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EventSticker from '../../standaloneComponents/EventSticker/EventSticker';
import DefaultBtn from '../../standaloneComponents/Button/DefaultBtn';
import EditProfileModal from './EditProfileModal';

interface IUsers {
  name: string;
  alt: string;
  age: number;
  picture?: string;
  birth_date?: string;
  gender?: string;
  description?: string;
  hobbies?: string[];
  events?: string[];
  new_password?: string;
  old_password?: string;
  repeat_new_password?: string;
}


export default function MyProfileView() {
  const { myId } = useParams<{ myId: string }>(); 
  const [me, setMe] = useState<IUsers | null>(null); 
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setisModalOpen] = useState(false);

  useEffect(() => {
    const fetchConnectedUser = async () => {
      try {
        const response = await axios.get(`/private/users/me`);
        setMe(response.data); // Stocke les données de l'utilisateur dans le state
      } catch (error) {
        setError('Error fetching your profile');
      }
    };
    fetchConnectedUser();
  }, [myId]); 

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (!me) {
    return <p className="text-center">Chargement du profil...</p>;
  }

  return (
    <div className="w-full min-h-full flex-grow flex bg-primaryGrey">
      <div className="pt-8 px-8 max-w-7xl w-full justify-center mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image de profil */}
          <div className="flex-shrink-0 w-full md:w-2/3">
            <img
              src={me.picture}
              alt={me.name}
              className="object-cover rounded-lg shadow-xl w-full h-100"
            />
          </div>

          <div className="flex-grow md:w-2/3">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <div className="text-center mb-4">
                <p className="text-2xl font-semibold text-primaryText">
                  {me.name}
                </p>
                <p className="text-xl text-gray-600">{me.age} ans</p>
              </div>

              <div className="space-y-6">
                <p className="text-primaryText italic">
                  <span className="font-semibold">Date de naissance:</span>{' '}
                  {new Date(me.birth_date).toLocaleDateString()}
                </p>

                <div className="mt-6">
                  <p className="text-primaryText italic mb-1">
                    <span className="font-semibold">Description:</span>
                  </p>
                  <p className="text-primaryText italic">
                    {me.description}
                  </p>

                  {/* Hobbies */}
                  <div className="mt-6">
                    <p className="text-primaryText italic mb-1">
                      <span className="font-semibold">Centres d'intérêt:</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <ul className="text-primaryText font-semibold list-disc list-inside">
                        {me.hobbies && me.hobbies.map((hobby: any) => (
                          <li key={hobby.id}>{hobby.name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Events */}
                  <div className="mt-6">
                    <p className="text-primaryText italic mb-1">
                      <span className="font-semibold">Prochaines sorties:</span>
                    </p>
                    {me.events && me.events.length > 0 ? (
                      <div className="flex flex-wrap gap-4">
                        {me.events.map((event) => (
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
                  
                  <div className="button_container flex justify-center mt-6 gap-6">
                    <button
                      onClick={() => setisModalOpen(true)}
                      className="min-w-44 bg-buttonGreen hover:bg-white rounded-lg text-primaryText font-bold text-lg shadow-md py-1 px-4 block mx-auto my-4"
                    >
                      Editer mon profil
                    </button>
                    {isModalOpen && (
                      <EditProfileModal
                        isOpen={isModalOpen}
                        onClose={() => setisModalOpen(false)}
                        user={me}
                        onUpdate={(updatedUser: IUsers) => {
                          setMe(updatedUser);
                          setisModalOpen(false);
                        }}
                      />
                    )}

                    <DefaultBtn btnText="Supprimer mon compte" />
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
