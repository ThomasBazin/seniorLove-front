// NavBar V2 (after connexion)

import Logo from '/img/logo-text-seniorlove.webp';
import MobileNavBarLogged from '../MobileNavBar/MobileNavBarLogged';
import { Link } from 'react-router-dom';

export default function NavBarLogged() {
  const NavBarButtons = [
    { text: 'Accueil', to: '#' },
    { text: 'Découvrir', to: '#' },
    { text: 'Événements', to: '#' },
    { text: 'Messages', to: '#' },
    { text: 'Mon profil', to: '#' },
    { text: 'Se déconnecter', to: '#' },
  ];

  return (
    <header className="bg-white bg-opacity-90 md:sticky top-0 w-full py-4 z-10">
      <nav className="flex justify-center md:justify-between items-center w-full px-3">
        <Link to="/">
          <img
            src={Logo}
            alt="Retour a l'accueil"
            className="max-w-44 lg:max-w-72"
          />
        </Link>
        <div className="flex gap-2 flex-wrap justify-end">
          {NavBarButtons.map((button) => (
            <Link
              to={button.to}
              key={button.text}
              className=" text-secondaryPink hover:text-primaryText font-semibold py-2 px-3 hidden md:block"
            >
              {button.text}
            </Link>
          ))}
        </div>
      </nav>
      <MobileNavBarLogged />
    </header>
  );
}
