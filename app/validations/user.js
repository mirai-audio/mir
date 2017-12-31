import {
  validateConfirmation,
  validateFormat,
  validateLength,
  validatePresence
} from 'ember-changeset-validations/validators';

export default {
  email: [validatePresence(true), validateFormat({ type: 'email' })],

  password: [
    validatePresence(true),
    validateLength({
      min: 12,
      max: 1084
    })
  ],

  passwordConfirmation: [validateConfirmation({ on: 'password' })]
};
