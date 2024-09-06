import HeadbandV1 from '../../standaloneComponents/Headband/HeadbandV1';
import ConnectionDescriptionSection from './ConnectionDescriptionSection/ConnectionDescriptionSection';
import ConnectionFormSection from './ConnectionFormSection/ConnectionFormSection';

interface MainConnectionPageProps {
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MainConnectionPage({
  setIsAuthenticated,
  setUserToken,
}: MainConnectionPageProps) {
  return (
    <main className="w-full">
      <ConnectionFormSection
        setIsAuthenticated={setIsAuthenticated}
        setUserToken={setUserToken}
      />
      <HeadbandV1 />
      <ConnectionDescriptionSection />
    </main>
  );
}
