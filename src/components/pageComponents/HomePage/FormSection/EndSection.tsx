import { Link } from 'react-router-dom';
import DefaultBtn from '../../../standaloneComponents/Button/DefaultBtn';
import Logo from '/img/logo-text-seniorlove.webp';

export default function EndSection() {
  return (
    <div className="bg-white opacity-90 px-10 pb-10 pt-4 rounded-xl shadow-md my-10 mx-4 md:mx-auto md:my-0">
      <div className="flex flex-col items-center justify-center mb-4">
        <img src={Logo} alt="" className="max-w-44 mb-4" />
      </div>
      <p className="mb-4 text-lg text-primaryText font-semibold text-center uppercase">
        Votre inscription est en cours de traitement.
      </p>
      <p className="mb-4 text-lg text-primaryText font-semibold text-center uppercase">
        Si votre profil est validé vous pourrez vous connecter d&#39;ici
        quelques heures.
      </p>
      <div className="flex justify-center mt-6 mb-2">
        <Link to="/login">
          <DefaultBtn btnType="button" btnText="Me connecter" />
        </Link>
      </div>
      <div className="flex justify-center text-secondaryPink mt-1">
        <Link to="/">Revenir à l&#39;accueil</Link>
      </div>
    </div>
  );
}
