import ReactModal from 'react-modal';
import { IUsers } from '../../../../@types/IUsers';

interface EditHobbyModalProps {
  isHobbyModalOpen: boolean;
  setIsHobbyModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUsers;
}

export default function EditHobbyModal({
  isHobbyModalOpen,
  setIsHobbyModalOpen,
  user,
}: EditHobbyModalProps) {
  return (
    <ReactModal
      isOpen={isHobbyModalOpen}
      onRequestClose={() => setIsHobbyModalOpen(false)}
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
      <h3 className="text-xl font-semibold text-secondaryPink mb-4">
        Changez vos hobbies
      </h3>
      <div className="flex flex-col gap-3">
        {user.hobbies.map((hobby) => (
          <div key={hobby.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`hobby-${hobby.id}`}
              //   checked={selectedHobbies.includes(hobby.id)}
              //   onChange={() => handleCheckboxChange(hobby.id)}
              className="form-checkbox h-5 w-5 text-primaryPink"
            />
            <label htmlFor={`hobby-${hobby.id}`} className="text-gray-700">
              {hobby.name}
            </label>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 mt-4">
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
