export default function ForeignProfile() {
  const interests = [
    'La lecture (romans historiques et policiers)',
    'Les voyages (explorer de nouvelles cultures et paysages)',
    'La cuisine (essayer de nouvelles recettes et cuisiner pour mes proches)',
    'Le bénévolat dans la communauté',
    'Les arts et la musique (aller au théâtre et aux concerts)',
  ];
  return (
    <>
      <div className="w-full bg-primaryPink md:mt-24 flex justify-center">
        <div className="flex-grow flex flex-col justify-around items-center  p-8 mb-4  md:flex-row md:gap-6 md:max-w-4xl">
          <div className="photo_container w-max h-72 bg-white rounded-xl shadow-around relative mb-4 md:w-full md:h-full md:max-w-lg md:rounded-3xl">
            <img
              src="/img/people/foreign-profile.webp"
              alt="random user"
              className="w-60 h-full object-cover object-center rounded-xl md:w-full "
            />
            <div className="m-2 w-fit absolute md:hidden bottom-0 left-1/4 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-2xl font-medium">
              <p>Helena 68</p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="name_container p-2 bg-white rounded-xl shadow-lg w-fit hidden md:block bottom-0 left-1/4 text-primaryText text-2xl font-medium mb-4">
              <p>Helena, 68 ans</p>
            </div>{' '}
            <div className="description_container w-80 h-fit bg-white rounded-xl shadow-lg relative mb-4">
              <p className="text-primaryText w-auto m-4 italic py-2">
                {' '}
                "Je m'appelle Helena, j'ai 68 ans et je suis une personne
                dynamique et pleine de vie. J'aime partager de bons moments avec
                ma famille et mes amis, et je suis toujours prête à découvrir de
                nouvelles expériences. Je suis passionnée par la lecture, les
                voyages et la cuisine. J'apprécie les longues promenades en
                nature et j'aime m'impliquer dans des activités communautaires."
              </p>
            </div>
            <div className="hobbies_container w-80 h-fit bg-white rounded-xl shadow-lg relative mb-4">
              <p className="text-primaryText w-auto m-4 italic py-2">
                Centres d'intérêt :{' '}
                <ul>
                  {interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                  ))}
                </ul>
              </p>
            </div>
            {/* <a
            href="#"
            className="bg-buttonGreen text-primaryText font-bold py-2 px-3 lg:block rounded-lg shadow-lg sm:text-base md:text-lg lg:text-xs xl:text-lg italic"
          >
            Envoyez un message à Helena
          </a> */}
          </div>
        </div>
        {/* <div className="w-full flex justify-center mt-4">
        <a
          href="#"
          className="bg-primaryText text-primaryGrey w-fit font-bold py-2 px-3 lg:block rounded-lg shadow-lg sm:text-base md:text-lg lg:text-xs xl:text-lg italic"
        >
          Signaler ce profil
        </a>
      </div> */}
      </div>
    </>
  );
}
