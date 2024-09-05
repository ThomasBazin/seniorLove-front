// NavBar V2 (after connexion)

import Logo from '/img/logo-text-seniorlove.webp';
import MobileNavBarLogged from '../MobileNavBar/MobileNavBarLogged';

export default function NavBarLogged() {
  const NavBarButtons = [
    { text: 'Accueil', href: '#' },
    { text: 'Découvrir', href: '#' },
    { text: 'Événements', href: '#' },
    { text: 'Messages', href: '#' },
    { text: 'Mon profil', href: '#' },
    { text: 'Se déconnecter', href: '#' },
  ];

  return (
    <header className="bg-white bg-opacity-90 md:sticky top-0 w-full py-4 z-10">
      <nav className="flex justify-center md:justify-between items-center w-full px-3">
        <a href="/">
          <img
            src={Logo}
            alt="Retour a l'accueil"
            className="max-w-44 lg:max-w-72"
          />
        </a>
        <div className="flex gap-2 flex-wrap justify-end">
          {NavBarButtons.map((button) => (
            <a
              href={button.href}
              key={button.text}
              className=" text-secondaryPink hover:text-primaryText font-semibold py-2 px-3 hidden md:block"
            >
              {button.text}
            </a>
          ))}
        </div>
      </nav>
      <MobileNavBarLogged />
    </header>
  );
}
