import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('media').then(medias => ({
      all: medias,
      filter: params.state,
    }));
  },
});
