import { useEffect, useState } from 'react';
import ProfileSticker from '../../standaloneComponents/ProfileSticker/ProfileSticker';
import DefaultBtn from '../../standaloneComponents/Button/DefaultBtn';
import { getTokenAndDataFromLocalStorage } from '../../../localStorage/localStorage';
import axios from '../../../axios';
import { IUsers } from '../../../@types/IUsers';

export default function UsersSection() {
  const response = getTokenAndDataFromLocalStorage();
  const token = response?.token;
  const [users, setUsers] = useState<IUsers[]>([]);

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
  }, [token]);
  const [numProfiles, setNumProfiles] = useState(3);

  useEffect(() => {
    const updateNumProfiles = () => {
      if (window.innerWidth >= 1280) {
        setNumProfiles(8);
      } else if (window.innerWidth >= 1024) {
        setNumProfiles(6);
      } else if (window.innerWidth >= 640) {
        setNumProfiles(4);
      } else {
        setNumProfiles(3);
      }
    };

    updateNumProfiles(); // Set initial value
    window.addEventListener('resize', updateNumProfiles); // Update on resize

    return () => window.removeEventListener('resize', updateNumProfiles);
  }, []);
  return (
    <div className="w-full py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center mx-auto w-11/12 pb-8">
        {users.slice(0, numProfiles).map((user) => (
          <ProfileSticker user={user} key={user.id} />
        ))}
      </div>
      <DefaultBtn btnText="Voir plus de profils" onClick={() => window.location.href = '/profiles'} />
    </div>
  );
}
