import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from '../../../axios';

interface IUsers {
  name: string;
  alt: string;
  age: number;
  picture?: string;
  birth_date?: string;
  gender?: string;
  description?: string;
  hobbies?: string[];
  new_password?: string;
  old_password?: string;
  repeat_new_password?: string;
}

// Interface pour les propriétés du modal d'édition de profil
interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: IUsers;
  onUpdate: (updatedUser: IUsers) => void;
}

// Composant HobbiesForm
const HobbiesForm = ({
  hobbies,
  handleHobbyCheck,
  isEditingHobbies,
  setIsEditingHobbies,
}: {
  hobbies: { id: number; name: string; checked: boolean }[];
  handleHobbyCheck: (id: number) => void;
  isEditingHobbies: boolean;
  setIsEditingHobbies: (isEditing: boolean) => void;
}) => {
  return (
    <div>
      <div className="mt-6">
        <label className="text-primaryText font-semibold flex items-center gap-2">
          <input
            type="checkbox"
            checked={isEditingHobbies}
            onChange={() => setIsEditingHobbies(!isEditingHobbies)}
            className="mr-2"
          />
          Je veux modifier mes centres d'intérêt
        </label>
      </div>
      {isEditingHobbies && (
        <div className="mt-6 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8">
          {hobbies.map((hobby) => (
            <div key={hobby.id} className="flex items-center">
              <input
                id={`hobby-${hobby.id}`}
                type="checkbox"
                checked={hobby.checked}
                onChange={() => handleHobbyCheck(hobby.id)}
                className="h-4 w-4"
              />
              <label
                htmlFor={`hobby-${hobby.id}`}
                className="ml-3 block text-md font-medium text-primaryText"
              >
                {hobby.name}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function EditProfileModal({
  isOpen,
  onClose,
  user,
  onUpdate,
}: EditProfileModalProps) {
  const [formData, setFormData] = useState<IUsers>({
    name: user.name,
    alt: user.alt,
    age: user.age,
    picture: user.picture || '',
    birth_date: user.birth_date || '',
    gender: user.gender || '',
    description: user.description || '',
    hobbies: user.hobbies || [],
    new_password: '',
    old_password: '',
    repeat_new_password: '',
  });

  const [loading, setLoading] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isEditingHobbies, setIsEditingHobbies] = useState(false);
  const [hobbies, setHobbies] = useState<{ id: number, name: string, checked: boolean }[]>([]); 
  const [, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(`Changement de champ: ${name} = ${value}`);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleHobbyCheck = (id: number) => {
    console.log('Hobby Check:', id);
    setHobbies((prevHobbies) =>
      prevHobbies.map((hobby) =>
        hobby.id === id ? { ...hobby, checked: !hobby.checked } : hobby
      )
    );
  };

  useEffect(() => {
    const fetchHobbies = async () => {
      try {
        const response = await axios.get('/public/hobbies'); 
        console.log('Réponse de l\'API:', response);
        const fetchedHobbies = response.data.map((hobby: any) => ({
          id: hobby.id,
        name: hobby.name,
          checked: false,//Initialiser les hobbies comme non cochés
        }));
        setHobbies(fetchedHobbies);
      } catch (error) {
        setError('Une erreur est survenue lors de la récupération des hobbies.');
      }
    };
  
    fetchHobbies();
  }, []);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Données soumises:', formData);
    setLoading(true);
    setError(null);

    // Vérifier que les nouveaux mots de passe correspondent
    if (isChangingPassword && formData.new_password !== formData.repeat_new_password) {
      setError('Les mots de passe ne correspondent pas.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.patch('/private/users/me', formData);
      onUpdate(response.data);
      onClose();
    } catch (error) {
      setError('Erreur lors de la mise à jour du profil');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal-custom">
      <div className="w-full min-h-screen flex items-center">
      <div className="p-6 bg-white border-2 border-black rounded-lg shadow-xl max-w-lg mx-auto">
        <div className="pt-6 px-6">
          <div className="flex flex-col md:flex-row gap-6">

            {/* Image de profil */}
            <div className="flex-shrink-0 w-full md:w-2/3">
              <img
                src={formData.picture}
                alt="Profile"
                className="object-cover rounded-lg shadow-xl w-full h-100"
              />
              <label className="block text-primaryText font-semibold mt-6">Modifier la photo:</label>
              <input
                type="text"
                name="picture"
                value={formData.picture}
                onChange={handleInputChange}
                placeholder="URL de l'image de profil"
                className="mt-4 p-2 border rounded-lg w-full"
              />
            </div>

            {/* Détails du profil */}
            <div className="flex-grow md:w-2/3">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                  
                  <label className="block text-primaryText font-semibold mt-6">Genre:</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="p-2 border rounded-lg w-full"
                  >
                    <option value="">Sélectionner...</option>
                    <option value="male">Homme</option>
                    <option value="female">Femme</option>
                    <option value="other">Autre</option>
                  </select>

                  <label className="block text-primaryText font-semibold mt-6">Description:</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Entrez une description"
                    className="p-2 border rounded-lg w-full h-72"
                  />

                  {/* Utilisation du composant HobbiesForm */}
                  <HobbiesForm
                    hobbies={hobbies}
                    handleHobbyCheck={handleHobbyCheck}
                    isEditingHobbies={isEditingHobbies}
                    setIsEditingHobbies={setIsEditingHobbies}
                  />

                  {/* Case à cocher pour modifier le mot de passe */}
                  <div className="mt-6">
                    <label className="text-primaryText font-semibold flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isChangingPassword}
                        onChange={() => setIsChangingPassword(!isChangingPassword)}
                        className="mr-4"
                      />
                      Je veux modifier mon mot de passe
                    </label>
                  </div>

                  {isChangingPassword && (
                    <>
                      <label className="block text-primaryText font-semibold mt-6">Ancien mot de passe:</label>
                      <input
                        type="password"
                        name="old_password"
                        value={formData.old_password}
                        onChange={handleInputChange}
                        placeholder="Entrez votre ancien mot de passe"
                        className="p-2 border rounded-lg w-full"
                      />

                      <label className="block text-primaryText font-semibold mt-6">Nouveau mot de passe:</label>
                      <input
                        type="password"
                        name="new_password"
                        value={formData.new_password}
                        onChange={handleInputChange}
                        placeholder="Entrez votre nouveau mot de passe"
                        className="p-2 border rounded-lg w-full"
                      />

                      <label className="block text-primaryText font-semibold mt-6">Répétez le nouveau mot de passe:</label>
                      <input
                        type="password"
                        name="repeat_new_password"
                        value={formData.repeat_new_password}
                        onChange={handleInputChange}
                        placeholder="Répétez votre nouveau mot de passe"
                        className="p-2 border rounded-lg w-full"
                      />
                    </>
                  )}

                  {/* Bouton de soumission */}
                  <form onSubmit={handleSubmit}>
  {/* Autres champs du formulaire */}

  {/* Boutons de validation */}
  <div className="flex justify-between mt-6 gap-6">
    <button
      type="button"
      onClick={onClose}
      className="w-full bg-buttonGreen font-semibold text-primaryText py-2 px-4 rounded-lg shadow-md hover:bg-gray-400"
    >
      Fermer
    </button>
    <button
      type="submit"
      disabled={loading}
      className="w-full bg-buttonGreen font-semibold text-primaryText py-2 px-4 rounded-lg shadow-md hover:bg-primaryDark"
    >
      {loading ? 'Enregistrement...' : 'Enregistrer les modifications'}
    </button>
  </div>
</form>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </Modal>
  );
}