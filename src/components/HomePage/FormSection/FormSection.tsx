import SubscribeFormV1 from './SubscribeForms/SubscribeFormV1';

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
    </section>
  );
}
