import { useState } from 'react';
import DefaultBtn from '../../standaloneComponents/Button/DefaultBtn';

export default function FilterPanel() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilterVisibility = () => {
    setIsFilterVisible((prevState) => !prevState);
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <DefaultBtn
        btnText={
          isFilterVisible
            ? 'Masquer les filtres de recherche'
            : 'Affiner votre recherche'
        }
        onClick={toggleFilterVisibility}
      />
      <div
        className={`flex flex-col lg:flex-row gap-6 lg:gap-20 items-center ${!isFilterVisible ? 'hidden' : 'block'}`}
      >
        <label htmlFor="gender" className="flex items-center gap-2">
          Genre :
          <select
            name="gender"
            id="gender"
            className="rounded-lg p-2 border border-primaryGrey min-w-[150px]"
          >
            <option value="">Choisir..</option>
            <option value="female">Femme</option>
            <option value="male">Homme</option>
            <option value="other">Autre</option>
            <option value="allGender">Tous</option>
          </select>
        </label>
        <label htmlFor="hobbiesFilter" className="flex gap-4">
          <input
            type="checkbox"
            name="hobbiesFilter"
            id="hobbiesFilter"
            defaultChecked
          />
          Centre d&apos;intérêt en commun
        </label>
        <label htmlFor="age" className="flex items-center gap-2">
          Age :
          <select
            name="age"
            id="age"
            className="rounded-lg p-2 border border-primaryGrey min-w-[150px]"
          >
            <option value="">Choisir..</option>
            <option value="sixty">De 60 à 69 ans</option>
            <option value="seventy">De 70 à 79 ans</option>
            <option value="eighty">80 ans et plus</option>
            <option value="allAge">Tous les ages</option>
          </select>
        </label>
      </div>
    </div>
  );
}
