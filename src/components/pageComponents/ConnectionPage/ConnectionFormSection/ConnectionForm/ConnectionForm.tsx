import DefaultBtn from '../../../../standaloneComponents/Button/DefaultBtn';
import Logo from '/img/logo-text-seniorlove.webp';

export default function ConnectionForm() {
  return (
    <div className="bg-white opacity-90 p-10 rounded-xl shadow-md my-10 mx-4 md:mx-auto md:my-0 md:max-w-lg">
      <div className="flex flex-col items-center justify-center mb-4">
        <img src={Logo} alt="" className="max-w-44 mb-4" />
      </div>
      <p className="mb-4 text-lg text-primaryText font-semibold text-center uppercase">
        Connexion
      </p>
      <form className="text-primaryText">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-lg font-medium leading-6 text-primaryText"
          >
            Adresse e-mail
          </label>
          <div className="mt-2">
            <div className="flex bg-white rounded-md shadow-sm border">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Adresse e-mail"
                className="block w-full border-0 bg-transparent py-1.5 p-2 text-primaryText placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-lg font-medium leading-6 text-primaryText"
          >
            Mot de passe
          </label>
          <div className="mt-2">
            <div className="flex bg-white rounded-md shadow-sm border">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Mot de passe"
                className="block w-full border-0 bg-transparent py-1.5 p-2 text-primaryText placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 mb-2">
          <DefaultBtn
            btnText="Connexion"
          // onClick={() => {
          //   alert('Who are you?');
          // }}
          />
        </div>
      </form>
      <div className="connexion_paragraph text-primaryText text-base mb-4 text-center">
        <p>
          Pas encore membre?{' '}
          <a href="/" className="text-secondaryPink">
            Inscrivez-vous ici
          </a>
        </p>
      </div>
    </div>
  );
}
