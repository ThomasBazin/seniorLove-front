import ReactModal from 'react-modal';
import { useEffect, useState } from 'react';
import { IUsers } from '../../../../@types/IUsers';
import DefaultBtn from '../../../standaloneComponents/Button/DefaultBtn';
import { IHobby } from '../../../../@types/IHobby';
import Loader from '../../../standaloneComponents/Loader/Loader';
import axios from '../../../../axios';

interface EditHobbyModalProps {
  isHobbyModalOpen: boolean;
  setIsHobbyModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUsers;
  setEditedProfile: React.Dispatch<React.SetStateAction<Partial<IUsers>>>;
  setNewHobbies: React.Dispatch<React.SetStateAction<IHobby[]>>;
}

export default function EditHobbyModal({
  isHobbyModalOpen,
  setIsHobbyModalOpen,
  setEditedProfile,
  setNewHobbies,
  user,
}: EditHobbyModalProps) {
  const [hobbies, setHobbies] = useState<IHobby[]>([]);
  const [selectedHobbies, setSelectedHobbies] = useState<number[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHobbies = async () => {
    setError(null);

    try {
      const response = await axios.get('/public/hobbies');
      if (response.data) {
        const data = await response.data;
        setHobbies(data);
        setSelectedHobbies(user.hobbies.map((hobby) => hobby.id));
      } else {
        throw new Error('Failed to fetch hobbies');
      }
    } catch (err) {
      setError('Error updating hobbies');
      console.error('Error updating hobbies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckboxChange = (hobbyId: number) => {
    setSelectedHobbies((prevSelectedHobbies) =>
      prevSelectedHobbies.includes(hobbyId)
        ? prevSelectedHobbies.filter((id) => id !== hobbyId)
        : [...prevSelectedHobbies, hobbyId]
    );
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);
      setError(null);
      setEditedProfile((prev) => ({
        ...prev,
        hobbies: hobbies.filter((hobby) => selectedHobbies.includes(hobby.id)),
      }));
      setNewHobbies(
        hobbies.filter((hobby) => selectedHobbies.includes(hobby.id))
      );
      setSelectedHobbies(selectedHobbies);
      setIsHobbyModalOpen(false);
    } catch (err) {
      setError('Error updating hobbies');
      console.error('Error updating hobbies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isHobbyModalOpen) {
      fetchHobbies();
    }
  }, []);

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
        Modifiez vos centres d’intérêt
      </h3>
      <div className="flex flex-col gap-3 h-52 md:h-fit overflow-y-scroll md:overflow-y-auto">
        {error && (
          <div className="text-red-500 bg-red-100 p-2 rounded-md">{error}</div>
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {hobbies.map((hobby) => (
              <div key={hobby.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`hobby-${hobby.id}`}
                  checked={selectedHobbies.includes(hobby.id)}
                  onChange={() => handleCheckboxChange(hobby.id)}
                  className="form-checkbox h-5 w-5 text-primaryPink"
                />
                <label htmlFor={`hobby-${hobby.id}`} className="text-gray-700">
                  {hobby.name}
                </label>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <DefaultBtn btnText="Valider" onClick={handleSave} />
      </div>
    </ReactModal>
  );
}

// import ReactModal from 'react-modal';
// import { useEffect, useState } from 'react';
// import { IUsers } from '../../../../@types/IUsers';
// import DefaultBtn from '../../../standaloneComponents/Button/DefaultBtn';
// import { IHobby } from '../../../../@types/IHobby';
// import Loader from '../../../standaloneComponents/Loader/Loader';
// import axios from '../../../../axios';

// interface EditHobbyModalProps {
//   isHobbyModalOpen: boolean;
//   setIsHobbyModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   user: IUsers;
//   setEditedProfile: React.Dispatch<React.SetStateAction<Partial<IUsers>>>;
//   setNewHobbies: React.Dispatch<React.SetStateAction<IHobby[]>>;
//   newHobbies: IHobby[];
// }

// export default function EditHobbyModal({
//   isHobbyModalOpen,
//   setIsHobbyModalOpen,
//   setEditedProfile,
//   setNewHobbies,
//   newHobbies,
//   user,
// }: EditHobbyModalProps) {
//   const [hobbies, setHobbies] = useState<IHobby[]>([]);
//   const [selectedHobbies, setSelectedHobbies] = useState<number[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [initialHobbies, setInitialHobbies] = useState<number[]>(
//     user.hobbies.map((hobby) => hobby.id)
//   );

//   useEffect(() => {
//     if (isHobbyModalOpen) {
//       fetchHobbies();
//     }
//   }, [isHobbyModalOpen]);

//   useEffect(() => {
//     // Update selectedHobbies with the IDs of the newly added hobbies
//     setSelectedHobbies(newHobbies.map((hobby) => hobby.id));
//   }, [newHobbies]);

//   const fetchHobbies = async () => {
//     setError(null);
//     try {
//       const response = await axios.get('/public/hobbies');
//       if (response.data) {
//         const data = response.data;
//         setHobbies(data);
//       } else {
//         throw new Error('Failed to fetch hobbies');
//       }
//     } catch (err) {
//       setError('Error updating hobbies');
//       console.error('Error updating hobbies:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleCheckboxChange = (hobbyId: number) => {
//     setSelectedHobbies((prevSelectedHobbies) =>
//       prevSelectedHobbies.includes(hobbyId)
//         ? prevSelectedHobbies.filter((id) => id !== hobbyId)
//         : [...prevSelectedHobbies, hobbyId]
//     );
//     setInitialHobbies((prevInitialHobbies) =>
//       prevInitialHobbies.includes(hobbyId)
//         ? prevInitialHobbies.filter((id) => id !== hobbyId)
//         : [...prevInitialHobbies, hobbyId]
//     );
//   };

//   const handleSave = async () => {
//     try {
//       setIsLoading(true);
//       setError(null);
//       const updatedHobbies =
//         selectedHobbies.length > 0
//           ? hobbies.filter((hobby) => selectedHobbies.includes(hobby.id))
//           : hobbies.filter((hobby) => initialHobbies.includes(hobby.id));

//       setEditedProfile((prev) => ({
//         ...prev,
//         hobbies: updatedHobbies,
//       }));
//       setNewHobbies(updatedHobbies);
//       setIsHobbyModalOpen(false);
//     } catch (err) {
//       setError('Error updating hobbies');
//       console.error('Error updating hobbies:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <ReactModal
//       isOpen={isHobbyModalOpen}
//       onRequestClose={() => setIsHobbyModalOpen(false)}
//       style={{
//         content: {
//           width: '80vw',
//           height: 'fit-content',
//           maxWidth: '500px',
//           margin: 'auto',
//           padding: '20px',
//           borderRadius: '8px',
//           backgroundColor: 'white',
//           boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//         },
//         overlay: {
//           backgroundColor: 'rgba(0, 0, 0, 0.5)' /* Customize overlay color */,
//         },
//       }}
//     >
//       <h3 className="text-xl font-semibold text-secondaryPink mb-4">
//         Modifiez vos centres d’intérêt
//       </h3>
//       <div className="flex flex-col gap-3 h-52 md:h-fit overflow-y-scroll md:overflow-y-auto">
//         {error && (
//           <div className="text-red-500 bg-red-100 p-2 rounded-md">{error}</div>
//         )}
//         {isLoading ? (
//           <Loader />
//         ) : (
//           <>
//             {hobbies.map((hobby) => (
//               <div key={hobby.id} className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   id={`hobby-${hobby.id}`}
//                   checked={
//                     selectedHobbies.length > 0
//                       ? selectedHobbies.includes(hobby.id)
//                       : initialHobbies.includes(hobby.id)
//                   }
//                   onChange={() => handleCheckboxChange(hobby.id)}
//                   className="form-checkbox h-5 w-5 text-primaryPink"
//                 />
//                 <label htmlFor={`hobby-${hobby.id}`} className="text-gray-700">
//                   {hobby.name}
//                 </label>
//               </div>
//             ))}
//           </>
//         )}
//       </div>
//       <div className="flex flex-col gap-4 mt-4">
//         <DefaultBtn btnText="Valider" onClick={handleSave} />
//       </div>
//     </ReactModal>
//   );
// }
