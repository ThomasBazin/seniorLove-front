import { Link } from 'react-router-dom';

export default function ErrorServerPage() {
  return (
    <div className="flex flex-col items-center min-h-full flex-grow text-center text-primaryText my-20">
      <h1 className="text-3xl font-semibold mb-20">
        Oups ! Le serveur ne répond pas...
      </h1>
      <div className="mx-20">
        {' '}
        <p className="text-lg mb-2">
          Pas de panique, nous vous proposons de retenter ultérieurement, le
          temps que nos équipes règlent ce soucis.
        </p>
      </div>

      <p className="text-lg mb-6">
        Le problème dure depuis trop longtemps ? Contactez notre{' '}
        <Link to="/support" className="text-secondaryPink">
          support
        </Link>{' '}
        et nous vous aiderons !
      </p>
    </div>
  );
}
