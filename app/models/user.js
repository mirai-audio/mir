import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const VALIDATIONS = buildValidations({
  email: [
    validator('presence', true),
    validator('format', {
      type: 'email',
      regex: /\S{1,}@\S{2,}.\S{2,}/u
    })
  ],
  password: [
    validator('presence', true),
    validator('length', {
      min: 12,
      max: 1024
    })
  ],
  passwordConfirmation: [
    validator('confirmation', {
      on: 'password'
    })
  ]
});

export default DS.Model.extend(VALIDATIONS, {
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  username: DS.attr('string'),

  medias: DS.hasMany('media', { inverse: 'user' })
});
