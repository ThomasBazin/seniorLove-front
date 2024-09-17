import { useState } from 'react';
import { IUsers } from '../../../../@types/IUsers';
import EditMailModal from './EditMailModal';
import EditPasswordModal from './EditPasswordModal'; // Import the password modal

interface EditEmailPasswordProps {
  user: IUsers;
  setEditedProfile: React.Dispatch<React.SetStateAction<Partial<IUsers>>>;
}

export default function EditMailPassword({
  user,
  setEditedProfile,
}: EditEmailPasswordProps) {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <button
        onClick={() => setIsEmailModalOpen(true)}
        className="text-secondaryPink text-center md:text-start px-4 py-2 rounded-lg w-fit"
      >
        Modifier l'adresse e-mail
      </button>
      <button
        onClick={() => setIsPasswordModalOpen(true)}
        className="text-secondaryPink text-center md:text-start px-4 py-2 rounded-lg w-fit"
      >
        Modifier le mot de passe
      </button>

      {/* Render modals based on state */}
      {isEmailModalOpen && (
        <EditMailModal
          isEmailModalOpen={isEmailModalOpen}
          setIsEmailModalOpen={setIsEmailModalOpen}
          user={user}
          setEditedProfile={setEditedProfile}
        />
      )}
      {isPasswordModalOpen && (
        <EditPasswordModal
          isPasswordModalOpen={isPasswordModalOpen}
          setIsPasswordModalOpen={setIsPasswordModalOpen}
          setEditedProfile={setEditedProfile}
          user={user}
        />
      )}
    </div>
  );
}
