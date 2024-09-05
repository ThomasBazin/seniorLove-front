import HeadbandV1 from '../../standaloneComponents/Headband/HeadbandV1';
import ConnectionDescriptionSection from './ConnectionDescriptionSection/ConnectionDescriptionSection';
import ConnectionFormSection from './ConnectionFormSection/ConnectionFormSection';

// interface MainConnectionPageProps {
//   setToken: React.Dispatch<React.SetStateAction<string | null>>;
// }

export default function MainConnectionPage({
  setIsAuthenticated,
}: {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <main className="w-full">
      <ConnectionFormSection setIsAuthenticated={setIsAuthenticated} />
      <HeadbandV1 />
      <ConnectionDescriptionSection />
    </main>
  );
}
