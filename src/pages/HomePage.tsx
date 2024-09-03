import Main from '../components/HomePage/Main';
import NavBarV1 from '../components/NavBar/NavBarV1';

export default function HomePage() {
  return (
    <>
      <NavBarV1 />
      <Main />
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
          <ul className="flex flex-wrap gap-8 justify-center text-xs md:text-lg">
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
    </>
  );
}
