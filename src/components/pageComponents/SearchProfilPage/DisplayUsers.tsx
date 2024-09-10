import { useEffect, useState } from 'react';
import ProfileSticker from '../../standaloneComponents/ProfileSticker/ProfileSticker';
import axios from '../../../axios';
import { getTokenAndDataFromLocalStorage } from '../../../localStorage/localStorage';
import { IUsers } from '../../../@types/IUsers';
import { FilterUser } from '../../../@types/IFilterUser';

interface DisplayUser {
  filter: FilterUser[];
}

export default function DisplayUsers({ filter }: DisplayUser) {
  const response = getTokenAndDataFromLocalStorage();
  const token = response?.token;
  const [users, setUsers] = useState<IUsers[]>([]);
  // console.log(filter);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseFetch = await axios.get('/private/users/me/suggestions');
        const shuffledUsers = responseFetch.data.sort(
          () => 0.5 - Math.random()
        );
        setUsers(shuffledUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    if (token) {
      fetchUsers();
    }
  }, [token, filter]);

  const filterUser = users.filter((user) => {
    // Filtrer par genre
    const genderSort =
      user.gender === filter[0].gender || filter[0].gender === 'allGender';

    // Filtrer par âge
    const ageSort =
      filter[0].age === '0' ||
      (filter[0].age === '80'
        ? user.age >= 80
        : user.age >= Number(filter[0].age) &&
          user.age <= Number(filter[0].age) + 9);

    return genderSort && ageSort;
  });

  return (
    <div className="w-full py-10">
      {filterUser.length === 0 ? (
        <p className="text-center text-gray-500">
          Aucun utilisateur ne correspond à votre recherche.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center mx-auto w-11/12 pb-8">
          {filterUser.map((user) => (
            <ProfileSticker user={user} key={user.picture} />
          ))}
        </div>
      )}
    </div>
  );
}
