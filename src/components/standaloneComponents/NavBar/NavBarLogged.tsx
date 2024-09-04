// NavBar V2 (after connexion)

import Logo from '/img/logo-text-seniorlove.webp';

function NavBarV2() {
  const NavBarButtons = [
    { text: 'Accueil', href: '#' },
    { text: 'Découvrir', href: '#' },
    { text: 'Événements', href: '#' },
    { text: 'Messages', href: '#' },
    { text: 'Mon profil', href: '#' },
    { text: 'Se déconnecter', href: '#' },
  ];

  return (
    <div className="bg-white p-6 flex lg:flex-row lg:justify-between items-center rounded-lg w-full mx-auto font-bold text-primaryText">
      <div className="logo_container mb-2 lg:mb-0 flex justify-center w-full lg:w-auto">
        <a href="/">
          <img
            src={Logo}
            alt="seniorlove logo"
            className="w-64 h-32 object-contain"
          />
        </a>
      </div>
      <div className="buttons_container flex flex-col lg:flex-row lg:space-x-4">
        {NavBarButtons.map((button) => (
          <a
            href={button.href}
            key={button.text}
            className="bg-primaryGrey hover:bg-secondaryPink text-secondaryPink hover:text-primaryGrey font-bold py-4 px-6 hidden lg:block rounded-3xl sm:text-base md:text-lg lg:text-xs xl:text-lg"
          >
            {button.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default NavBarV2;
