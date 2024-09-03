interface SubscribeFormV1Props {
  setIsFirstFormValidated: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SubscribeFormV1({
  setIsFirstFormValidated,
}: SubscribeFormV1Props) {
  return (
    <div className="bg-white opacity-90 p-10 rounded-xl shadow-md my-10 mx-4 md:mx-auto md:my-0">
      <form className="text-primaryText">
        <label htmlFor="firstname" className="flex flex-col mb-4">
          Prénom
          <input
            type="text"
            placeholder="Prénom"
            name="firstname"
            id="firstname"
            className="rounded-lg p-2 border border-primaryGrey"
          />
        </label>

        <label htmlFor="gender" className="flex flex-col mb-4">
          Je suis
          <select
            name="gender"
            id="gender"
            className="rounded-lg p-2 border border-primaryGrey"
          >
            <option value="male">Un homme</option>
            <option value="female" className="hover:bg-violet-600">
              Une femme
            </option>
            <option value="other">Autres</option>
          </select>
        </label>

        <label htmlFor="birthDate" className="mb-4">
          Date de naissance
          <input
            type="date"
            name="birthDate"
            id="birthDate"
            className="w-full text-center rounded-lg p-2 border border-primaryGrey"
          />
        </label>
        <div className="flex justify-center mt-6 mb-2">
          <button
            type="button"
            className="bg-secondaryPink text-primaryGrey font-semibold py-2 px-10 rounded-lg shadow-lg"
            onClick={() => setIsFirstFormValidated(true)}
          >
            Valider
          </button>
        </div>
        <div className="connexion_paragraph text-primaryText text-center text-base mb-4">
          <p>
            Deja membre? Connectez-vous{' '}
            <a href="/" className="text-secondaryPink">
              ici
            </a>
            .
          </p>
        </div>
        <div className="step_paragraph text-primaryText text-center text-sm">
          <p>Etape 1/3: Informations personelles</p>
        </div>
      </form>
    </div>
  );
}
