//MobileFooterMenu V1 (before connexion)

import Logo from '../assets/images/favicon-seniorlove.png';
import DiscoverLogo from '../assets/images/decouvrir.png';
import EventLogo from '../assets/images/evenement.png';
import MessageLogo from '../assets/images/messages.png';
import ProfileLogo from '../assets/images/mon-profil.png';

function MobileFooterMenuV2() {
  return (
    <div className="bg-white p-4 sm:p-6 flex flex-wrap gap-4 justify-around rounded-lg max-w-md mx-auto font-bold text-primaryText">
      <a href="#" className="flex flex-col items-center text-center">
        <img
          src={DiscoverLogo}
          alt="bouton decouvrir"
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
        />
        <p className="mt-2 text-xs sm:text-sm md:text-base font-bold">
          Découvrir
        </p>
      </a>
      <a href="#" className="flex flex-col items-center text-center">
        <img
          src={MessageLogo}
          alt="bouton messages"
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
        />
        <p className="mt-2 text-xs sm:text-sm md:text-base font-bold">
          Messages
        </p>
      </a>
      <a href="#" className="flex flex-col items-center text-center">
        <img
          src={Logo}
          alt="bouton accueil"
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
        />
        <p className="mt-2 text-xs sm:text-sm md:text-base font-bold">
          Accueil
        </p>
      </a>
      <a href="#" className="flex flex-col items-center text-center">
        <img
          src={EventLogo}
          alt="bouton événements"
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
        />
        <p className="mt-2 text-xs sm:text-sm md:text-base font-bold">
          Événements
        </p>
      </a>
      <a href="#" className="flex flex-col items-center text-center">
        <img
          src={ProfileLogo}
          alt="bouton profile"
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
        />
        <p className="mt-2 text-xs sm:text-sm md:text-base font-bold">Moi</p>
      </a>
    </div>
  );
}

export default MobileFooterMenuV2;
