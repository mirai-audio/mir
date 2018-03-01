import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { get, set } from '@ember/object';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import MediaValidations from 'mir/validations/media';

export default Route.extend(AuthenticatedRouteMixin, {
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
    let media = get(this, 'media');
    // `model()` creates an empty media model and sets it to the changeset, this
    // creates an Ember Data model that'll be listed on the index route if the
    // user aborts adding a new one, so we call rollbackAttributes to cleanup
    // any unsaved models.
    // `media` was never saved, cleanup empty `media` model.
    media.rollbackAttributes();
  },

  actions: {
    onCreated() {
      let media = get(this, 'media');
      // redirect user to new media detail route upon success, pass model
      return this.replaceWith('media.index', media);
    }
  }
});
