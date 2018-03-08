import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { set } from '@ember/object';

export default Route.extend(ApplicationRouteMixin, {
  actions: {
    async loading(transition) {
      // Toggle progress bar when transition is resolving the model promise
      let controller = this.controllerFor(this.routeName);
      set(controller, 'isLoading', true);
      await transition;
      set(controller, 'isLoading', false);
    }
  }
});
