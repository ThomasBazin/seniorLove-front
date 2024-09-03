export default function DescriptionSection() {
  return (
    <section className="text-primaryText flex flex-col gap-3">
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
                passionné de voyages ou adepte de la cuisine, SeniorLove vous
                offre l'opportunité de :
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
                  Rencontrer des personnes partageant vos passions dans un cadre
                  convivial et sécurisé
                </li>
              </ul>
            </div>
            <img
              src="/img/portrait-senior-couple.webp"
              alt="Un homme enlaçant une femme."
              className="w-full h-96 object-cover rounded-2xl md:w-96 shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-3 md:flex-row-reverse md:px-16 md:items-center md:justify-between md:gap-12 lg:gap-24">
            <div className="flex flex-col gap-3 md:w-2/3">
              <p>
                Imaginez-vous discuter de vos lectures préférées lors d'un café
                littéraire, explorer une nouvelle exposition avec un compagnon
                d'art, ou partager vos astuces de jardinage lors d'un atelier en
                plein air. Chez SeniorLove, nous facilitons non seulement les
                rencontres en ligne, mais nous vous offrons aussi des
                expériences enrichissantes dans le monde réel. Que vous
                recherchiez l'amour, l'amitié ou simplement de nouvelles
                connexions, notre plateforme est conçue pour répondre à vos
                attentes.
              </p>
              <p className="font-semibold">
                Rejoignez Senior Love aujourd'hui et commencez une nouvelle
                aventure riche en découvertes et en rencontres !
              </p>
            </div>
            <img
              src="/img/senior-love-guitar.webp"
              alt="Un homme jouant de la guitare avec une femme à ses côtés."
              className="hidden md:block object-cover rounded-2xl h-96 w-80 lg:w-1/3 shadow-lg"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
