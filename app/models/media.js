import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const VALIDATIONS = buildValidations({
  title: [
    validator('presence', true),
    validator('length', {
      min: 1
    })
  ],
  url: [
    validator('presence', true),
    validator('length', {
      min: 11, // sanity check e.g. 'http://t.co'
      max: 2048
    }),
    validator('format', {
      type: 'url'
    })
  ]
});

export default DS.Model.extend(VALIDATIONS, {
  title: DS.attr('string'),
  url: DS.attr('string'),
  insertedAt: DS.attr('string'),
  updatedAt: DS.attr('string'),

  user: DS.belongsTo('user', { inverse: 'medias' })
});
