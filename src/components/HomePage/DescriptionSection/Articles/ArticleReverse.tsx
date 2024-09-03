export default function ArticleReverse() {
  return (
    <article className="bg-primaryGrey px-3 md:px-12 xl:px-24 py-12 flex flex-col">
      <div className="flex flex-col gap-3 md:flex-row-reverse md:px-16 md:items-center md:justify-between md:gap-12 lg:gap-24">
        <div className="flex flex-col gap-3 md:w-2/3">
          <p>
            Imaginez-vous discuter de vos lectures préférées lors d&apos;un café
            littéraire, explorer une nouvelle exposition avec un compagnon
            d&apos;art, ou partager vos astuces de jardinage lors d&apos;un
            atelier en plein air. Chez SeniorLove, nous facilitons non seulement
            les rencontres en ligne, mais nous vous offrons aussi des
            expériences enrichissantes dans le monde réel. Que vous recherchiez
            l&apos;amour, l&apos;amitié ou simplement de nouvelles connexions,
            notre plateforme est conçue pour répondre à vos attentes.
          </p>
          <p className="font-semibold">
            Rejoignez Senior Love aujourd&apos;hui et commencez une nouvelle
            aventure riche en découvertes et en rencontres !
          </p>
        </div>
        <img
          src="/img/senior-love-guitar.webp"
          alt="Un homme jouant de la guitare avec une femme à ses côtés."
          className="hidden md:block w-60 h-80 xl:w-1/4 xl:h-96 object-cover rounded-2xl shadow-lg"
        />
      </div>
    </article>
  );
}
