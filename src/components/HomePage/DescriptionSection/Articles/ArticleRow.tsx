export default function ArticleRow() {
  return (
    <article className="bg-primaryGrey px-3 pt-12 md:px-12 xl:px-24 md:py-12 flex flex-col">
      <div className="flex flex-col gap-3 md:flex-row md:px-16 md:items-center md:justify-between md:gap-12 lg:gap-24">
        <div className="flex flex-col gap-3 md:w-2/3">
          <h3 className="font-semibold">
            Bienvenue sur Senior Love, votre plateforme de rencontres et
            d&apos;événements dédiée aux seniors dynamiques !
          </h3>
          <p>
            Chez SeniorLove, nous croyons que la passion et la connexion
            n&apos;ont pas d&apos;âge. Notre site unique combine les rencontres
            en ligne avec des événements passionnants basés sur vos centres
            d&apos;intérêt. Que vous soyez féru de jardinage, amateur
            d&apos;art, passionné de voyages ou adepte de la cuisine, SeniorLove
            vous offre l&apos;opportunité de :
          </p>
          <ul className="list-disc px-4">
            <li>
              Créer votre profil personnalisé et découvrir des profils
              compatibles
            </li>
            <li>Participer à des événements thématiques près de chez vous</li>
            <li>
              Rencontrer des personnes partageant vos passions dans un cadre
              convivial et sécurisé
            </li>
          </ul>
        </div>
        {/* TODO Maybe change photo with a landscape one??? */}
        <img
          src="/img/portrait-senior-couple.webp"
          alt="Un homme enlaçant une femme."
          className="w-96 h-80 mx-auto xl:w-1/4 xl:h-96 object-cover rounded-2xl shadow-lg"
        />
      </div>
    </article>
  );
}
