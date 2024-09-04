// MobileFooterMenu V1 (before connexion)

import Logo from '/icon/logo-pink-background.png';
import DiscoverLogo from '/icon/decouvrir.png';
import EventLogo from '/icon/evenement.png';
import MessageLogo from '/icon/messages.png';
import ProfileLogo from '/icon/mon-profil.png';

export default function MobileNavBarLogged() {
  const menuItems = [
    {
      logo: DiscoverLogo,
      alt: 'bouton decouvrir',
      text: 'Decouvrir',
      href: '#',
    },
    { logo: MessageLogo, alt: 'bouton messages', text: 'Messages', href: '#' },
    { logo: Logo, alt: 'bouton accueil', text: 'Accueil', href: '/' },
    { logo: EventLogo, alt: 'bouton connexion', text: 'Événements', href: '#' },
    { logo: ProfileLogo, alt: 'bouton profile', text: 'Profil', href: '#' },
  ];

  return (
    <div className="bg-white shadow-mobileNav w-full px-3 pt-2 flex justify-around items-center font-semibold text-primaryText fixed bottom-0 z-10 md:hidden">
      {menuItems.map((item) => (
        <a href={item.href} key={item.text}>
          <img
            src={item.logo}
            alt={item.alt}
            className="mx-auto w-8 object-contain"
          />
          <p className="mb-1 text-base text-primaryText text-center">
            {item.text}
          </p>
        </a>
      ))}
    </div>
  );
}
