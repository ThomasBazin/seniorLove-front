import { useState } from 'react';
import HeadbandV1 from '../../standaloneComponents/Headband/HeadbandV1';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import FormSection from './FormSection/FormSection';
import HeadbandV2 from '../../standaloneComponents/Headband/HeadbandV2';

export default function Main() {
  // STATE 1 : isFirstFormValidated
  const [isFirstFormValidated, setIsFirstFormValidated] = useState(false);

  // STATE 2 : isSecondFormValidated
  const [isSecondFormValidated, setIsSecondFormValidated] = useState(false);

  // STATE 3 : isThirdFormValidated
  const [isThirdFormValidated, setisThirdFormValidated] = useState(false);

  return (
    <main className="w-full">
      <FormSection
        isFirstFormValidated={isFirstFormValidated}
        setIsFirstFormValidated={setIsFirstFormValidated}
        isSecondFormValidated={isSecondFormValidated}
        setIsSecondFormValidated={setIsSecondFormValidated}
        isThirdFormValidated={isThirdFormValidated}
        setIsThirdFormValidated={setisThirdFormValidated}
      />

      {!isFirstFormValidated ? <HeadbandV1 /> : <HeadbandV2 />}
      <DescriptionSection
        isFirstFormValidated={isFirstFormValidated}
        isSecondFormValidated={isSecondFormValidated}
      />
    </main>
  );
}
