import ReactModal from 'react-modal';

interface EditPasswordModalProps {
  isPasswordModalOpen: boolean;
  setIsPasswordModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditPasswordlModal({
  isPasswordModalOpen,
  setIsPasswordModalOpen,
}: EditPasswordModalProps) {
  return (
    <ReactModal
      isOpen={isPasswordModalOpen}
      onRequestClose={() => setIsPasswordModalOpen(false)}
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
        Changer votre mot de passe
      </h3>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="old-password"
            className="font-medium text-secondaryPink"
          >
            Mot de passe actuel
          </label>
          <input
            type="password"
            name="old-password"
            id="old-password"
            placeholder="Entrez votre mot de passe actuel"
            className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="new-password"
            className="font-medium text-secondaryPink"
          >
            Nouveau mot de passe
          </label>
          <input
            type="password"
            name="new-password"
            id="new-password"
            placeholder="Entrez le nouveau mot de passe"
            className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="confirm-password"
            className="font-medium text-secondaryPink"
          >
            Confirmez le nouveau mot de passe
          </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirmez le nouveau mot de passe"
            className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700"
          />
        </div>
        <button
          onClick={() => {
            /* Handle save password logic */
          }}
          className="bg-primaryPink text-white px-4 py-2 rounded-lg mt-4"
        >
          Sauvegarder
        </button>
      </div>
    </ReactModal>
  );
}
