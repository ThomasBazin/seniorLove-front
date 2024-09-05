// NavBar V1 (before connexion)

import MobileFooterMenuV1 from '../MobileNavBar/MobileNavBar';
import Logo from '/img/logo-text-seniorlove.webp';

export default function NavBarV1() {
  const NavBarButtons = [
    { text: 'Évènements', href: '/events' },
    { text: 'Se connecter', href: '/login' },
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
        <div className="flex gap-6">
          {NavBarButtons.map((button) => (
            <a
              href={button.href}
              key={button.text}
              className="text-secondaryPink hover:text-primaryText font-bold py-2 px-3 hidden md:block"
            >
              {button.text}
            </a>
          ))}
        </div>
      </nav>
      <MobileFooterMenuV1 />
    </header>
  );
}
