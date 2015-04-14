import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    Ember.$('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
  },
  isNew: function() {
    var model = this.get('model');
    return model.get('isNew');
  }.property('model'),
  actions: {
    save: function() {
      this.sendAction('save', this.get('model'));
    }
  }
});
