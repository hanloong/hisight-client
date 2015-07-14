import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    didTransition: function() {
      if (Ember.$('.sidebar-toggle:visible').length > 0) {
        Ember.$('.side-nav').sideNav('hide');
      }
    }
  }
});
