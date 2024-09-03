import React, { useState } from 'react';
import AgeDropdown from './AgeDropdown';

export default function SearchForm() {
  const [genders, setGenders] = useState({
    Femmes: false,
    Hommes: false,
    Autres: false,
    Tous: false,
  });

  const handleGenderChange = (gender: string) => {
    setGenders((prevGenders) => ({
      ...prevGenders,
      [gender]: !prevGenders[gender],
    }));
  };

  const genderArray = ['Femmes', 'Hommes', 'Autres', 'Tous'];
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md max-w-md">
      <form>
        <fieldset className="mb-4">
          <legend className="text-sm font-semibold leading-6 text-primaryText">
            Sexe :
          </legend>
          <div className="mt-6 flex items-center gap-4 flex-wrap">
            {genderArray.map((gender, index) => (
              <div key={index} className="flex items-center">
                <input
                  id={`hobby-${index}`}
                  type="checkbox"
                  checked={genders[gender]}
                  onChange={() => handleGenderChange(gender)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor={`gender-${index}`}
                  className="ml-3 block text-sm font-medium text-primaryText"
                >
                  {gender}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
        <fieldset className="mb-4">
          <legend className="text-sm font-semibold leading-6 text-primaryText">
            Age :
          </legend>
          <div className="flex gap-4 items-center">
            <AgeDropdown />
            <p> à </p>
            <AgeDropdown />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
