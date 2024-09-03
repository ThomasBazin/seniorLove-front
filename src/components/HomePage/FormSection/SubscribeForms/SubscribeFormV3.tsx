function SubscribeFormV3() {
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
    {
      label: 'Confirmer mot de passe',
      inputType: 'password',
      placeholder: 'ex@mple2024!',
      id: 'password-confirmation',
      type: 'password',
    },
  ];
  return (
    <div className="bg-primaryGrey p-10 rounded-xl shadow-md max-w-xl mx-auto">
      <form>
        <fieldset className="mb-4">
          <legend className="text-xl text-center font-semibold leading-6 text-primaryText mb-8">
            Il ne vous reste plus qu&apos;une étape pour finaliser votre
            inscription !
          </legend>
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
        </fieldset>
        <div className="flex justify-center mt-6 mb-2">
          <button
            type="button"
            className="bg-secondaryPink text-primaryGrey font-semibold py-2 px-10 rounded-lg shadow-lg"
          >
            Valider l&apos;inscription
          </button>
        </div>
        <div className="step_paragraph flex justify-end">
          <p>Etape 3/3: Validation inscription</p>
        </div>
      </form>
    </div>
  );
}

export default SubscribeFormV3;
