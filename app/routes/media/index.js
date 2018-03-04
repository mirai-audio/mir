import Route from '@ember/routing/route';
import { get } from '@ember/object';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  async model(params) {
    let mediaId = get(params, 'media_id');
    let store = get(this, 'store');
    let media = await store.findRecord('media', mediaId);
    return media;
  }
});
