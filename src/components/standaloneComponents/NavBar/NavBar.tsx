// NavBar V1 (before connexion)

import { Link } from 'react-router-dom';
import textLogo from '/img/logo-text-seniorlove.webp';
import logo from '/icon/logo-pink-background.png';
import connexionLogo from '/icon/connexion.png';
import eventLogo from '/icon/evenement.png';

export default function NavBarV1() {
  const navItems = [
    {
      img: eventLogo,
      text: 'Événements',
      href: '/events',
      mobileOnly: false,
    },
    {
      img: logo,
      text: 'Accueil',
      href: '/',
      mobileOnly: true,
    },
    {
      img: connexionLogo,
      text: 'Connexion',
      href: '/login',
      mobileOnly: false,
    },
  ];

  return (
    <header className="bg-white bg-opacity-90 md:sticky top-0 w-full py-4">
      <nav className="flex justify-center md:justify-between items-center w-full px-3">
        <Link to="/">
          <img
            src={textLogo}
            alt="Retour à l'accueil"
            className="max-w-36 lg:max-w-52"
          />
        </Link>
        <div className="flex fixed px-3 pt-2 md:gap-6 bottom-0 md:top-3 md:right-0 bg-white md:bg-inherit shadow-mobileNav md:shadow-none w-full md:w-fit justify-around items-center md:items-start ">
          {navItems.map((item) => (
            <Link
              to={item.href}
              key={item.text}
              className={`text-primaryText md:text-secondaryPink md:hover:text-primaryText md:font-bold text-sm md:text-base mb-1 md:mb-0 md:px-3 ${item.mobileOnly && 'md:hidden'}`}
            >
              <img
                src={item.img}
                alt=""
                aria-hidden="true"
                className="mx-auto w-8 object-contain md:hidden"
              />
              {item.text}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
