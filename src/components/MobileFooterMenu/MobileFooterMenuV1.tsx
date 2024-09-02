//MobileFooterMenu V1 (before connexion)

import Logo from '../../assets/images/favicon-seniorlove.png';
import ConnexionLogo from '../../assets/images/connexion.png';
import EventLogo from '../../assets/images/evenement.png';

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
        <p className="mb-4 text-base text-primaryText text-center sm:text-lg md:text-xl font-bold">
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
        <p className="mb-4 text-base text-primaryText text-center sm:text-lg md:text-xl font-bold ">
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
        <p className="mb-4 text-base text-primaryText text-center sm:text-lg md:text-xl font-bold">
          Connexion
        </p>
      </a>
    </div>
  );
}

// V2 of this code

// const menuItems = [
//   { logo: EventLogo, alt: 'bouton connexion', text: 'Événements' },
//   { logo: Logo, alt: 'bouton accueil', text: 'Accueil' },
//   { logo: ConnexionLogo, alt: 'bouton connexion', text: 'Connexion' },
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

export default MobileFooterMenuV1;
