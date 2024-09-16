import ReactModal from 'react-modal';
import { IUsers } from '../../../../@types/IUsers';

interface EditImageModalProps {
  isImageModalOpen: boolean;
  setIsImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUsers;
}

export default function EditImageModal({
  isImageModalOpen,
  setIsImageModalOpen,
  user,
}: EditImageModalProps) {
  return (
    <ReactModal
      isOpen={isImageModalOpen}
      onRequestClose={() => setIsImageModalOpen(false)}
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
        Changez votre image
      </h3>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center">
            <img
              src={user.picture} // Replace with actual image path
              alt="Old Image"
              className="w-1/2 object-cover rounded-md border border-gray-300"
            />
            <p className="mt-2 text-gray-600">Ancienne image</p>
          </div>

          <div className="flex flex-col items-center">
            <input
              type="file"
              id="new-image"
              className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 mb-2"
            />
            {/* <img
              id="new-image-preview"
              src="#" // Placeholder image, will be updated with the selected file
              alt="New Image"
              className="w-32 h-32 object-cover rounded-md border border-gray-300"
            /> */}
            <p className="mt-2 text-gray-600">Nouvelle image</p>
          </div>
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
