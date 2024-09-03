import HeadbandV1 from '../Headband/HeadbandV1';
import DescriptionSection from './DescriptionSection';
import FormSection from './FormSection';

export default function Main() {
  return (
    <main className="w-full">
      <FormSection />
      <HeadbandV1 />
      <DescriptionSection />
    </main>
  );
}
