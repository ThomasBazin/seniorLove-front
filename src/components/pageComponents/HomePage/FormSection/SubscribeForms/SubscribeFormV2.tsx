import React, { useState } from 'react';
import DefaultBtn from '../../../../standaloneComponents/Button/DefaultBtn';

interface SubscribeFormV2Props {
  setIsSecondFormValidated: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SubscribeFormV2({
  setIsSecondFormValidated,
}: SubscribeFormV2Props) {
  const [hobbies, setHobbies] = useState({
    'Voyage et découvertes': false,
    'Arts et culture': false,
    'Sport et bien-être': false,
    'Gastronomie et cuisine': false,
    'Musique et danse': false,
    'Bénévolat et engagement social': false,
    'Jeux et divertissement': false,
    'Technologie et innovation': false,
    'Spiritualité et bien-être intérieur': false,
    'Bricolage et loisirs créatifs': false,
    'Animaux et nature': false,
    'Histoire et patrimoine': false,
  });

  const handleHobbyChange = (hobby: string) => {
    setHobbies((prevHobbies) => ({
      ...prevHobbies,
      [hobby]: !prevHobbies[hobby],
    }));
  };

  const hobbyArray = [
    'Voyage et découvertes',
    'Arts et culture',
    'Sport et bien-être',
    'Gastronomie et cuisine',
    'Musique et danse',
    'Bénévolat et engagement social',
    'Jeux et divertissement',
    'Technologie et innovation',
    'Spiritualité et bien-être intérieur',
    'Bricolage et loisirs créatifs',
    'Animaux et nature',
    'Histoire et patrimoine',
  ];

  return (
    <div className="bg-white opacity-90 p-10 rounded-xl shadow-md max-w-xl my-10 mx-4 md:mx-auto md:my-0">
      <form>
        <fieldset className="mb-4">
          <legend className="text-xl font-semibold leading-6 text-primaryText">
            Afin de mieux vous connaître, veuillez sélectionner vos centres
            d&apos;intérêt parmi ces options:
          </legend>
          <div className="mt-6 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8">
            {hobbyArray.map((hobby, index) => (
              <div key={hobby} className="flex items-center">
                <input
                  id={`hobby-${index}`}
                  type="checkbox"
                  checked={hobbies[hobby]}
                  onChange={() => handleHobbyChange(hobby)}
                  className="h-4 w-4"
                />
                <label
                  htmlFor={`hobby-${index}`}
                  className="ml-3 block text-md font-medium text-primaryText"
                >
                  {hobby}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
        <div className="flex justify-center mt-6 mb-2">
          <DefaultBtn
            btnText="Valider"
            onClick={() => setIsSecondFormValidated(true)}
          />
        </div>
        <div className="step_paragraph text-primaryText flex justify-center">
          <p>Etape 2/3: Centres d’intérêt</p>
        </div>
      </form>
    </div>
  );
}
