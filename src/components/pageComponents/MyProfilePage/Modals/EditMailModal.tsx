import ReactModal from 'react-modal';
import { IUsers } from '../../../../@types/IUsers';

interface EditMailModalProps {
  isEmailModalOpen: boolean;
  setIsEmailModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUsers;
}

export default function EditMailModal({
  isEmailModalOpen,
  setIsEmailModalOpen,
  user,
}: EditMailModalProps) {
  return (
    <ReactModal
      isOpen={isEmailModalOpen}
      onRequestClose={() => setIsEmailModalOpen(false)}
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
        Changer votre adresse e-mail
      </h3>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col gap-3">
          <label htmlFor="old-email" className="font-medium text-secondaryPink">
            Ancienne adresse e-mail
          </label>
          <input
            type="email"
            name="old-email"
            id="old-email"
            placeholder={user.email}
            className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="new-email" className="font-medium text-secondaryPink">
            Nouvelle adresse e-mail
          </label>
          <input
            type="email"
            name="new-email"
            id="new-email"
            placeholder="Entrez la nouvelle adresse e-mail"
            className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700"
          />
        </div>
        <button
          onClick={() => {
            /* Handle save email logic */
          }}
          className="bg-primaryPink text-white px-4 py-2 rounded-lg mt-4"
        >
          Sauvegarder
        </button>
      </div>
    </ReactModal>
  );
}
