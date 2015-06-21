import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    newFactor: function(area) {
      return this.store.createRecord('factor', {area: area});
    }
  }
});
