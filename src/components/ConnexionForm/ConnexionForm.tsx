import Logo from '/img/logo-text-seniorlove.webp';

export default function ConnexionForm() {
  const formInputs = [
    {
      label: 'Adresse e-mail',
      inputType: 'e-mail',
      placeholder: 'exemple@domaine.com',
      id: 'email',
      type: 'email',
    },
    {
      label: 'Mot de passe',
      inputType: 'password',
      placeholder: 'ex@mple2024!',
      id: 'password',
      type: 'password',
    },
  ];
  return (
    <div className="bg-white opacity-90 p-10 rounded-xl shadow-md my-10 mx-4 md:mx-auto md:my-0">
      <div className="flex flex-col items-center justify-center mb-4">
        <img src={Logo} alt="" className="max-w-44 lg:max-w-72 mb-2" />
        <p className="mb-4 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
          <span className="text-secondaryPink font-semibold">
            Partagez Vos Passions,
          </span>{' '}
          Créez des Connexions
        </p>
      </div>
      <p className="mb-4 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
        Me connecter
      </p>
      <div className="connexion_paragraph text-primaryText text-base mb-4">
        <p>
          Pas encore membre?{' '}
          <a href="/" className="text-secondaryPink">
            Inscrivez-vous ici
          </a>
        </p>
      </div>
      <form className="text-primaryText">
        {formInputs.map((input) => (
          <div className="mb-4" key={input.id}>
            <label
              htmlFor={input.id}
              className="block text-lg font-medium leading-6 text-primaryText"
            >
              {input.label}
            </label>
            <div className="mt-2">
              <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                  id={input.id}
                  name={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  className="block w-full border-0 bg-transparent py-1.5 pl-1 text-primaryText placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-center mt-6 mb-2">
          <button
            type="button"
            className="bg-secondaryPink text-primaryGrey font-semibold py-2 px-10 rounded-lg shadow-lg"
          >
            Connexion
          </button>
        </div>
      </form>
    </div>
  );
}
