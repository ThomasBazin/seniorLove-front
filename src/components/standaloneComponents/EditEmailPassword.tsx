import { useState } from 'react';
import { IUsers } from '../../@types/IUsers';

interface EditEmailPasswordProps {
  user: IUsers;
}

export default function EditMailPassword({ user }: EditEmailPasswordProps) {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  return (
    <div className="flex flex-col gap-6">
      <button
        // onClick={() => setIsEmailModalOpen(true)}
        className=" text-secondaryPink text-start px-4 py-2 rounded-lg"
      >
        Modifier l'adresse e-mail
      </button>
      <button
        // onClick={() => setIsPasswordModalOpen(true)}
        className=" text-secondaryPink text-start px-4 py-2 rounded-lg"
      >
        Modifier le mot de passe
      </button>
      {/* <div className="flex flex-col gap-3">
        <label htmlFor="email" className="font-medium text-secondaryPink">
          Changez votre adresse e-mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder={user.email}
          className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700"
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="old-password"
            className="font-medium text-secondaryPink"
          >
            Mot de passe actuel
          </label>
          <input
            type="password"
            name="old-password"
            id="old-password"
            placeholder="Votre mot de passe actuel"
            className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="new-password"
            className="font-medium text-secondaryPink"
          >
            Nouveau mot de passe
          </label>
          <input
            type="password"
            name="new-password"
            id="new-password"
            placeholder="Nouveau mot de passe"
            className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="confirm-password"
            className="font-medium text-secondaryPink"
          >
            Confirmez le nouveau mot de passe
          </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirmez le nouveau mot de passe"
            className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700"
          />
        </div>
      </div> */}
    </div>
  );
}
