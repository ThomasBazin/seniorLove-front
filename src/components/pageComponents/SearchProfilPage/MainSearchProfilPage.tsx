import DisplayUsers from './DisplayUsers';
import FilterPanel from './FilterPanel';

export default function MainSearchProfilPage() {
  return (
    <main className="w-full min-h-screen flex-grow flex flex-col justify-start items-center bg-backgroundPink">
      <FilterPanel />
      <DisplayUsers />
    </main>
  );
}
