import SubscribeFormV1 from './SubscribeForms/SubscribeFormV1';
import SubscribeFormV2 from './SubscribeForms/SubscribeFormV2';
import SubscribeFormV3 from './SubscribeForms/SubscribeFormV3';

interface FormSectionProps {
  setIsFirstFormValidated: React.Dispatch<React.SetStateAction<boolean>>;
  isFirstFormValidated: boolean;
  setIsSecondFormValidated: React.Dispatch<React.SetStateAction<boolean>>;
  isSecondFormValidated: boolean;
}

export default function FormSection({
  isFirstFormValidated,
  setIsFirstFormValidated,
  isSecondFormValidated,
  setIsSecondFormValidated,
}: FormSectionProps) {
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
          <SubscribeFormV1 setIsFirstFormValidated={setIsFirstFormValidated} />
        </section>
      );
    }
    // if button in Form 1 cliked show Form 2
    if (!isSecondFormValidated) {
      return (
        <section className="bg-secondForm bg-cover bg-no-repeat bg-center text-white content-center justify-center md:items-center gap-12 flex md:px-16 md:h-screen flex-1">
          <SubscribeFormV2
            setIsSecondFormValidated={setIsSecondFormValidated}
          />
        </section>
      );
    }
    // Else show Form 3
    return (
      <section className="bg-thirdForm bg-cover bg-no-repeat bg-center text-white content-center justify-center md:items-center gap-12 flex md:px-16 md:h-screen flex-1">
        <SubscribeFormV3 />
      </section>
    );
  };

  return <>{renderContent()}</>;
}
