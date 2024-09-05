import photo from '/img/old-man_profile.webp';

export default function UserHeadband() {
  const user = {
    name: 'Jean',
    image: photo,
  };
  return (
    <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 p-2 w-full font-bold text-primaryText">
      <div className="flex items-center justify-center space-x-4">
        <img
          src={user.image}
          alt="profil"
          className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover shadow-around"
        />
        <div>
          <p className="italic text-base font-normal md:text-xl lg:text-2xl">
            Bienvenue {user.name} !
          </p>
          <button
            type="button"
            className="text-sm md:hidden text-secondaryPink hover:text-primaryText font-semibold py-2 px-3"
          >
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  );
}
