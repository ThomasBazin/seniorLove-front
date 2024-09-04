import EventSticker from '../../standaloneComponents/EventSticker/EventSticker';

export default function MainEventsPage() {
  const events = [
    {
      id: 1,
      name: 'Cours de cuisine',
      location: 'Paris',
      photo: '/img/events/cuisine.webp',
      alt: 'Cours de cuisine à Paris',
      description:
        'Rejoignez-nous pour un événement gourmand et instructif lors de notre Cours de cuisine à Paris ! Organisé par SeniorLove, le site dédié aux rencontres et aux activités pour les seniors, cet atelier culinaire vous invite à découvrir les secrets des chefs tout en savourant de délicieuses recettes. Que vous soyez novice ou expert en cuisine, cet événement est l’occasion parfaite pour apprendre, partager et déguster dans une ambiance conviviale et chaleureuse. Venez éveiller vos papilles et créer des souvenirs mémorables avec SeniorLove.',
      alt_title: 'Cours de Cuisine à Paris',
      postal_code: '75000',
      hobbies: ['Cuisine gastronomique', 'Arts culinaires', 'Dégustation'],
      date: '15/10/2024',
    },
    {
      id: 2,
      name: 'Apéro poterie',
      location: 'Lyon',
      photo: '/img/events/poterie.webp',
      alt: 'Apéro poterie à Lyon',
      description:
        'Participez à une soirée créative et relaxante avec l’Apéro poterie à Lyon ! Organisé par SeniorLove, cet événement unique vous propose de mêler l’art de la poterie à la convivialité d’un apéritif entre amis. Vous aurez l’occasion de modeler votre propre chef-d’œuvre tout en dégustant des amuse-bouches et en partageant un moment de détente. Que vous soyez amateur d’art ou simplement curieux, cet atelier est fait pour vous. Rejoignez-nous pour une soirée où créativité et plaisir se rencontrent, et repartez avec une œuvre que vous aurez fièrement créée de vos propres mains.',
      alt_title: 'Atelier Apéro et Poterie à Lyon',
      postal_code: '69000',
      hobbies: ['Poterie', 'Artisanat', 'Rencontres conviviales'],
      date: '22/10/2024',
    },
    {
      id: 3,
      name: 'Atelier mixologie',
      location: 'Marseille',
      photo: '/img/events/mixologie.webp',
      alt: 'Atelier mixologie à Marseille',
      description:
        'Venez découvrir l’art des cocktails lors de notre Atelier mixologie à Marseille ! Organisé par SeniorLove, cet événement est l’occasion idéale pour apprendre à concocter des boissons sophistiquées et surprenantes sous la houlette d’un expert en mixologie. Vous explorerez les secrets des cocktails classiques et modernes, et pourrez déguster vos propres créations dans une ambiance festive et conviviale. Que vous soyez amateur de cocktails ou simplement curieux de découvrir cet univers, rejoignez-nous pour une soirée délicieuse et pleine de découvertes avec SeniorLove.',
      alt_title: 'Atelier de Mixologie à Marseille',
      postal_code: '13000',
      hobbies: [
        'Création de cocktails',
        'Découverte de spiritueux',
        'Arts de la table',
      ],
      date: '29/10/2024',
    },
    {
      id: 4,
      name: 'Dégustation de vins',
      location: 'Bordeaux',
      photo: '/img/events/degustation.webp',
      alt: 'Dégustation de vins à Bordeaux',
      description:
        'Découvrez les trésors viticoles de Bordeaux lors de notre Dégustation de vins exclusive ! Organisé par SeniorLove, cet événement vous invite à explorer l’art de la dégustation dans l’une des régions viticoles les plus renommées du monde. Accompagné d’un sommelier expérimenté, vous apprendrez à reconnaître les arômes, les saveurs et les subtilités des vins de Bordeaux, tout en partageant un moment convivial avec d’autres passionnés. Que vous soyez néophyte ou connaisseur, cet atelier est l’occasion parfaite pour enrichir vos connaissances et apprécier pleinement les grands crus de Bordeaux avec SeniorLove.',
      alt_title: 'Dégustation de Vins à Bordeaux',
      postal_code: '33000',
      hobbies: ['Œnologie', 'Dégustation de vins', 'Visites de vignobles'],
      date: '05/11/2024',
    },
    {
      id: 5,
      name: 'Speed dating',
      location: 'Nice',
      photo: '/img/events/dating.webp',
      alt: 'Speed dating à Nice',
      description:
        'Rencontrez de nouvelles personnes et trouvez l’âme sœur lors de notre soirée Speed dating à Nice ! Organisé par SeniorLove, cet événement est spécialement conçu pour les seniors qui souhaitent faire de nouvelles rencontres dans un cadre agréable et détendu. Au cours de la soirée, vous aurez l’occasion de discuter avec plusieurs participants lors de sessions de quelques minutes, vous permettant de briser la glace et de découvrir des affinités. Que vous soyez à la recherche de l’amour ou simplement d’amitiés sincères, cette soirée est l’occasion idéale pour élargir votre cercle social avec SeniorLove.',
      alt_title: 'Soirée Speed Dating à Nice',
      postal_code: '06000',
      hobbies: ['Rencontres', 'Communication', 'Activités sociales'],
      date: '12/11/2024',
    },
    {
      id: 6,
      name: 'Atelier jardinage',
      location: 'Toulouse',
      photo: '/img/events/jardinage.webp',
      alt: 'Atelier jardinage à Toulouse',
      description:
        'Plongez vos mains dans la terre et laissez fleurir votre passion pour le jardinage lors de notre Atelier jardinage à Toulouse ! Organisé par SeniorLove, cet événement vous invite à découvrir les joies de la nature tout en apprenant les bases du jardinage écologique. Que vous ayez un jardin, un balcon ou simplement l’envie d’en savoir plus, cet atelier est fait pour vous. Venez partager un moment de détente, échanger des astuces et repartir avec des connaissances qui embelliront votre quotidien. Rejoignez-nous pour un après-midi de verdure et de convivialité avec SeniorLove.',
      alt_title: 'Atelier de Jardinage à Toulouse',
      postal_code: '31000',
      hobbies: ['Jardinage', 'Botanique', 'Écologie'],
      date: '19/11/2024',
    },
    {
      id: 7,
      name: 'Cours de photographie',
      location: 'Strasbourg',
      photo: '/img/events/photographie.webp',
      alt: 'Cours de photographie à Strasbourg',
      description:
        'Capturez l’instant parfait lors de notre Cours de photographie à Strasbourg ! Organisé par SeniorLove, cet atelier vous permettra de maîtriser l’art de la photographie, que vous soyez débutant ou amateur éclairé. Sous la guidance d’un photographe professionnel, vous apprendrez les techniques essentielles pour sublimer vos clichés, qu’il s’agisse de paysages, de portraits ou de scènes urbaines. Venez développer votre regard artistique et partager votre passion avec d’autres passionnés de photo dans une ambiance conviviale. SeniorLove vous invite à immortaliser des moments inoubliables avec style.',
      alt_title: 'Cours de Photographie à Strasbourg',
      postal_code: '67000',
      hobbies: ['Photographie', 'Art visuel', 'Exploration urbaine'],
      date: '26/11/2024',
    },
    {
      id: 8,
      name: 'Soirée jazz',
      location: 'Nantes',
      photo: '/img/events/jazz.webp',
      alt: 'Soirée jazz à Nantes',
      description:
        'Laissez-vous emporter par le rythme envoûtant du jazz lors de notre Soirée jazz à Nantes ! Organisée par SeniorLove, cette soirée musicale vous propose de plonger dans l’univers du jazz avec des musiciens talentueux qui vous feront vibrer au son des saxophones, trompettes et pianos. Que vous soyez amateur de jazz ou simplement à la recherche d’une soirée élégante et agréable, cet événement est fait pour vous. Rejoignez-nous pour une soirée où musique et rencontres s’harmonisent parfaitement, et laissez-vous séduire par l’ambiance feutrée et enivrante du jazz avec SeniorLove.',
      alt_title: 'Soirée Jazz à Nantes',
      postal_code: '44000',
      hobbies: ['Musique jazz', 'Sorties culturelles', 'Danse'],
      date: '03/12/2024',
    },
    {
      id: 9,
      name: 'Club de lecture virtuel',
      location: 'Lille',
      photo: '/img/events/lecture.webp',
      alt: 'Club de lecture virtuel à Lille',
      description:
        'Rejoignez notre Club de lecture virtuel et partagez votre amour des livres avec d’autres passionnés de lecture à Lille et au-delà ! Organisé par SeniorLove, cet événement en ligne vous permet de discuter des œuvres littéraires qui vous ont marqué, d’échanger des recommandations et de découvrir de nouveaux auteurs depuis le confort de votre domicile. Que vous soyez amateur de romans, de poésie ou d’essais, ce club est l’endroit idéal pour enrichir votre expérience littéraire et nouer des liens avec d’autres lecteurs. Partagez vos impressions et élargissez vos horizons littéraires avec SeniorLove.',
      alt_title: 'Club de Lecture Virtuel à Lille',
      postal_code: '59000',
      hobbies: ['Lecture', 'Discussions littéraires', 'Écriture'],
      date: '10/12/2024',
    },
    {
      id: 10,
      name: 'Cours de guitare',
      location: 'Avignon',
      photo: '/img/events/guitare.webp',
      alt: 'Cours de guitare à Avignon',
      description:
        'Apprenez à jouer de la guitare ou perfectionnez votre technique lors de notre Cours de guitare à Avignon ! Organisé par SeniorLove, cet atelier est conçu pour les musiciens de tous niveaux, qu’ils soient débutants ou plus expérimentés. Sous la guidance d’un professeur de guitare passionné, vous explorerez les bases du jeu de guitare, les accords, les rythmes et les techniques pour jouer vos morceaux préférés. Rejoignez-nous pour un moment musical enrichissant où apprentissage et plaisir se rencontrent, et laissez-vous emporter par la magie de la musique avec SeniorLove.',
      alt_title: 'Cours de Guitare à Avignon',
      postal_code: '84000',
      hobbies: ['Musique', 'Pratique instrumentale', 'Chant'],
      date: '17/12/2024',
    },
    {
      id: 11,
      name: 'Soirée méditation',
      location: 'Rennes',
      photo: '/img/events/meditation.webp',
      alt: 'Soirée méditation à Rennes',
      description:
        'Plongez dans un état de paix intérieure lors de notre Soirée méditation à Rennes ! Organisé par SeniorLove, cet événement vous invite à vous recentrer et à apaiser votre esprit grâce à des techniques de méditation guidées. Que vous soyez novice en méditation ou pratiquant confirmé, cette soirée est une occasion parfaite pour vous détendre, vous ressourcer et vous connecter à vous-même. Rejoignez-nous pour un moment de sérénité et de bien-être, dans un cadre apaisant où vous pourrez vous échapper du stress quotidien et trouver l’harmonie intérieure avec SeniorLove.',
      alt_title: 'Soirée de Méditation à Rennes',
      postal_code: '35000',
      hobbies: ['Méditation', 'Relaxation', 'Bien-être'],
      date: '24/12/2024',
    },
    {
      id: 12,
      name: 'Montgolfière',
      location: 'Saumur',
      photo: '/img/events/montgolfiere.webp',
      alt: 'Montgolfière à Saumur',
      description:
        'Rejoignez-nous pour un événement magique et inoubliable lors des Montgolfiades de Saumur ! Organisé par SeniorLove, cet événement vous invite à admirer le spectacle époustouflant de dizaines de montgolfières colorées s’envolant dans le ciel au-dessus de la magnifique vallée de la Loire. Que vous soyez passionné de montgolfières ou simplement à la recherche d’une expérience unique, cet événement est fait pour vous. SeniorLove est fier de vous offrir cette opportunité de vivre un moment de poésie et d’évasion, tout en créant des souvenirs inoubliables et des connexions significatives. Rendez-vous aux Montgolfiades de Saumur pour une aventure aérienne exceptionnelle !',
      alt_title: 'Les Montgolfiades de Saumur',
      postal_code: '49400',
      hobbies: [
        'Observation des paysages',
        'Photographie aérienne',
        'Événements en plein air',
      ],
      date: '31/12/2024',
    },
  ];

  return (
    <main className="w-full min-h-screen flex-grow flex flex-col justify-start items-center bg-primaryGrey pb-8 gap-8">
      <p className="text-sm text-center font-semibold md:text-xl my-4 text-primaryText w-9/12 pt-8">
        Bienvenue sur notre page dédiée aux{' '}
        <span className="text-secondaryPink">événements</span> que nous
        organisons ! Découvrez une sélection d&apos;activités et
        d&apos;événements qui se dérouleront prochainement dans notre
        communauté. Que vous soyez amateur de culture, passionné de sport, ou
        simplement à la recherche d&apos;une sortie en plein air, il y en a pour
        tous les goûts.
      </p>
      <div className="flex flex-wrap gap-10 justify-center content-around w-10/12">
        {events.map((event) => (
          <EventSticker event={event} key={event.name} />
        ))}
      </div>
    </main>
  );
}
