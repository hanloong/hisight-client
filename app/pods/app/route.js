import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    didTransition: function() {
      if (Ember.$('.sidebar-toggle:visible').length > 0) {
        Ember.$('.side-nav').sideNav('hide');
      }
    }
  }
});

