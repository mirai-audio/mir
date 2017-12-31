import Route from '@ember/routing/route';
import { get } from '@ember/object';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import MediaValidations from '../../validations/media';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    let store = get(this, 'store');
    let media = store.createRecord('media');
    let validatorFn = lookupValidator(MediaValidations);
    return new Changeset(media, validatorFn, MediaValidations);
  },

  actions: {
    onCreated() {
      return this.transitionTo('index');
    }
  }
});
