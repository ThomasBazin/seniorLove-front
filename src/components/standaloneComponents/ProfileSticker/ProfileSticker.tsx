import { IUsers } from '../../../@types/IUsers';
import messageIcon from '/icon/messages.png';
import { Link } from 'react-router-dom';

interface ProfileStickerProps {
  user: IUsers;
  onClick: () => void;
}

function ProfileSticker({ user }: ProfileStickerProps) {
  function handleClick(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div onClick={handleClick}>
    <Link
        to={`/profiles/${user.id}`}
        state={{ user }} // Properly use state to pass data
      >    
    <div className="h-72 w-72 2xl:w-80 rounded-xl mx-auto shadow-lg relative">
      <img
        src={user.picture}
        alt={user.alt}
        className="object-cover rounded-xl h-72 w-72 2xl:w-80"
      />
      <div className="m-2 w-fit absolute bottom-0 left-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-2xl font-medium">
        {user.name}, {user.age}
      </div>
      <button
        type="button"
        className="p-1 shadow-lg absolute -bottom-4 right-0 bg-white rounded-full size-12"
      >
        <img
          src={messageIcon}
          alt="message"
          className="size-8 items-center mx-auto"
        />
      </button>
    </div>
    </Link>
    </div>
  );
}
export default ProfileSticker;
