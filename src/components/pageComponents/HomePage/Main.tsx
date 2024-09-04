import { useState } from 'react';
import HeadbandV1 from '../../standaloneComponents/Headband/HeadbandV1';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import FormSection from './FormSection/FormSection';
import HeadbandV2 from '../../standaloneComponents/Headband/HeadbandV2';

export default function Main() {
  const [isFirstFormValidated, setIsFirstFormValidated] = useState(false);
  const [isSecondFormValidated, setIsSecondFormValidated] = useState(false);

  return (
    <main className="w-full">
      <FormSection
        isFirstFormValidated={isFirstFormValidated}
        setIsFirstFormValidated={setIsFirstFormValidated}
        isSecondFormValidated={isSecondFormValidated}
        setIsSecondFormValidated={setIsSecondFormValidated}
      />

      {!isFirstFormValidated ? <HeadbandV1 /> : <HeadbandV2 />}
      <DescriptionSection
        isFirstFormValidated={isFirstFormValidated}
        isSecondFormValidated={isSecondFormValidated}
      />
    </main>
  );
}
