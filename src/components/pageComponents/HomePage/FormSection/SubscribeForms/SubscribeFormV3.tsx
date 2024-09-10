import { useState } from 'react';
import DefaultBtn from '../../../../standaloneComponents/Button/DefaultBtn';

interface SubscribeFormV3Props {
  onPreviousClick: () => void;
  fillFormInfos: (incomingInfos: object) => void;
  setIsThirdFormValidated: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGlobalFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

function SubscribeFormV3({
  onPreviousClick,
  fillFormInfos,
  setIsThirdFormValidated,
  setIsGlobalFormSubmitted,
}: SubscribeFormV3Props) {
  // STATE 1 : error
  const [error, setError] = useState<null | string>(null);

  const formInputs = [
    {
      label: 'Adresse e-mail',
      inputType: 'e-mail',
      placeholder: 'exemple@domaine.com',
      id: 'email',
      type: 'email',
      name: 'email',
    },
    {
      label: 'Mot de passe',
      inputType: 'password',
      placeholder: 'ex@mple2024!',
      id: 'password',
      type: 'password',
      name: 'password',
    },
    {
      label: 'Confirmer mot de passe',
      inputType: 'password',
      placeholder: 'ex@mple2024!',
      id: 'repeatPassword',
      type: 'password',
      name: 'repeatPassword',
    },
  ];

  const handleValidateFormV3 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rawFormData = Object.fromEntries(new FormData(e.currentTarget));
    const { email, password, repeatPassword } = rawFormData;
    if (!email) {
      setError("L'email est obligatoire.");
    } else if (!password || !repeatPassword) {
      setError('Veuillez indiquer votre mot de passe et le confirmer.');
    } else if (password.toString().length < 12) {
      setError('Le mot de passe doit contenir au moins 12 caractères.');
    } else if (password !== repeatPassword) {
      setError('Le mot de passe et sa confirmation doivent être identiques.');
    } else {
      const formV3Infos = {
        email,
        password,
        repeat_password: repeatPassword,
      };
      fillFormInfos(formV3Infos);
      setIsThirdFormValidated(true);
      setIsGlobalFormSubmitted(true);
    }
  };

  return (
    <div className="bg-white opacity-90 p-10 rounded-xl shadow-md max-w-xl my-10 mx-4 md:mx-auto md:my-0">
      <form onSubmit={(e) => handleValidateFormV3(e)}>
        <fieldset className="mb-4">
          <legend className="text-xl text-center font-semibold leading-6 text-primaryText mb-8">
            Il ne vous reste plus qu&apos;une étape pour finaliser votre
            inscription !
          </legend>
          {formInputs.map((input) => (
            <div className="mb-4" key={input.id}>
              <label
                htmlFor={input.id}
                className="block text-lg font-medium leading-6 text-primaryText"
              >
                {input.label}
              </label>
              <div className="mt-2">
                <div className="flex bg-white rounded-md shadow-sm border">
                  <input
                    id={input.id}
                    name={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    className="block w-full border-0 bg-transparent py-1.5 p-2 text-primaryText placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
            </div>
          ))}
        </fieldset>

        {error && (
          <div className="text-secondaryPink text-center flex justify-center mt-6">
            <p>{error}</p>
          </div>
        )}

        <div className="flex justify-center mt-6 mb-2">
          <DefaultBtn btnType="submit" btnText="Valider" />
        </div>
        <div className="step_paragraph text-primaryText flex justify-center">
          <p>Etape 3/3: Validation inscription</p>
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

export default SubscribeFormV3;
