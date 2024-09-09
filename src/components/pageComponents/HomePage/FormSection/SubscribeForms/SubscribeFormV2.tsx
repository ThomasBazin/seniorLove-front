import React, { useEffect, useState } from 'react';
import DefaultBtn from '../../../../standaloneComponents/Button/DefaultBtn';
import axios from '../../../../../axios';
import { IHobby } from '../../../../../@types/IHobby';

interface SubscribeFormV2Props {
  setIsSecondFormValidated: React.Dispatch<React.SetStateAction<boolean>>;
  onPreviousClick: () => void;
  fillFormInfos: (incomingInfos: object) => void;
}

export default function SubscribeFormV2({
  setIsSecondFormValidated,
  onPreviousClick,
  fillFormInfos,
}: SubscribeFormV2Props) {
  // STATE 1 : hobbies
  const [hobbies, setHobbies] = useState<IHobby[]>([]);

  const handleValidateFormV2 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userHobbies = hobbies
      .filter((hobby) => hobby.checked)
      .map((hobby) => hobby.id);

    fillFormInfos({ hobbies: userHobbies });
    setIsSecondFormValidated(true);
  };

  const handleHobbyCheck = (id: number) => {
    setHobbies((previousHobbies) =>
      previousHobbies.map((hobby) =>
        hobby.id === id ? { ...hobby, checked: !hobby.checked } : hobby
      )
    );
  };

  useEffect(() => {
    const fetchAndSaveHobbies = async () => {
      try {
        const result = await axios.get('/public/hobbies');
        const hobbiesData = result.data.map((hobby: IHobby) => {
          return { ...hobby, checked: false };
        });
        setHobbies(hobbiesData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchAndSaveHobbies();
  }, []);

  return (
    <div className="bg-white opacity-90 p-10 rounded-xl shadow-md max-w-xl my-10 mx-4 md:mx-auto md:my-0">
      <form onSubmit={(e) => handleValidateFormV2(e)}>
        <fieldset className="mb-4">
          <legend className="text-xl font-semibold leading-6 text-primaryText">
            Afin de mieux vous connaître, veuillez sélectionner vos centres
            d&apos;intérêt parmi ces options:
          </legend>
          <div className="mt-6 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8">
            {hobbies.map((hobby) => (
              <div key={hobby.id} className="flex items-center">
                <input
                  id={`hobby-${hobby.id}`}
                  type="checkbox"
                  checked={hobby.checked}
                  onChange={() => handleHobbyCheck(hobby.id)}
                  className="h-4 w-4"
                />
                <label
                  htmlFor={`hobby-${hobby.id}`}
                  className="ml-3 block text-md font-medium text-primaryText"
                >
                  {hobby.name}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
        <div className="flex justify-center mt-6 mb-2">
          <DefaultBtn btnType="submit" btnText="Valider" />
        </div>
        <div className="step_paragraph text-primaryText flex justify-center">
          <p>Etape 2/3: Centres d’intérêt</p>
        </div>
        <div className="flex justify-center text-secondaryPink mt-1">
          <button type="button" onClick={onPreviousClick}>
            Revenir à l&#39;étape précédente
          </button>
        </div>
      </form>
    </div>
  );
}
