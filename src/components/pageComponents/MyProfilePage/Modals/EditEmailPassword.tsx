import { useState } from 'react';
import { IUsers } from '../../../../@types/IUsers';
import EditMailModal from './EditMailModal';
import EditPasswordModal from './EditPasswordModal'; // Import the password modal
import editLogo from '/icon/edit.svg';

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
    <div className="flex flex-row justify-center gap-6">
      <button
        type="button"
        onClick={() => setIsEmailModalOpen(true)}
        className="text-secondaryPink text-center md:text-start px-4 rounded-lg w-fit font-semibold"
      >
        <div className="flex gap-2 self items-center">
          <img src={editLogo} alt="edit" className="w-6 h-6" />
          Modifier l&apos;adresse e-mail
        </div>
      </button>
      <button
        type="button"
        onClick={() => setIsPasswordModalOpen(true)}
        className="text-secondaryPink hover:text-secondaryPinkHover text-center md:text-start px-4 py-2 rounded-lg w-fit font-semibold"
      >
        <div className="flex gap-2 self items-center">
          <img src={editLogo} alt="edit" className="w-6 h-6" />
          Modifier le mot de passe
        </div>
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
        />
      )}
    </div>
  );
}
