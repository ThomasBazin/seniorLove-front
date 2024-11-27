/* eslint-disable jsx-a11y/label-has-associated-control */
import ReactModal from 'react-modal';
import { useState } from 'react';
import DefaultBtn from '../../../standaloneComponents/Button/DefaultBtn';

interface EditImageModalProps {
  setOpenedModal: React.Dispatch<React.SetStateAction<string | null>>;
  picture: string;

  setPictureFile: React.Dispatch<React.SetStateAction<File | null>>;
  setModifiedPhotoUrl: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function EditImageModal({
  setOpenedModal,
  picture,
  setModifiedPhotoUrl,
  setPictureFile,
}: EditImageModalProps) {
  // STATE 17 : preview URL
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setPictureFile(file);
    }
    // Create a preview of the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file as Blob);
    }
  };

  const validateImage = () => {
    setModifiedPhotoUrl(previewUrl);
    setPreviewUrl(null);
    setOpenedModal(null);
  };

  const handleImageModalClose = () => {
    setPictureFile(null);
    setOpenedModal(null);
  };

  return (
    <ReactModal
      isOpen
      onRequestClose={handleImageModalClose}
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
      <h3 className="text-xl text-center font-semibold text-secondaryPink">
        Changez votre image
      </h3>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center">
            <img
              src={picture}
              alt="Ancienne"
              className="w-1/2 object-cover rounded-md border border-gray-300"
            />
            <p className="mt-2 text-gray-600">Ancienne photo</p>
          </div>

          <div className="flex flex-col items-center">
            <label
              htmlFor="doc"
              className="flex items-center px-8 py-1 md:py-3 gap-3 rounded-3xl border border-gray-300 border-dashed bg-gray-100 cursor-pointer"
            >
              <img
                className="h-6 w-auto"
                src="/icon/upload.svg"
                alt="Télécharger"
              />
              <div className="space-y-2">
                <h4 className="text-sm md:text-base font-semibold text-gray-700 text-center">
                  Charger une nouvelle photo
                </h4>
              </div>
              <input
                type="file"
                id="doc"
                name="doc"
                accept="png, jpg"
                hidden
                onChange={handleFileChange}
              />
            </label>
            {previewUrl && (
              <>
                <p className="mt-2 text-gray-600">Nouvelle photo</p>
                <img
                  src={previewUrl}
                  alt="Nouvelle"
                  className="w-1/2 object-cover rounded-md shadow border border-gray-300"
                />
              </>
            )}
          </div>
        </div>
        <div className="flex">
          <DefaultBtn
            btnText="Valider"
            btnValidate
            btnModalPicture
            onClick={() => validateImage()}
          />
        </div>
      </div>
    </ReactModal>
  );
}
