import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import axios from '../../../../axios';

import SubscribeFormV1 from './SubscribeForms/SubscribeFormV1';
import SubscribeFormV2 from './SubscribeForms/SubscribeFormV2';
import SubscribeFormV3 from './SubscribeForms/SubscribeFormV3';
import EndSection from './EndSection';

import { IHobby } from '../../../../@types/IHobby';
import { IRegisterForm } from '../../../../@types/IRegisterForm';

interface FormSectionProps {
  setIsFirstFormValidated: React.Dispatch<React.SetStateAction<boolean>>;
  isFirstFormValidated: boolean;
  setIsSecondFormValidated: React.Dispatch<React.SetStateAction<boolean>>;
  isSecondFormValidated: boolean;
  isThirdFormValidated: boolean;
  setIsThirdFormValidated: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormSection({
  isFirstFormValidated,
  setIsFirstFormValidated,
  isSecondFormValidated,
  setIsSecondFormValidated,
  isThirdFormValidated,
  setIsThirdFormValidated,
}: FormSectionProps) {
  // STATE 1 :formInfos
  const [formInfos, setFormInfos] = useState({} as IRegisterForm);

  // STATE 2 : hobbies
  const [hobbies, setHobbies] = useState<IHobby[]>([]);

  // STATE 3 : error
  const [registerError, setRegisterError] = useState<null | string>(null);

  // STATE 4 : is global form submitted
  const [isGlobalFormSubmitted, setIsGlobalFormSubmitted] =
    useState<boolean>(false);

  const fillFormInfos = (incomingInfos: object) => {
    setFormInfos((previousInfos) => {
      return { ...previousInfos, ...incomingInfos };
    });
    console.log(formInfos);
  };

  const goToFirstForm = () => {
    setIsFirstFormValidated(false);
  };

  const goToSecondForm = () => {
    setIsSecondFormValidated(false);
  };

  const goToThirdForm = () => {
    setIsThirdFormValidated(false);
  };

  useEffect(() => {
    const submitGlobalForm = async () => {
      try {
        console.log(formInfos);
        const response = await axios.post('/public/register', formInfos);
        setRegisterError(null);
        console.log(response.status);
      } catch (e) {
        if (e instanceof AxiosError && e.response?.status === 400) {
          console.error(e);
          setRegisterError(
            "L'adresse e-mail que vous avez renseigné correspond à un compte déjà créé. Essayez de vous connecter"
          );
        } else {
          console.error(e);
        }
      }
    };
    if (isGlobalFormSubmitted) {
      submitGlobalForm();
    }
  }, [formInfos, isGlobalFormSubmitted]);

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

  const renderContent = () => {
    // if button never cliked show Form 1
    if (!isFirstFormValidated) {
      return (
        <section className="bg-firstForm bg-cover bg-no-repeat bg-center text-white content-center justify-center md:items-center gap-12 flex md:px-16 md:h-screen flex-1">
          <div className="hidden md:block font-semibold text-2xl xl:text-4xl md:w-1/2 lg:2/3">
            <p>
              Rejoignez notre communauté dédiée aux seniors en quête de belles
              rencontres.
            </p>
            <p>Inscrivez-vous ici et commencez cette belle aventure !</p>
          </div>
          <SubscribeFormV1
            formInfos={formInfos}
            setIsFirstFormValidated={setIsFirstFormValidated}
            fillFormInfos={fillFormInfos}
          />
        </section>
      );
    }
    // if button in Form 1 cliked show Form 2
    if (!isSecondFormValidated) {
      return (
        <section className="bg-secondForm bg-cover bg-no-repeat bg-center text-white content-center justify-center md:items-center gap-12 flex md:px-16 md:h-screen flex-1">
          <SubscribeFormV2
            hobbies={hobbies}
            setHobbies={setHobbies}
            setIsSecondFormValidated={setIsSecondFormValidated}
            onPreviousClick={goToFirstForm}
            fillFormInfos={fillFormInfos}
          />
        </section>
      );
    }
    // if button in Form 2 cliked show Form 3
    if (!isThirdFormValidated) {
      return (
        <section className="bg-thirdForm bg-cover bg-no-repeat bg-center text-white content-center justify-center md:items-center gap-12 flex md:px-16 md:h-screen flex-1">
          <SubscribeFormV3
            onPreviousClick={goToSecondForm}
            fillFormInfos={fillFormInfos}
            setIsThirdFormValidated={setIsThirdFormValidated}
            setIsGlobalFormSubmitted={setIsGlobalFormSubmitted}
          />
        </section>
      );
    }

    return (
      <section className="bg-thirdForm bg-cover bg-no-repeat bg-center text-white content-center justify-center md:items-center gap-12 flex md:px-16 md:h-screen flex-1">
        <EndSection onPreviousClick={goToThirdForm} error={registerError} />
      </section>
    );
  };

  return <>{renderContent()}</>;
}
