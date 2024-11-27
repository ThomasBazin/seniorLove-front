import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
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
import EditImageModal from './Modals/EditImageModal';
import EditHobbyModal from './Modals/EditHobbyModal';
import ConfirmDeleteModal from './Modals/ConfirmDeleteModal';
import EditNameModal from './Modals/EditNameModal';
import EditAboutModal from './Modals/EditAboutModal';
import EditMailModal from './Modals/EditMailModal';
import EditPasswordlModal from './Modals/EditPasswordModal';

interface MyProfileViewRefactorProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MyProfileView({
  setIsAuthenticated,
}: MyProfileViewRefactorProps) {
  // Use the navigate function from react-router-dom
  const navigate = useNavigate();

  // STATE 1 : my profile
  const [me, setMe] = useState<IUsers | null>(null);

  // STATE 2 : loading
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // STATE 3 : error server
  const [serverError, setServerError] = useState(false);

  // STATE 4 : delete error
  const [deleteError, setDeleteError] = useState<string | null>(null);

  // STATE 5 : editing mode
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // STATE 6 : edited profile
  const [editedProfile, setEditedProfile] = useState<Partial<IUsers>>({});

  // STATE 7 : modal opening
  const [openedModal, setOpenedModal] = useState<string | null>(null);

  // STATE 8 : modified photo URL
  const [modifiedPhotoUrl, setModifiedPhotoUrl] = useState<string | null>(null);

  // STATE 9 : picture file
  const [pictureFile, setPictureFile] = useState<File | null>(null);

  // toast de confirmation
  const editSuccessNotify = () =>
    toast.success('Votre profil a été mis à jour avec succès.', {
      autoClose: 3000,
    });

  const editCancelNotify = () =>
    toast.info('Vous avez annulé la modification de votre profil.', {
      autoClose: 3000,
    });

  // Fetch the connected user using useEffect
  useEffect(() => {
    // Fetch the connected user
    const fetchConnectedUser = async () => {
      try {
        const response = await axios.get(`/private/users/me`);
        setMe(response.data);
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
  }, [navigate]);

  const handleConfirmDelete = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const rawFormData = Object.fromEntries(new FormData(event.currentTarget));
    const { password } = rawFormData;
    try {
      setDeleteError(null);
      await axios.delete(`/private/users/me/delete`, { data: password });
      setIsAuthenticated(false);
      removeTokenFromLocalStorage();
      navigate('/');
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError && (e.response?.status === 400 || 401)) {
        setDeleteError('Mot de passe incorrect');
      } else {
        setServerError(true);
      }
    }
  };

  // Send update request to API
  const handleSubmit = async () => {
    let newPictureData;
    try {
      setIsLoading(true);
      if (pictureFile) {
        const formData = new FormData();
        formData.append('new-image', pictureFile);
        const responsePicturePost = await axios.post(
          `/private/users/${me?.id}/uploadPhoto`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        newPictureData = responsePicturePost.data;
      }

      if (Object.keys(editedProfile).length || newPictureData) {
        const dataToSend = {
          ...editedProfile,
          ...newPictureData,
          hobbies: editedProfile.hobbies?.map((hobby) => hobby.id),
        };

        const response = await axios.patch(`/private/users/me`, dataToSend);
        if (response.status) {
          editSuccessNotify();
        }
        setMe(response.data);
        updateDataInLocalStorage(response.data.picture, response.data.name);
      }
      setEditedProfile({});
    } catch (e) {
      console.error(e);
      setServerError(true);
    } finally {
      setModifiedPhotoUrl(null);
      setPictureFile(null);
      setIsEditing(false);
      setIsLoading(false);
    }
  };

  // Handle edit toggle function
  const handleEditToggle = () => {
    if (isEditing) {
      handleSubmit();
    } else {
      setIsEditing(true);
    }
  };

  const handleCancelEdit = () => {
    setModifiedPhotoUrl(null);
    setPictureFile(null);
    setEditedProfile({});

    setIsEditing(false);
    editCancelNotify();
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
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => {
                      setOpenedModal('image');
                    }}
                    className="bg-white border border-gray-300 shadow p-1 rounded-2xl absolute top-2 left-2"
                  >
                    <img src={editLogo} alt="edit" className="w-6 h-6" />
                  </button>
                )}

                <img
                  src={modifiedPhotoUrl || me.picture}
                  alt={me.name}
                  className="max-w-64 md:max-w-full rounded-md border border-secondaryPink"
                />
              </>
            )}
          </div>

          {/* Hobbies */}
          <div>
            {/* Title */}
            <div className="flex flex-row gap-2 items-center justify-center w-full">
              {isEditing ? (
                <button
                  type="button"
                  onClick={() => {
                    setOpenedModal('hobbies');
                  }}
                >
                  <h2 className="text-xl w-full flex gap-2 font-semibold text-secondaryPink hover:text-secondaryPinkHover pb-3 text-center">
                    <img src={editLogo} alt="edit" className="w-6 h-6" />{' '}
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
            <div className="flex flex-wrap justify-center gap-2">
              {editedProfile.hobbies
                ? editedProfile.hobbies?.map((hobby) => (
                    <span
                      key={hobby.id}
                      className="bg-primaryPink text-primaryText font-medium rounded-lg text-sm py-1 px-2"
                    >
                      {hobby.name}
                    </span>
                  ))
                : me.hobbies.map((hobby) => (
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
          <div className="font-semibold md:flex text-center justify-between">
            {/* Name & Age */}
            <div>
              {isEditing ? (
                <button
                  type="button"
                  onClick={() => {
                    setOpenedModal('name');
                  }}
                  className="p-1 rounded-2xl"
                >
                  <div className="flex gap-2 items-center">
                    <img src={editLogo} alt="edit" className="w-6 h-6" />
                    <span className="text-3xl text-secondaryPink hover:text-secondaryPinkHover">
                      {editedProfile.name || me.name}
                    </span>
                  </div>
                </button>
              ) : (
                <div>
                  <span className="text-3xl text-secondaryPink">{me.name}</span>
                  , {me.age} ans
                </div>
              )}
            </div>
            {/* Edit button desktop */}
            <div className="flex gap-3 items-center">
              <DefaultBtn
                btnText={isEditing ? 'Sauvegarder' : 'Editer mon profil'}
                btnPage="profile"
                btnEdit={isEditing}
                onClick={handleEditToggle}
                disabled={
                  isEditing
                    ? !Object.keys(editedProfile).length &&
                      Boolean(!modifiedPhotoUrl)
                    : false
                }
              />
              {isEditing && (
                <DefaultBtn
                  btnText="Annuler"
                  btnPage="profile"
                  btnEdit={!isEditing}
                  onClick={handleCancelEdit}
                />
              )}
            </div>
          </div>
          {/* Description */}
          <div>
            {isEditing ? (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setOpenedModal('about');
                  }}
                  className="p-1 rounded-2xl"
                >
                  <div className="flex gap-2 justify-center md:text-left">
                    <img src={editLogo} alt="edit" className="w-6 h-6" />
                    <h3 className="text-xl text-secondaryPink hover:text-secondaryPinkHover text-center font-semibold pb-3 md:text-left ">
                      A propos de moi :
                    </h3>
                  </div>
                </button>
                <p className="text-primaryText text-justify break-words">
                  {editedProfile.description || me.description}
                </p>
              </>
            ) : (
              <>
                <h3 className="text-xl text-secondaryPink text-center font-semibold pb-3 md:text-left ">
                  A propos de moi :
                </h3>
                <p className="text-primaryText text-justify break-words">
                  {me.description}
                </p>
              </>
            )}
          </div>

          {isEditing && (
            <div className="flex flex-row justify-center gap-6">
              <button
                type="button"
                onClick={() => setOpenedModal('email')}
                className="text-secondaryPink text-center md:text-start px-4 rounded-lg w-fit font-semibold"
              >
                <div className="flex gap-2 self items-center">
                  <img src={editLogo} alt="edit" className="w-6 h-6" />
                  Modifier l&apos;adresse e-mail
                </div>
              </button>
              <button
                type="button"
                onClick={() => setOpenedModal('password')}
                className="text-secondaryPink hover:text-secondaryPinkHover text-center md:text-start px-4 py-2 rounded-lg w-fit font-semibold"
              >
                <div className="flex gap-2 self items-center">
                  <img src={editLogo} alt="edit" className="w-6 h-6" />
                  Modifier le mot de passe
                </div>
              </button>
            </div>
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
      <div className="pb-8 pt-32 md:pt-16">
        <DefaultBtn
          btnText="Supprimer mon compte"
          btnPage="profile"
          btnDelete
          onClick={() => setOpenedModal('delete')}
        />
      </div>
      {openedModal === 'email' && (
        <EditMailModal
          setOpenedModal={setOpenedModal}
          email={editedProfile.email || me.email}
          setEditedProfile={setEditedProfile}
        />
      )}
      {openedModal === 'password' && (
        <EditPasswordlModal
          setOpenedModal={setOpenedModal}
          setEditedProfile={setEditedProfile}
        />
      )}
      {openedModal === 'image' && (
        <EditImageModal
          setOpenedModal={setOpenedModal}
          setPictureFile={setPictureFile}
          setModifiedPhotoUrl={setModifiedPhotoUrl}
          picture={modifiedPhotoUrl || me.picture}
        />
      )}
      {openedModal === 'name' && (
        <EditNameModal
          setOpenedModal={setOpenedModal}
          name={editedProfile.name || me.name}
          setEditedProfile={setEditedProfile}
        />
      )}
      {openedModal === 'about' && (
        <EditAboutModal
          setOpenedModal={setOpenedModal}
          description={editedProfile.description || me.description}
          setEditedProfile={setEditedProfile}
        />
      )}
      {openedModal === 'hobbies' && (
        <EditHobbyModal
          setOpenedModal={setOpenedModal}
          setEditedProfile={setEditedProfile}
          userHobbies={editedProfile.hobbies || me.hobbies}
        />
      )}
      {openedModal === 'delete' && (
        <ConfirmDeleteModal
          setOpenedModal={setOpenedModal}
          handleConfirmDelete={handleConfirmDelete}
          handleCancelDelete={() => setOpenedModal(null)}
          deleteError={deleteError}
        />
      )}
      {serverError && (
        <p className="text-red-600 mt-4">
          Une erreur est survenue lors de la suppression du compte.
        </p>
      )}
      <ToastContainer />
    </div>
  );
}
