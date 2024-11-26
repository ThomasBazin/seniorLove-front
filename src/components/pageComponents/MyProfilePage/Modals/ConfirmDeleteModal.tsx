import ReactModal from 'react-modal';
import DefaultBtn from '../../../standaloneComponents/Button/DefaultBtn';

interface ConfirmDeleteModalProps {
  setOpenedModal: React.Dispatch<React.SetStateAction<string | null>>;
  handleConfirmDelete: (
    event: React.FormEvent<HTMLFormElement>
  ) => Promise<void>;
  handleCancelDelete: () => void;
  deleteError: string | null;
}

export default function ConfirmDeleteModal({
  setOpenedModal,
  handleConfirmDelete,
  handleCancelDelete,
  deleteError,
}: ConfirmDeleteModalProps) {
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
      <div className="flex flex-col text-center gap-3 text-primaryText">
        <p className="flex flex-col">
          Êtes-vous sûr de vouloir supprimer votre compte ?
          <span className="text-red-500 font-medium">
            Cette action est irréversible.
          </span>
        </p>
        <form className="mt-4" onSubmit={(event) => handleConfirmDelete(event)}>
          <label
            htmlFor="password"
            className="flex text-base font-medium leading-6 text-left"
          >
            Veuillez entrer votre mot de passe pour confirmer la suppression de
            votre compte :
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Votre mot de passe"
            className="rounded-md shadow-sm border block w-full mt-2 bg-transparent py-1.5 p-2 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            required
          />
          {deleteError && (
            <p className="text-red-500 font-medium mt-2">{deleteError}</p>
          )}
          <div className="mt-4 flex gap-2">
            <DefaultBtn
              btnType="submit"
              btnText="Oui, supprimer"
              btnDelete
              btnModalDelete
            />

            <DefaultBtn
              btnText="Annuler"
              onClick={handleCancelDelete}
              btnModalDelete
            />
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-4 mt-4" />
    </ReactModal>
  );
}
