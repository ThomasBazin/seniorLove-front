import SubscribeFormV1 from '../SubscribeForms/SubscribeFormV1';

export default function FormSection() {
  return (
    <section className="bg-homeBackground bg-cover bg-no-repeat bg-center text-white content-center md:items-center gap-12 flex md:px-16 md:h-screen flex-1">
      <div className="hidden md:block font-semibold text-2xl xl:text-4xl md:w-1/2 lg:2/3">
        <p>
          Rejoignez notre communauté dédiée aux seniors en quête de belles
          rencontres.
        </p>
        <p>Inscrivez-vous ici et commencez cette belle aventure !</p>
      </div>
      <SubscribeFormV1 />
      {/* <div className="bg-white rounded-xl bg-opacity-85 p-8 mx-auto my-6">
        <p className="text-center text-primaryText font-semibold uppercase mb-2">
          Inscription
        </p>
        <form
          action=""
          className="flex flex-col text-primaryText font-semibold gap-8"
        >
          <label htmlFor="firstname" className="flex flex-col">
            Prénom
            <input
              type="text"
              placeholder="Prénom"
              name="firstname"
              id="firstname"
              className="rounded-lg p-2 border border-primaryText"
            />
          </label>

          <label htmlFor="gender" className="flex flex-col">
            Je suis
            <select
              type="text"
              name="gender"
              id="gender"
              className="rounded-lg p-2 border border-primaryText"
            >
              <option value="male">Un homme</option>
              <option value="female" className="hover:bg-violet-600">
                Une femme
              </option>
              <option value="other">Autres</option>
            </select>
          </label>

          <label htmlFor="birthDate">
            Date de naissance
            <input
              type="date"
              name="birthDate"
              id="birthDate"
              className="w-full text-center rounded-lg p-2 border border-primaryText"
            />
          </label>

          <button
            className="bg-secondaryPink py-3 px-5 rounded-2xl max-w-72 bg-opacity-85 text-white mx-auto"
            type="button"
          >
            Valider
          </button>
        </form>

        <div className="text-primaryText text-center text-sm pt-2 font-semibold">
          <p>
            Déjà membre ? Connectez-vous{' '}
            <a href="#" className="text-secondaryPink">
              ici
            </a>
            .
          </p>
          <p className="text-sm lg:text-lg mt-8">
            Etape 1/3 : information personnelles
          </p>
        </div>
      </div> */}
    </section>
  );
}
