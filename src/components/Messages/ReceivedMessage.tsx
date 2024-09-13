import { Link } from 'react-router-dom';

export default function ReceivedMessage({ receiveMessage, picture, userId }) {
  return (
    <Link to={`/profiles/${userId}`}>
      <div className="m-4 flex gap-2 justify-start w-2/3 mr-2 self-start">
        <img
          src={picture}
          alt="Moi"
          className="aspect-square rounded-full w-20 h-20 object-cover shadow-xl"
        />

        <div className="p-4 bg-white border rounded-3xl shadow-around">
          <p className="text-sm text-primaryText">{receiveMessage}</p>
        </div>
      </div>
    </Link>
  );
}
