import { useState } from 'react';
import DisplayUsers from './DisplayUsers';
import FilterPanel from './FilterPanel';
import { FilterUser } from '../../../@types/IFilterUser';

export default function MainSearchProfilPage() {
  const [filter, setFilter] = useState<FilterUser[]>([
    {
      gender: 'allGender',
      age: '60',
    },
  ]);
  return (
    <main className="w-full min-h-screen flex-grow flex flex-col justify-start items-center bg-backgroundPink">
      <FilterPanel setFilter={setFilter} />
      <DisplayUsers filter={filter} />
    </main>
  );
}
