//MobileFooterMenu V1 (before connexion)

import Logo from '../assets/images/favicon-seniorlove.png';
import ConnexionLogo from '../assets/images/connexion.png';
import EventLogo from '../assets/images/evenement.png';

function MobileFooterMenuV1() {
  return (
    <div className="bg-white p-6 flex justify-between rounded-lg max-w-md mx-auto font-bold text-primaryText">
      <a href="#">
        <img
          src={EventLogo}
          alt="bouton connexion"
          className="mx-auto w-14 h-14
           sm:w-20 sm:h-20 md:w-22 md:h-22 object-contain"
        />
        <p className="mb-4 text-base  text-center sm:text-lg md:text-xl font-bold">
          Événements
        </p>
      </a>
      <a href="#">
        <img
          src={Logo}
          alt="bouton accueil"
          className="mx-auto w-14 h-14
           sm:w-20 sm:h-20 md:w-22 md:h-22 object-contain"
        />
        <p className="mb-4 text-base text-center sm:text-lg md:text-xl font-bold ">
          Accueil
        </p>
      </a>
      <a href="#">
        <img
          src={ConnexionLogo}
          alt="bouton connexion"
          className="mx-auto w-14 h-14
           sm:w-20 sm:h-20 md:w-22 md:h-22 object-contain"
        />
        <p className="mb-4 text-base text-center sm:text-lg md:text-xl font-bold">
          Connexion
        </p>
      </a>
    </div>
  );
}

export default MobileFooterMenuV1;
