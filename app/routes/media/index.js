import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  async model(params) {
    let mediaId = get(params, 'media_id');
    let store = get(this, 'store');
    let media = await store.findRecord('media', mediaId);
    return media;
  }
});
