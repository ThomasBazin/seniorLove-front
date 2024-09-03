export default function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = [
    { text: 'Signaler un contenu illégal', href: '#' },
    { text: 'Politique de confidentialité', href: '#' },
    { text: 'Conditions générales', href: '#' },
    { text: 'Charte d’utilisation des cookies', href: '#' },
    { text: 'Règles de communauté', href: '#' },
  ];

  return (
    <div className="bg-white p-6 flex-column lg:justify-between items-center rounded-lg w-full mx-auto text-primaryText text-sm md:text-base pb-20">
      <div className="footer-assistance_container text-center mb-2">
        <p>Assistance</p>
        <p>
          Pour toute question ou assistance, veuillez nous contacter à
          l&apos;adresse suivante :{' '}
          <a href="mailto:support@seniorlove.fr">support@seniorlove.fr</a> ou
          appelez-nous au <a href="tel:+330123456789">+33 (0)1 23 45 67 89</a>.
        </p>
      </div>
      <div className="footer-copyright_container text-center mb-2">
        <p>
          © <span id="year">{year}</span> SeniorLove. Tous droits réservés.
        </p>
      </div>
      <div className="footer-links_container flex justify-center w-full">
        <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
          {footerLinks.map((link) => (
            <li key={link.text} className="list-none text-center">
              <a href={link.href} className="text-primaryText hover:underline">
                {link.text}
              </a>{' '}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
