import { useEffect, useState } from 'react';
import ProfileSticker from '../../standaloneComponents/ProfileSticker/ProfileSticker';
import axios from '../../../axios';
import { getTokenAndDataFromLocalStorage } from '../../../localStorage/localStorage';
import { IUsers } from '../../../@types/IUsers';
import { useNavigate } from 'react-router-dom';

export default function DisplayUsers() {
  const response = getTokenAndDataFromLocalStorage();
  const token = response?.token;
  const [users, setUsers] = useState<IUsers[]>([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseFetch = await axios.get('/private/users/me/suggestions');
        const shuffledUsers = responseFetch.data.sort(() => 0.5 - Math.random());
        setUsers(shuffledUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    if (token) {
      fetchUsers();
    }
  }, [token]);

    // Function to handle user click and navigate to user detail page
  const handleUserClick = (user: IUsers) => {
    navigate(`/profiles/${user.id}`, { state: { user } }); // Passing the user id in the URL
  };

  return (
    <div className="w-full py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center mx-auto w-11/12 pb-8">
        {users.map((user) => (
          <ProfileSticker
            user={user}
            key={user.id}
            onClick={() => handleUserClick(user)}
          />
        ))}
      </div>
    </div>
  );
}
