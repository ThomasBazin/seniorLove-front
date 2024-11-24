// eslint-disable-next-line prettier/prettier, import/no-extraneous-dependencies
import Joi from 'joi';

const stepFourSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false }, minDomainSegments: 2 })
    .required()
    .messages({
      'string.base': 'Veuillez entrer une adresse mail valide !',
      'string.email': 'Veuillez entrer une adresse mail valide !',
      'string.pattern.base': 'Veuillez entrer une adresse mail valide !',
      'any.required': 'Veuillez entrer une adresse mail !',
    }),
  password: Joi.string()
    .min(12)
    .max(36)
    .pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,36}$/)
    .required()
    .messages({
      'string.min': 'Le mot de passe doit contenir au moins 12 caractères.',
      'string.max': 'Le mot de passe doit contenir maximum 36 caractères.',
      'string.empty': 'Veuillez indiquer votre mot de passe et le confirmer.',
      'string.required':
        'Veuillez indiquer votre mot de passe et le confirmer.',
      'string.pattern.base':
        'Le mot de passe doit contenir au moins une majuscule, un chiffre et un caractère spécial.',
    }),
  repeatPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Le mot de passe et sa confirmation doivent être identiques.',
  }),
});

export default stepFourSchema;
