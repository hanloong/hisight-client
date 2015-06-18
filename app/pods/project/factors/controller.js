import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newFactor: function(area) {
      console.log(this.get('model'));
      console.log('new factor');
      return this.store.createRecord('factor', {area: area});
    }
  }
});
