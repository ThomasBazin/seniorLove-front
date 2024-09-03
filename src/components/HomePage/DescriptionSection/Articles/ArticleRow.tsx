interface ArticleRowProps {
  isFirstFormValidated: boolean;
  isSecondFormValidated: boolean;
}

export default function ArticleRow({
  isFirstFormValidated,
  isSecondFormValidated,
}: ArticleRowProps) {
  return (
    <article className="bg-primaryGrey px-3 pt-12 md:px-12 xl:px-24 md:py-12 flex flex-col">
      <div className="flex flex-col gap-3 md:flex-row md:px-16 md:items-center md:justify-between md:gap-12 lg:gap-24">
        <div className="flex flex-col gap-3 md:w-2/3">
          {/* Title */}
          <h3 className="font-semibold">
            {!isFirstFormValidated && !isSecondFormValidated && (
              <>
                Bienvenue sur Senior Love, votre plateforme de rencontres et
                d&apos;événements dédiée aux seniors dynamiques !
              </>
            )}
            {isFirstFormValidated && !isSecondFormValidated && (
              <>
                Senior Love, un espace conçu pour vous offrir bien plus
                qu&apos;une simple rencontre !
              </>
            )}
            {isFirstFormValidated && isSecondFormValidated && (
              <>Rejoignez Senior Love et épanouissez-vous !</>
            )}
          </h3>
          {/* Paragraph */}
          {!isFirstFormValidated && !isSecondFormValidated && (
            <>
              <p>
                Chez SeniorLove, nous croyons que la passion et la connexion
                n&apos;ont pas d&apos;âge. Notre site unique combine les
                rencontres en ligne avec des événements passionnants basés sur
                vos centres d&apos;intérêt. Que vous soyez féru de jardinage,
                amateur d&apos;art, passionné de voyages ou adepte de la
                cuisine, SeniorLove vous offre l&apos;opportunité de :
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
            </>
          )}
          {isFirstFormValidated && !isSecondFormValidated && (
            <p>
              Nous savons qu&apos;il peut être intimidant de franchir le pas,
              mais soyez assuré que SeniorLove met tout en œuvre pour que votre
              expérience soit sécurisée, agréable et enrichissante. Chaque
              profil est vérifié avec soin par notre équipe pour garantir un
              environnement de confiance. Ici, vous ne ferez pas que rencontrer
              des personnes, vous créerez des liens autour de passions communes.
            </p>
          )}
          {isFirstFormValidated && isSecondFormValidated && (
            <p>
              Chez Senior Love, nous croyons que chaque étape de la vie est une
              opportunité d&apos;explorer, de découvrir et de se reconnecter.
              Nous vous invitons à faire le premier pas vers une nouvelle
              aventure enrichissante. En rejoignant notre communauté, vous
              accédez à un réseau de personnes partageant vos passions et vos
              intérêts, prêtes à vivre des moments précieux avec vous. Ne
              laissez pas passer l&apos;occasion de faire de nouvelles
              rencontres et de participer à des événements qui vous inspirent.
            </p>
          )}
        </div>

        {/* Photo */}
        {!isFirstFormValidated && !isSecondFormValidated && (
          <img
            src="/img/senior-forest.webp"
            alt="Un homme enlaçant une femme."
            className="w-96 h-80 mx-auto xl:w-1/4 xl:h-96 object-cover rounded-2xl shadow-lg"
          />
        )}
        {isFirstFormValidated && !isSecondFormValidated && (
          <img
            src="/img/senior-friends-activities.webp"
            alt="Deux couples au théatre tenant des accessoires"
            className="w-96 h-80 mx-auto xl:w-1/4 xl:h-96 object-cover rounded-2xl shadow-lg"
          />
        )}
        {isFirstFormValidated && isSecondFormValidated && (
          <img
            src="/img/senior-chess.webp"
            alt="Deux couple qui joue aux échecs "
            className="w-96 h-80 mx-auto xl:w-1/4 xl:h-96 object-cover rounded-2xl shadow-lg"
          />
        )}
      </div>
    </article>
  );
}
