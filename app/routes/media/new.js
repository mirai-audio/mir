import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { get, getProperties, set } from '@ember/object';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import MediaValidations from 'mir/validations/media';

export default Route.extend(AuthenticatedRouteMixin, {
  hasCompleted: false,
  media: null,

  model() {
    let store = get(this, 'store');
    // create an empty `media` record to begin creation, must be cleaned up
    // if not saved.
    let validatorFn = lookupValidator(MediaValidations);
    let media = store.createRecord('media');
    set(this, 'media', media); // cache it, to clean it in deactivate
    return new Changeset(media, validatorFn, MediaValidations);
  },

  deactivate() {
    // `model()` creates a stub media model and sets it to the changeset, this
    // creates an Ember Data model that'll be listed on the index route if the
    // user aborts adding a new one, so we use hasCompleted to determine if it
    // was created, and clean it up if not created.
    let { hasCompleted, media } = getProperties(this, 'hasCompleted', 'media');
    if (!hasCompleted) {
      // `media` creation was not completed, cleanup the bare `media` model.
      media.destroyRecord();
    }
  },

  actions: {
    onCreated() {
      // set hasCompleted to prevent `deactivate` from deleting new model
      set(this, 'hasCompleted', true);
      return this.transitionTo('index');
    }
  }
});
