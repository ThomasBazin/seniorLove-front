//NavBar V2 (after connexion)

import Logo from '../../assets/images/logo-seniorlove-fondclair.png';

// function NavBarV2() {
//   return (
//     <div className="bg-white p-6 flex lg:flex-row lg:justify-between items-center rounded-lg w-full mx-auto font-bold text-primaryText">
//       <div className="logo_container mb-2 lg:mb-0 flex justify-center w-full lg:w-auto">
//         <a href="#">
//           <img
//             src={Logo}
//             alt="seniorlove logo"
//             className="w-64 h-32 object-contain"
//           />
//         </a>
//       </div>
//       <div className="buttons_container flex flex-col lg:flex-row lg:space-x-4">
//         <a
//           href="#"
//           className="bg-primaryGrey hover:bg-secondaryPink text-secondaryPink hover:text-primaryGrey font-bold py-4 px-6 hidden lg:block rounded-3xl text-sm sm:text-base md:text-lg"
//         >
//           Accueil
//         </a>
//         <a
//           href="#"
//           className="bg-primaryGrey hover:bg-secondaryPink text-secondaryPink hover:text-primaryGrey font-bold py-4 px-6 hidden lg:block rounded-3xl text-sm sm:text-base md:text-lg"
//         >
//           Découvrir
//         </a>
//         <a
//           href="#"
//           className="bg-primaryGrey hover:bg-secondaryPink text-secondaryPink hover:text-primaryGrey font-bold py-4 px-6 hidden lg:block rounded-3xl text-sm sm:text-base md:text-lg"
//         >
//           Événements
//         </a>
//         <a
//           href="#"
//           className="bg-primaryGrey hover:bg-secondaryPink text-secondaryPink hover:text-primaryGrey font-bold py-4 px-6 hidden lg:block rounded-3xl text-sm sm:text-base md:text-lg"
//         >
//           Messages
//         </a>
//         <a
//           href="#"
//           className="bg-primaryGrey hover:bg-secondaryPink text-secondaryPink hover:text-primaryGrey font-bold py-4 px-6 hidden lg:block rounded-3xl text-sm sm:text-base md:text-lg"
//         >
//           Mon profil
//         </a>
//         <a
//           href="#"
//           className="bg-primaryGrey hover:bg-secondaryPink text-secondaryPink hover:text-primaryGrey font-bold py-4 px-6 hidden lg:block rounded-3xl text-sm sm:text-base md:text-lg"
//         >
//           Se déconnecter
//         </a>
//       </div>
//     </div>
//   );

// V2 of this code
function NavBarV2() {
  const NavBarButtons = [
    { text: 'Accueil' },
    { text: 'Découvrir' },
    { text: 'Événements' },
    { text: 'Messages' },
    { text: 'Mon profil' },
    { text: 'Se déconnecter' },
  ];

  return (
    <div className="bg-white p-6 flex lg:flex-row lg:justify-between items-center rounded-lg w-full mx-auto font-bold text-primaryText">
      <div className="logo_container mb-2 lg:mb-0 flex justify-center w-full lg:w-auto">
        <a href="#">
          <img
            src={Logo}
            alt="seniorlove logo"
            className="w-64 h-32 object-contain"
          />
        </a>
      </div>
      <div className="buttons_container flex flex-col lg:flex-row lg:space-x-4">
        {NavBarButtons.map((button, index) => (
          <a
            href="#"
            key={index}
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
