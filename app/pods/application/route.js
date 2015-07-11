import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition: function() {
      if (Ember.$('.sidebar-toggle:visible').length > 0) {
        Ember.$('.side-nav').sideNav('hide');
      }
    }
  }
});
