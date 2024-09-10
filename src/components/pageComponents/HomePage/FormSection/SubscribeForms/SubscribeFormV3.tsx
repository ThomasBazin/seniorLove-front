import { useState, useEffect } from 'react';

import DefaultBtn from '../../../../standaloneComponents/Button/DefaultBtn';
import Logo from '/img/logo-text-seniorlove.webp';
import { IRegisterForm } from '../../../../../@types/IRegisterForm';

interface SubscribeFormV3Props {
  formInfos: IRegisterForm;
  setIsForm3Validated: React.Dispatch<React.SetStateAction<boolean>>;
  fillFormInfos: (incomingInfos: object) => void;
  onPreviousClick: () => void;
}

export default function SubscribeFormV3({
  formInfos,
  setIsForm3Validated,
  fillFormInfos,
  onPreviousClick,
}: SubscribeFormV3Props) {
  // STATE 1 : picture input value
  const [pictureInputValue, setPictureInputValue] = useState<string>('');

  // STATE 2 : description input value
  const [descriptionInputValue, setDescriptionInputValue] =
    useState<string>('');

  // STATE 3 : error
  const [error, setError] = useState<string | null>(null);

  const handlePictureInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPictureInputValue(e.currentTarget.value);
  };

  const handleDescriptionInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescriptionInputValue(e.currentTarget.value);
  };

  const handleValidateFormV1 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rawFormData = Object.fromEntries(new FormData(e.currentTarget));
    const { picture, description } = rawFormData;

    if (!picture) {
      setError("Veuillez indiquer l'URL de votre photo !");
    } else if (!description) {
      setError('Merci de renseigner votre description !');
    } else {
      const formV3Infos = {
        picture,
        description,
      };
      setError(null);
      fillFormInfos(formV3Infos);
      setIsForm3Validated(true);
    }
  };

  useEffect(() => {
    if (formInfos.picture && formInfos.description) {
      setPictureInputValue(formInfos.picture);
      setDescriptionInputValue(formInfos.description);
    }
  }, [formInfos]);

  return (
    <div className="bg-white opacity-90 px-10 pb-10 pt-4 rounded-xl shadow-md my-10 mx-4 md:mx-auto md:my-0">
      <div className="flex flex-col items-center justify-center mb-4">
        <img src={Logo} alt="" className="max-w-44 mb-4" />
      </div>
      <p className="mb-4 text-lg text-primaryText font-semibold text-center">
        Commencez à remplir votre profil
      </p>
      <form
        className="text-primaryText"
        onSubmit={(e) => handleValidateFormV1(e)}
      >
        <label htmlFor="name" className="flex flex-col mb-4">
          Votre photo
          <input
            type="url"
            placeholder="Url de votre photo"
            name="picture"
            id="picture"
            className="rounded-lg p-2 border border-primaryGrey"
            value={pictureInputValue}
            onChange={(e) => handlePictureInputChange(e)}
            required
          />
        </label>

        <label htmlFor="birthDate" className="mb-4">
          Présentez-vous en quelques lignes
          <textarea
            name="description"
            id="description"
            placeholder="Écrivez votre description ici"
            className="w-full rounded-lg p-2 border border-primaryGrey"
            value={descriptionInputValue}
            onChange={(e) => handleDescriptionInputChange(e)}
            required
          />
        </label>

        {error && (
          <div className="text-secondaryPink text-center flex justify-center mt-6">
            <p className="justify-self-center max-w-48">{error}</p>
          </div>
        )}

        <div className="flex justify-center mt-6 mb-2">
          <DefaultBtn btnType="submit" btnText="Valider" />
        </div>
        <div className="step_paragraph text-primaryText text-center text-sm">
          <p>Étape 3/4: Photo de profil et description</p>
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
