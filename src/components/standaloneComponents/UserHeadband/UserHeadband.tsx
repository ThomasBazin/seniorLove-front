import photo from '/img/old-man_profile.webp';

export default function UserHeadband() {
  return (
    <div className="bg-gradient-to-r from-white via-gray-200 to-gray-300 p-8 w-full font-bold text-primaryText">
      <div className="flex items-center space-x-4">
        <img
          src={photo}
          alt="Profile Image"
          className="w-32 h-32 rounded-full object-cover shadow-lg"
        />
        <p className="italic text-base font-normal sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Bienvenue Jean !
        </p>
      </div>
    </div>
  );
}
