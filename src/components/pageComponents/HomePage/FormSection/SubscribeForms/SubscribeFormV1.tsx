import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import DefaultBtn from '../../../../standaloneComponents/Button/DefaultBtn';
import Logo from '/img/logo-text-seniorlove.webp';
import { IRegisterForm } from '../../../../../@types/IRegisterForm';

interface SubscribeFormV1Props {
  formInfos: IRegisterForm | undefined;
  setIsFirstFormValidated: React.Dispatch<React.SetStateAction<boolean>>;
  fillFormInfos: (incomingInfos: object) => void;
}

export default function SubscribeFormV1({
  formInfos,
  setIsFirstFormValidated,
  fillFormInfos,
}: SubscribeFormV1Props) {
  // STATE 1 : name input value
  const [nameInputValue, setNameInputValue] = useState<undefined | string>(
    undefined
  );

  // STATE 2 : gender input value
  const [genderInputValue, setGenderInputValue] = useState<undefined | string>(
    undefined
  );

  // STATE 3 : birth_date input value
  const [birthDateInputValue, setBirthDateInputValue] = useState<
    undefined | string
  >(undefined);

  // STATE 4 : error
  const [error, setError] = useState<string | undefined>(undefined);

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInputValue(undefined);
    setNameInputValue(e.currentTarget.value);
  };

  const handleGenderInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenderInputValue(e.currentTarget.value);
  };

  const handleBirthDateInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBirthDateInputValue(e.currentTarget.value);
  };

  const handleValidateFormV1 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rawFormData = Object.fromEntries(new FormData(e.currentTarget));
    const { name, gender, birth_date } = rawFormData;

    if (!name) {
      return setError('Le champs prénom est obligatoire !');
    }

    if (!gender) {
      return setError('Merci de renseigner votre genre !');
    }

    if (!birth_date) {
      return setError('Merci de renseigner votre date de naissance !');
    }

    const formV1Infos = {
      name: rawFormData.name,
      gender: rawFormData.gender,
      birth_date: rawFormData.birth_date,
    };

    fillFormInfos(formV1Infos);
    setIsFirstFormValidated(true);
  };

  useEffect(() => {
    if (formInfos) {
      setNameInputValue(formInfos.name);
      setGenderInputValue(formInfos.gender);
      setBirthDateInputValue(formInfos.birth_date);
    }
  }, [formInfos]);

  return (
    <div className="bg-white opacity-90 px-10 pb-10 pt-4 rounded-xl shadow-md my-10 mx-4 md:mx-auto md:my-0">
      <div className="flex flex-col items-center justify-center mb-4">
        <img src={Logo} alt="" className="max-w-44 mb-4" />
      </div>
      <p className="mb-4 text-lg text-primaryText font-semibold text-center uppercase">
        Inscription
      </p>
      <form
        className="text-primaryText"
        onSubmit={(e) => handleValidateFormV1(e)}
      >
        <label htmlFor="name" className="flex flex-col mb-4">
          Prénom
          <input
            type="text"
            placeholder="Prénom"
            name="name"
            id="name"
            className="rounded-lg p-2 border border-primaryGrey"
            value={nameInputValue}
            onChange={(e) => handleNameInputChange(e)}
            required
          />
        </label>

        <label htmlFor="gender" className="flex flex-col mb-4">
          Je suis
          <select
            name="gender"
            id="gender"
            className="rounded-lg p-2 border border-primaryGrey"
            value={genderInputValue}
            onChange={(e) => handleGenderInputChange(e)}
            required
          >
            <option value="male">Un homme</option>
            <option value="female">Une femme</option>
            <option value="other">Autres</option>
          </select>
        </label>

        <label htmlFor="birthDate" className="mb-4">
          Date de naissance
          <input
            type="date"
            name="birth_date"
            id="birthDate"
            className="w-full text-center rounded-lg p-2 border border-primaryGrey"
            value={birthDateInputValue}
            onChange={(e) => handleBirthDateInputChange(e)}
            required
          />
        </label>

        {error && (
          <div className="text-secondaryPink flex justify-center mt-6">
            <p>{error}</p>
          </div>
        )}

        <div className="flex justify-center mt-6 mb-2">
          <DefaultBtn btnType="submit" btnText="Valider" />
        </div>
        <div className="connexion_paragraph text-primaryText text-center text-base mb-4">
          <p>
            Deja membre? Connectez-vous{' '}
            <Link to="/login" className="text-secondaryPink">
              ici
            </Link>
            .
          </p>
        </div>
        <div className="step_paragraph text-primaryText text-center text-sm">
          <p>Etape 1/3: Informations personelles</p>
        </div>
      </form>
    </div>
  );
}
