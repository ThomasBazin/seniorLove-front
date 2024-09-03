function HomePage() {
  return (
    <body className="flex flex-col">
      <header className="bg-white bg-opacity-90 md:fixed top-0 w-full py-4">
        <nav className="flex justify-between items-center w-full px-3 lg:px-8 ">
          <img
            src="../../public/img/logo-text-seniorlove.webp"
            alt=""
            className="max-w-44 lg:max-w-72"
          />
          <div className="lg:flex gap-6">
            <button className="hidden lg:block bg-primaryGrey py-3 px-5 rounded-2xl text-secondaryPink font-semibold">
              Evenement
            </button>
            <button className="bg-primaryGrey py-2 px-4 lg:py-3 lg:px-5 rounded-2xl text-secondaryPink font-semibold">
              Se connecter
            </button>
          </div>
        </nav>
      </header>
      <main className="w-full">
        {/* <!-- Form --> */}
        <section className="bg-homeBackground bg-cover bg-no-repeat bg-center text-white content-center md:items-center gap-12 flex md:px-16 md:h-screen flex-1">
          <div className="hidden md:block font-semibold text-2xl xl:text-4xl md:w-1/2 lg:2/3">
            <p>
              Rejoignez notre communauté dédiée aux seniors en quête de belles
              rencontres.
            </p>
            <p>Inscrivez-vous ici et commencez cette belle aventure !</p>
          </div>

          <div className="bg-white rounded-xl bg-opacity-85 p-8 mx-auto my-6">
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
          </div>
        </section>

        {/* <!-- Description --> */}
        <section className="text-primaryText flex flex-col gap-3">
          <h2 className="font-semibold text-center px-8 pt-3 text-xl">
            <span className="text-secondaryPink">Senior Love</span> : le site de
            rencontre pour les 60 ans et plus
          </h2>
          <img
            src="../../public/img/logo-pink-background.png"
            alt=""
            className="hidden md:block max-w-24 self-center"
          />
          <div className="text-sm md:text-lg">
            <article className="bg-primaryGrey px-3 py-12 flex flex-col gap-8">
              <div className="flex flex-col gap-3 md:flex-row md:px-16 md:items-center md:justify-between md:gap-12 lg:gap-24">
                <div className="flex flex-col gap-3 md:w-2/3">
                  <h3 className="font-semibold">
                    Bienvenue sur Senior Love, votre plateforme de rencontres et
                    d'événements dédiée aux seniors dynamiques !
                  </h3>
                  <p>
                    Chez SeniorLove, nous croyons que la passion et la connexion
                    n'ont pas d'âge. Notre site unique combine les rencontres en
                    ligne avec des événements passionnants basés sur vos centres
                    d'intérêt. Que vous soyez féru de jardinage, amateur d'art,
                    passionné de voyages ou adepte de la cuisine, SeniorLove
                    vous offre l'opportunité de :
                  </p>
                  <ul className="list-disc px-4">
                    <li>
                      Créer votre profil personnalisé et découvrir des profils
                      compatibles
                    </li>
                    <li>
                      Participer à des événements thématiques près de chez vous
                    </li>
                    <li>
                      Rencontrer des personnes partageant vos passions dans un
                      cadre convivial et sécurisé
                    </li>
                  </ul>
                </div>
                <img
                  src="../../public/img/portrait-senior-couple.webp"
                  alt="Un homme enlaçant une femme."
                  className="w-full h-96 object-cover rounded-2xl md:w-96 shadow-lg"
                />
              </div>
              <div className="flex flex-col gap-3 md:flex-row-reverse md:px-16 md:items-center md:justify-between md:gap-12 lg:gap-24">
                <div className="flex flex-col gap-3 md:w-2/3">
                  <p>
                    Imaginez-vous discuter de vos lectures préférées lors d'un
                    café littéraire, explorer une nouvelle exposition avec un
                    compagnon d'art, ou partager vos astuces de jardinage lors
                    d'un atelier en plein air. Chez SeniorLove, nous facilitons
                    non seulement les rencontres en ligne, mais nous vous
                    offrons aussi des expériences enrichissantes dans le monde
                    réel. Que vous recherchiez l'amour, l'amitié ou simplement
                    de nouvelles connexions, notre plateforme est conçue pour
                    répondre à vos attentes.
                  </p>
                  <p className="font-semibold">
                    Rejoignez Senior Love aujourd'hui et commencez une nouvelle
                    aventure riche en découvertes et en rencontres !
                  </p>
                </div>
                <img
                  src="../../public/img/senior-love-guitar.webp"
                  alt="Un homme jouant de la guitare avec une femme à ses côtés."
                  className="hidden md:block object-cover rounded-2xl h-96 w-80 lg:w-1/3 shadow-lg"
                />
              </div>
            </article>
          </div>
        </section>
      </main>
      <footer className="bg-white py-14 text-center text-gray-500">
        <div className="flex flex-col gap-3 px-3 text-sm md:text-lg">
          <div>
            <h6>Assistance</h6>
            <p>
              Pour toute question ou assistance, veuillez nous contacter à
              l'adresse suivante : support@seniorlove.fr ou appelez-nous au{' '}
              <br /> +33 (0)1 23 45 67 89.
            </p>
          </div>
          <p className="pb-6">© 2024 SeniorLove. Tous droits réservés.</p>
          <ul className="flex gap-8 justify-center text-xs md:text-lg">
            <li>
              <a href="#">Signaler un contenu illégal</a>
            </li>
            <li>
              <a href="#">Politique de confidentialité</a>
            </li>
            <li>
              <a href="#">Condition générales</a>
            </li>
            <li>
              <a href="#">Charte d'utilisation des cookies</a>
            </li>
            <li>
              <a href="#">Règles de communauté</a>
            </li>
          </ul>
        </div>
      </footer>
    </body>
  );
}

export default HomePage;
