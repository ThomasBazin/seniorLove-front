import { useState } from 'react';
import DefaultBtn from '../../standaloneComponents/Button/DefaultBtn';

export default function FilterPanel({
  setFilter,
}: {
  setFilter: (eventData: any) => void;
}) {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  // afficher/cacher le formulaire de recherche
  const toggleFilterVisibility = () => {
    setIsFilterVisible((prevState) => !prevState);
  };

  function changeFilter(name: string, value: any) {
    setFilter((prevFilter:any) =>
      prevFilter.map((filterValue: any) => ({
        ...filterValue,
        [name]: value,
      }))
    );
  }

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
            onChange={(e) => changeFilter('gender', e.currentTarget.value)}
          >
            <option value="">Choisir..</option>
            <option value="female">Femme</option>
            <option value="male">Homme</option>
            <option value="other">Autre</option>
            <option value="allGender">Tous</option>
          </select>
        </label>

        <label htmlFor="age" className="flex items-center gap-2">
          Age :
          <select
            name="age"
            id="age"
            className="rounded-lg p-2 border border-primaryGrey min-w-[150px]"
            onChange={(e) => changeFilter('age', e.currentTarget.value)}
          >
            <option value="">Choisir..</option>
            <option value="60">De 60 à 69 ans</option>
            <option value="70">De 70 à 79 ans</option>
            <option value="80">80 ans et plus</option>
            <option value="0">Tous les ages</option>
          </select>
        </label>
      </div>
    </div>
  );
}
