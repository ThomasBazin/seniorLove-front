import { Link } from 'react-router-dom';
import {
  getTokenAndDataFromLocalStorage,
  removeTokenFromLocalStorage,
} from '../../../localStorage/localStorage';

interface UserHeadbandProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function UserHeadband({
  setIsAuthenticated,
}: UserHeadbandProps) {
  const response = getTokenAndDataFromLocalStorage();
  const { name, picture } = response || { name: null, picture: null };
  const onClickDisconnect = () => {
    setIsAuthenticated(false);
    removeTokenFromLocalStorage();
  };
  return (
    <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 p-2 w-full font-bold text-primaryText">
      <div className="flex items-center justify-center space-x-4">
        <Link to="/myprofile">
          <img
            src={picture ?? ''}
            alt={name ?? ''}
            className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover shadow-around"
          />
        </Link>
        <div>
          <p className="italic text-base font-normal md:text-lg lg:text-xl">
            Bienvenue {name} !
          </p>
          <Link
            to="/"
            onClick={() => onClickDisconnect()}
            className="text-sm md:hidden text-secondaryPink hover:text-primaryText font-semibold py-2 px-3"
          >
            Déconnexion
          </Link>
        </div>
      </div>
    </div>
  );
}
