import DefaultBtn from '../../standaloneComponents/Button/DefaultBtn';
import ProfileSticker from '../../standaloneComponents/ProfileSticker/ProfileSticker';

export default function DisplayUsers() {
  const users = [
    {
      name: 'Natasha',
      picture: '/img/users/natasha.webp',
      alt: 'Natasha',
      age: 63,
    },
    {
      name: 'Isabella',
      picture: '/img/users/isabella.webp',
      alt: 'Isabella',
      age: 61,
    },
    {
      name: 'Helena',
      picture: '/img/users/helena.webp',
      alt: 'Helena',
      age: 68,
    },
    {
      name: 'Eva',
      picture: '/img/users/eva.webp',
      alt: 'Eva',
      age: 64,
    },
    {
      name: 'Dominique',
      picture: '/img/users/dominique.webp',
      alt: 'Dominique',
      age: 68,
    },
    {
      name: 'Etienne',
      picture: '/img/users/etienne.webp',
      alt: 'Etienne',
      age: 66,
    },
    {
      name: 'Emilien',
      picture: '/img/users/emilien.webp',
      alt: 'Emilien',
      age: 75,
    },
    {
      name: 'Thomas',
      picture: '/img/users/thomas.webp',
      alt: 'Thomas',
      age: 65,
    },
    {
      name: 'Kevin',
      picture: '/img/users/kevin.webp',
      alt: 'Kevin',
      age: 63,
    },
    {
      name: 'Widi',
      picture: '/img/users/widi.webp',
      alt: 'Widi',
      age: 72,
    },
  ];
  return (
    <div className="w-full py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center mx-auto w-11/12 pb-8">
        {users.map((user) => (
          <ProfileSticker user={user} key={user.picture} />
        ))}
      </div>
      <DefaultBtn btnText="Voir plus de profil" />
    </div>
  );
}
