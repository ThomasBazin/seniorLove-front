// TODO: add | hobbies, email, password, picture | update
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { IUsers } from '../../../@types/IUsers';
import {
  removeTokenFromLocalStorage,
  updateDataInLocalStorage,
} from '../../../localStorage/localStorage';

import axios from '../../../axios';
import EventSticker from '../../standaloneComponents/EventSticker/EventSticker';
import DefaultBtn from '../../standaloneComponents/Button/DefaultBtn';
import Error500Page from '../../../pages/Error500Page';
import editLogo from '/icon/edit.svg';
import Loader from '../../standaloneComponents/Loader/Loader';
import EditMailPassword from './Modals/EditEmailPassword';
import EditImageModal from './Modals/EditImageModal';
import EditHobbyModal from './Modals/EditHobbyModal';
import ConfirmDeleteModal from './Modals/ConfirmDeleteModal';

interface MyProfileViewRefactorProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MyProfileViewRefactor({
  setIsAuthenticated,
}: MyProfileViewRefactorProps) {
  // Get the user ID from the URL parameters
  const { myId } = useParams<{ myId: string }>();

  // Use the navigate function from react-router-dom
  const navigate = useNavigate();

  // STATE 1 : my profile
  const [me, setMe] = useState<IUsers | null>(null);

  // STATE 2 : loading
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // STATE 3 : error server
  const [serverError, setServerError] = useState(false);

  // STATE 4 : image modal
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // STATE 5 : hobbies modal
  const [isHobbyModalOpen, setIsHobbyModalOpen] = useState(false);

  // STATE 6 : modified photo URL
  const [modifiedPhotoUrl, setModifiedPhotoUrl] = useState<string | null>(null);

  // STATE 7 : editing mode
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // STATE 8 : edited profile
  const [editedProfile, setEditedProfile] = useState<Partial<IUsers>>({});

  // STATE 9 : show modal
  const [showModal, setShowModal] = useState<boolean>(false);

  // Test modal for confirm delete
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] =
    useState<boolean>(false);

  // Fetch the connected user using useEffect
  useEffect(() => {
    // Fetch the connected user
    const fetchConnectedUser = async () => {
      try {
        const response = await axios.get(`/private/users/me`);
        setMe(response.data);
        setEditedProfile(response.data);
      } catch (e) {
        console.error(e);
        if (
          e instanceof AxiosError &&
          (e.response?.data.blocked || e.response?.status === 401)
        ) {
          removeTokenFromLocalStorage();
          navigate('/loggedout');
        } else {
          setServerError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchConnectedUser();
  }, [myId, navigate]);

  // Delete account function
  const deleteAccount = async () => {
    try {
      await axios.delete(`/private/users/me/delete`);
      setIsAuthenticated(false);
      removeTokenFromLocalStorage();
      navigate('/');
    } catch (e) {
      console.error(e);
      setServerError(true);
    }
  };

  const handleDeleteClick = () => {
    // Affiche la modale de confirmation
    // setShowModal(true);
    setIsConfirmDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    // Confirmation de la suppression
    setShowModal(false);
    deleteAccount();
  };

  const handleCancelDelete = () => {
    // Annulation de la suppression
    setShowModal(false);
    setIsConfirmDeleteModalOpen(false);
  };

  // Handle submit function
  const handleSubmit = async () => {
    try {
      // Prepare the data to send to the backend
      const dataToSend = {
        name: editedProfile.name,
        description: editedProfile.description,
        gender: editedProfile.gender,
        picture: editedProfile.picture,
        picture_id: editedProfile.picture_id,
        email: editedProfile.email,
        old_password: editedProfile.old_password,
        new_password: editedProfile.new_password,
        repeat_new_password: editedProfile.repeat_new_password,
        hobbies: editedProfile.hobbies,
      };

      const response = await axios.patch(`/private/users/me`, dataToSend);
      setMe(response.data);
      updateDataInLocalStorage(response.data.picture, response.data.name);
      // localStorage.setItem('name', response.data.name); // TODO: fix this with useState
      setIsEditing(false);
    } catch (e) {
      console.error(e);
      setServerError(true);
    }
  };

  // Handle edit toggle function
  const handleEditToggle = () => {
    if (isEditing) {
      handleSubmit();
    } else {
      setIsEditing(true);
      setEditedProfile(me || {});
    }
  };

  // Handle input change function
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({ ...prev, [name]: value }));
  };

  if (serverError) {
    return <Error500Page />;
  }

  if (isLoading) {
    return (
      <section className=" justify-center md:items-center flex md:px-16 md:h-screen">
        <Loader />
      </section>
    );
  }

  if (!me) {
    return <Error500Page />;
  }

  return (
    <div className="w-full min-h-full flex-grow flex flex-col items-center justify-between bg-primaryGrey">
      <div className="flex flex-col pt-8 px-8 max-w-7xl w-full gap-10 md:flex-row">
        {/* Aside in desktop view */}
        <div className="flex flex-col items-center gap-5 md:w-1/3">
          {/* Profile picture */}
          <div className="relative">
            {isEditing && (
              <button
                onClick={() => {
                  setIsImageModalOpen(true);
                }}
                className="bg-white border border-gray-300 shadow p-1 rounded-2xl absolute top-2 left-2"
              >
                <img src={editLogo} alt="edit" className="w-6 h-6" />
              </button>
            )}
            <img
              src={modifiedPhotoUrl ? modifiedPhotoUrl : me.picture}
              alt={me.name}
              className="max-w-64 md:max-w-full rounded-md border border-secondaryPink"
            />
          </div>

          <div className="font-semibold flex flex-col text-center justify-between md:hidden">
            {/* Name & Age */}
            <div>
              <span className="text-3xl text-secondaryPink">
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editedProfile.name || ''}
                    onChange={handleInputChange}
                    className="text-black text-center px-2 py-1 rounded"
                  />
                ) : (
                  me.name
                )}
              </span>
              , {me.age} ans
            </div>
            {/* Edit button */}
            <div className="pt-4">
              <DefaultBtn
                btnText={isEditing ? 'Sauvegarder' : 'Éditer mon profil'}
                btnPage="profile"
                onClick={handleEditToggle}
              />
            </div>
          </div>
          {/* Hobbies */}
          <div>
            {/* Title */}
            <div className="flex flex-row gap-2 items-center justify-center w-full">
              {isEditing ? (
                //   <button
                //   onClick={() => {
                //     setIsImageModalOpen(true);
                //   }}
                //   className="bg-white border border-gray-300 shadow p-1 rounded-2xl absolute top-2 left-2"
                // >
                //   <img src={editLogo} alt="edit" className="w-6 h-6" />
                // </button>
                <button
                  onClick={() => {
                    setIsHobbyModalOpen(true);
                  }}
                >
                  <h2 className="text-xl w-full font-semibold text-secondaryPink pb-3 text-center">
                    Modifiez vos centres d&apos;intérêt
                  </h2>
                </button>
              ) : (
                <h2 className="text-xl w-full font-semibold text-secondaryPink pb-3 text-center">
                  Mes Centres d&apos;intérêt
                </h2>
              )}
            </div>
            {/* Hobbies list */}
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
            {/* Name & Age */}
            <div>
              <span className="text-3xl text-secondaryPink">
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editedProfile.name || ''}
                    onChange={handleInputChange}
                    className="text-black px-2 py-1 rounded max-w-64"
                  />
                ) : (
                  me.name
                )}
              </span>
              , {me.age} ans
            </div>
            {/* Edit button */}
            <div className="flex gap-3">
              <DefaultBtn
                btnText={isEditing ? 'Sauvegarder' : 'Editer mon profil'}
                btnPage="profile"
                onClick={handleEditToggle}
              />
            </div>
          </div>
          {/* Description */}
          <div>
            <h3 className="text-xl text-secondaryPink text-center font-semibold pb-3 md:text-left ">
              A propos de moi :
            </h3>
            {isEditing ? (
              <textarea
                name="description"
                value={editedProfile.description || ''}
                onChange={handleInputChange}
                className="text-black w-full px-2 py-1 rounded"
                rows={4}
              />
            ) : (
              <p className="text-primaryText text-justify">{me.description}</p>
            )}
          </div>

          {isEditing && (
            <EditMailPassword user={me} setEditedProfile={setEditedProfile} />
          )}

          {/* Events */}
          <div className="pt-8">
            <h3 className="text-xl text-secondaryPink text-center font-semibold md:text-black pb-3">
              Mes prochaines sorties :
            </h3>
            {me.events && me.events.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-5 md:gap-10 pt-5">
                {me.events.map((event) => (
                  <EventSticker event={event} key={event.id} page="profile" />
                ))}
              </div>
            ) : (
              <p className="text-center pt-6">
                Je ne suis actuellement enregistré à aucun futur événement.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Delete */}
      <div className="pb-8 pt-32 md:pt-16 relative top-0">
        <DefaultBtn
          btnText="Supprimer mon compte"
          btnPage="profile"
          btnDelete="true"
          onClick={handleDeleteClick}
        />
      </div>

      {isImageModalOpen && (
        <EditImageModal
          isImageModalOpen={isImageModalOpen}
          setIsImageModalOpen={setIsImageModalOpen}
          setEditedProfile={setEditedProfile}
          setModifiedPhotoUrl={setModifiedPhotoUrl}
          user={me}
        />
      )}
      {isHobbyModalOpen && (
        <EditHobbyModal
          isHobbyModalOpen={isHobbyModalOpen}
          setIsHobbyModalOpen={setIsHobbyModalOpen}
          setEditedProfile={setEditedProfile}
          user={me}
        />
      )}
      {isConfirmDeleteModalOpen && (
        <ConfirmDeleteModal
          isConfirmDeleteModalOpen={isConfirmDeleteModalOpen}
          setIsConfirmDeleteModalOpen={setIsConfirmDeleteModalOpen}
          handleConfirmDelete={handleConfirmDelete}
          handleCancelDelete={handleCancelDelete}
        />
      )}
      {/* Modale de confirmation */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p>
              Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est
              irréversible.
            </p>
            <div className="mt-4">
              <button
                className="bg-buttonGreen hover:bg-red-500 text-black font-bold py-2 px-4 rounded mr-2"
                onClick={handleConfirmDelete}
                type="button"
              >
                Oui, supprimer
              </button>
              <button
                className="bg-secondaryPink hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                onClick={handleCancelDelete}
                type="button"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Message d'erreur serveur */}
      {serverError && (
        <p className="text-red-600 mt-4">
          Une erreur est survenue lors de la suppression du compte.
        </p>
      )}
    </div>
  );
}
