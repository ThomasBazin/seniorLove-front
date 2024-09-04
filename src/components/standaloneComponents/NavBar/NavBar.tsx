// NavBar V1 (before connexion)

import MobileFooterMenuV1 from '../MobileFooterMenu/MobileNavBar';
import Logo from '/img/logo-text-seniorlove.webp';

function NavBarV1() {
  const NavBarButtons = [
    { text: 'Évènements', href: '#' },
    { text: 'Se connecter', href: '#' },
  ];

  return (
    <header className="bg-white bg-opacity-90 md:fixed top-0 w-full py-4 z-10">
      <nav className="flex justify-center md:justify-between items-center w-full px-3 lg:px-8 ">
        <a href="/">
          <img src={Logo} alt="" className="max-w-44 lg:max-w-72" />
        </a>
        <div className="flex gap-6">
          {NavBarButtons.map((button) => (
            <a
              href={button.href}
              key={button.text}
              className="bg-primaryGrey hover:bg-secondaryPink text-secondaryPink hover:text-primaryGrey font-bold py-3 px-5 hidden md:block rounded-3xl text-sm sm:text-base md:text-lg"
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

export default NavBarV1;
