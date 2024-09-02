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
          alt="bouton découverte"
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
        />
        <p className="mt-2 text-primaryText text-xs sm:text-sm md:text-base font-bold">
          Découvrir
        </p>
      </a>
      <a href="#" className="flex flex-col items-center text-center">
        <img
          src={MessageLogo}
          alt="bouton messages"
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
        />
        <p className="mt-2 text-primaryText text-xs sm:text-sm md:text-base font-bold">
          Messages
        </p>
      </a>
      <a href="#" className="flex flex-col items-center text-center">
        <img
          src={Logo}
          alt="bouton accueil"
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
        />
        <p className="mt-2 text-primaryText text-xs sm:text-sm md:text-base font-bold">
          Accueil
        </p>
      </a>
      <a href="#" className="flex flex-col items-center text-center">
        <img
          src={EventLogo}
          alt="bouton événements"
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
        />
        <p className="mt-2 text-primaryText text-xs sm:text-sm md:text-base font-bold">
          Événements
        </p>
      </a>
      <a href="#" className="flex flex-col items-center text-center">
        <img
          src={ProfileLogo}
          alt="bouton profile"
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
        />
        <p className="mt-2 text-primaryText text-xs sm:text-sm md:text-base font-bold">
          Moi
        </p>
      </a>
    </div>
  );
}

// V2 of this code

// const menuItems = [
//   { logo: DiscoverLogo, alt: 'bouton decouvrir', text: 'Decouvrir' },
//   { logo: MessageLogo, alt: 'bouton messages', text: 'Messages' },
//   { logo: Logo, alt: 'bouton accueil', text: 'Accueil' },
//   { logo: EventLogo, alt: 'bouton connexion', text: 'Événements' },
//   { logo: ProfileLogo, alt: 'bouton profile', text: 'Moi' },
// ];

// return (
//     <div className="bg-white p-6 flex justify-between rounded-lg max-w-md mx-auto font-bold text-primaryText sm:flex-col md:flex-row lg:hidden">
//       {menuItems.map((item, index) => (
//         <a
//           href="#"
//           key={index}
//           className="flex flex-col items-center mb-4 sm:mb-6 md:mb-0"
//         >
//           <img
//             src={item.logo}
//             alt={item.alt}
//             className="w-14 h-14 sm:w-20 sm:h-20 md:w-22 md:h-22 object-contain"
//           />
//           <p className="text-base text-primaryText text-center sm:text-lg md:text-xl font-bold">
//             {item.text}
//           </p>
//         </a>
//       ))}
//     </div>
//   );
// }

export default MobileFooterMenuV2;
