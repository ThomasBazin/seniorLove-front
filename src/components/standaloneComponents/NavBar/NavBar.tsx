// NavBar V1 (before connexion)

import { Link, NavLink } from 'react-router-dom';
import textLogo from '/img/logo-text-seniorlove.webp';
import logo from '/icon/logo-pink-background.png';
import connexionLogo from '/icon/connexion.png';
import eventLogo from '/icon/evenement.png';
import discoverLogo from '/icon/decouvrir.png';
import messageLogo from '/icon/messages.png';
import profileLogo from '/icon/mon-profil.png';

interface INavBarProps {
  isLogged: boolean;
}
export default function NavBar({ isLogged }: INavBarProps) {
  const standardNavItems = [
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

  const authenticatedNavItems = [
    {
      img: discoverLogo,
      text: 'Découvrir',
      href: '/profiles',
      mobileOnly: false,
    },
    {
      img: messageLogo,
      text: 'Messages',
      href: '/messages',
      mobileOnly: false,
    },
    {
      img: logo,
      text: 'Accueil',
      href: '/home',
      mobileOnly: true,
    },
    {
      img: eventLogo,
      text: 'Évènements',
      href: '/events',
      mobileOnly: false,
    },
    {
      img: profileLogo,
      text: 'Profil',
      href: '/myprofile',
      mobileOnly: false,
    },
  ];

  let navItems = standardNavItems;
  if (isLogged) {
    navItems = authenticatedNavItems;
  }

  return (
    <header className="bg-white bg-opacity-90 md:sticky top-0 w-full py-4 z-10">
      <nav className="flex justify-center md:justify-between items-center w-full px-3">
        <Link to="/">
          <img
            src={textLogo}
            alt="Retour à l'accueil"
            className="max-w-36 lg:max-w-52"
          />
        </Link>
        <div className="flex fixed h-fit px-3 pt-2 md:gap-6 bottom-0 md:top-3 md:right-0 bg-white md:bg-inherit shadow-mobileNav md:shadow-none w-full md:w-fit justify-around items-center md:items-start ">
          {navItems.map((item) => (
            <NavLink
              to={item.href}
              key={item.text}
              className={`text-primaryText md:text-secondaryPink md:hover:text-primaryText md:font-bold text-sm md:text-base mb-1 md:mb-0 md:px-3 nav-link ${item.mobileOnly && 'md:hidden'}`}
            >
              <img
                src={item.img}
                alt=""
                aria-hidden="true"
                className="mx-auto w-8 object-contain md:hidden"
              />
              {item.text}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
