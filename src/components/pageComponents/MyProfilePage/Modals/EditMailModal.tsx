import ReactModal from 'react-modal';
import { useState } from 'react';
import { IUsers } from '../../../../@types/IUsers';
import DefaultBtn from '../../../standaloneComponents/Button/DefaultBtn';

interface EditMailModalProps {
  setOpenedModal: React.Dispatch<React.SetStateAction<string | null>>;
  email: string;
  setEditedProfile: React.Dispatch<React.SetStateAction<Partial<IUsers>>>;
}

export default function EditMailModal({
  setOpenedModal,
  email,
  setEditedProfile,
}: EditMailModalProps) {
  const [newEmail, setNewEmail] = useState('');

  const validateEmail = async () => {
    setEditedProfile((prev) => ({ ...prev, email: newEmail }));
    setOpenedModal(null);
  };

  return (
    <ReactModal
      isOpen
      onRequestClose={() => setOpenedModal(null)}
      style={{
        content: {
          width: '80vw',
          height: 'fit-content',
          maxWidth: '500px',
          margin: 'auto',
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: 'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)' /* Customize overlay color */,
        },
      }}
    >
      <h3 className="text-xl font-semibold text-secondaryPink">
        Changez votre adresse e-mail
      </h3>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col gap-3">
          <label htmlFor="old-email" className="font-medium text-secondaryPink">
            Ancienne adresse e-mail
          </label>
          <p className="text-gray-700">{email}</p>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="new-email" className="font-medium text-secondaryPink">
            Nouvelle adresse e-mail
          </label>
          <input
            type="email"
            name="new-email"
            id="new-email"
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Entrez la nouvelle adresse e-mail"
            className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700"
          />
        </div>
        <DefaultBtn btnText="Valider" onClick={() => validateEmail()} />
      </div>
    </ReactModal>
  );
}
