import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  insertedAt: DS.attr('string'),
  updatedAt: DS.attr('string'),

  user: DS.belongsTo('user', { inverse: 'medias' })
});
