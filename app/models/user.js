import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  email: attr('string'),
  password: attr('string'),
  passwordConfirmation: attr('string'),
  username: attr('string'),

  medias: hasMany('media', { inverse: 'user' })
});
