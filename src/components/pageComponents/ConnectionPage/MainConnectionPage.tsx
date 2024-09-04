import HeadbandV1 from '../../standaloneComponents/Headband/HeadbandV1';
import ConnectionDescriptionSection from './ConnectionDescriptionSection/ConnectionDescriptionSection';
import ConnectionFormSection from './ConnectionFormSection/ConnectionFormSection';

export default function MainConnectionPage() {
  return (
    <main className="w-full">
      <ConnectionFormSection />
      <HeadbandV1 />
      <ConnectionDescriptionSection />
    </main>
  );
}
