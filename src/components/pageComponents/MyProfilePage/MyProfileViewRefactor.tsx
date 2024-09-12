import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../../axios';
import { IUsers } from '../../../@types/IUsers';
import EventSticker from '../../standaloneComponents/EventSticker/EventSticker';
import DefaultBtn from '../../standaloneComponents/Button/DefaultBtn'; // Assurez-vous que DefaultBtn est importé correctement

export default function MyProfileView1() {
  const { myId } = useParams<{ myId: string }>();
  const [me, setMe] = useState<IUsers | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConnectedUser = async () => {
      try {
        const response = await axios.get(`/private/users/me`);
        setMe(response.data); // Stocke les données de l'utilisateur dans le state
      } catch (e) {
        console.error(e);
        setError('Error fetching your profile');
      }
    };
    fetchConnectedUser();
  }, [myId]); // L'ID de l'utilisateur est utilisé comme dépendance pour relancer le fetch si nécessaire

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  // message de chargement tant que les données ne sont pas disponibles
  if (!me) {
    return <p className="text-center">Chargement du profil...</p>;
  }

  return (
    <div className="w-full min-h-full flex-grow flex flex-col items-center justify-between bg-primaryGrey">
      <div className="flex flex-col pt-8 px-8 max-w-7xl w-full gap-10 md:flex-row">
        {/* Aside in desktop view */}
        <div className="flex flex-col items-center gap-5 md:w-1/3">
          <img
            src={me.picture}
            alt={me.name}
            className="max-w-64 md:max-w-full rounded-md border border-secondaryPink"
          />
          <div className="font-semibold flex flex-col text-center justify-between md:hidden">
            <div>
              <span className="text-3xl text-secondaryPink">{me.name}</span>,{' '}
              {me.age} ans
            </div>
            <div className="pt-4">
              <DefaultBtn btnText="Editer mon profil" btnPage="profile" />
            </div>
          </div>
          <div>
            <h2 className="text-xl text-center font-semibold text-secondaryPink pb-3">
              Mes Centres d&apos;intérêt
            </h2>
            <div className="flex flex-wrap justify-around gap-2">
              {me.hobbies.map((hobby) => (
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
              <span className="text-3xl text-secondaryPink">{me.name}</span>,{' '}
              {me.age} ans
            </div>
            <div className="flex gap-3">
              <DefaultBtn btnText="Editer mon profil" btnPage="profile" />
              {/* <button type="button">
                <img
                  src="/icon/delete.svg"
                  alt=""
                  className="w-8 h-8 px-2 rounded-lg bg-secondaryPink hover:bg-secondaryPinkHover"
                />
              </button> */}
            </div>
          </div>
          <div>
            <h3 className="text-xl text-secondaryPink text-center font-semibold pb-3 md:text-black md:text-left ">
              A propos de moi :
            </h3>
            <p className="text-primaryText text-justify">{me.description}</p>
          </div>
          <div className="pt-8">
            <h3 className="text-xl text-secondaryPink text-center font-semibold md:text-black pb-3">
              Mes prochaines sorties :
            </h3>
            {me.events.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-5 md:gap-10 pt-5">
                {me.events.map((event) => (
                  <EventSticker event={event} key={event.id} page="profile" />
                ))}
              </div>
            ) : (
              <p className="text-center font-semibold pt-6">
                {' '}
                Je ne suis actuellement enregistré à aucun futur événement.{' '}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="pb-8 pt-32 md:pt-16 relative top-0">
        <DefaultBtn
          btnText="Supprimer mon compte"
          btnPage="profile"
          btnDelete="true"
        />
      </div>
    </div>
  );
}
