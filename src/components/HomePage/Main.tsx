import { useEffect, useState } from 'react';
import HeadbandV1 from '../Headband/HeadbandV1';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import FormSection from './FormSection/FormSection';

// TODO State button validate

export default function Main() {
  const [isFirstFormValidated, setIsFirstFormValidated] = useState(false);
  const [isSecondFormValidated, setIsSecondFormValidated] = useState(false);
  useEffect(() => {
    console.log(isSecondFormValidated);
  }, [isSecondFormValidated]);

  return (
    <main className="w-full">
      <FormSection
        isFirstFormValidated={isFirstFormValidated}
        setIsFirstFormValidated={setIsFirstFormValidated}
        isSecondFormValidated={isSecondFormValidated}
        setIsSecondFormValidated={setIsSecondFormValidated}
      />
      <HeadbandV1 />
      <DescriptionSection />
    </main>
  );
}
