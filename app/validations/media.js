import {
  validatePresence,
  validateLength,
  validateFormat
} from 'ember-changeset-validations/validators';

export default {
  title: [validatePresence(true), validateLength({ min: 1 })],

  url: [
    validatePresence(true),
    validateLength({
      min: 11,
      max: 2048
    }), // length sanity check URL must be longer than e.g. 'http://t.co'
    validateFormat({ type: 'url' })
  ]
};
