import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition: function() {
      if (Em.$('.sidebar-toggle:visible').length > 0) {
        $('.side-nav').sideNav('hide');
      }
    }
  }
});
