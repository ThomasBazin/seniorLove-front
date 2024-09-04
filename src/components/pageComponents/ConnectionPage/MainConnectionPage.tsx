import ConnectionDescriptionSection from './ConnectionDescriptionSection/ConnectionDescriptionSection';
import ConnectionFormSection from './ConnectionFormSection/ConnectionFormSection';

export default function MainConnectionPage() {
  return (
    <main className="w-full">
      <ConnectionFormSection />
      <ConnectionDescriptionSection />
    </main>
  );
}
